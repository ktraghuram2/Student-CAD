import * as THREE from 'three';
import { CADEntity, Layer, SnapResult, VisualStyle } from '../types/cad';
import { CADGrid } from './grid';
import { CameraController } from './camera-controller';
import { SnapManager } from '../geometry2d/snapping';
import { EntityFactory } from '../geometry2d/entities';
import { SolidFactory } from '../modeling3d/solids';

export class CADEngine {
  canvas: HTMLCanvasElement;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  grid: CADGrid;
  cameraController: CameraController;
  snapManager: SnapManager;

  layers: Layer[] = [
    { id: '0', name: '0', color: '#ffffff', visible: true, locked: false, linetype: 'Continuous', lineweight: 0.25 },
    { id: 'center', name: 'Centerlines', color: '#e53935', visible: true, locked: false, linetype: 'Center', lineweight: 0.18 },
    { id: 'dims', name: 'Dimensions', color: '#4fc3f7', visible: true, locked: false, linetype: 'Continuous', lineweight: 0.18 },
    { id: 'hidden', name: 'Hidden', color: '#ffb300', visible: true, locked: false, linetype: 'Hidden', lineweight: 0.18 },
    { id: 'solids', name: '3D Solids', color: '#0084ff', visible: true, locked: false, linetype: 'Continuous', lineweight: 0.35 }
  ];
  currentLayerId = '0';

  entities: CADEntity[] = [];
  selectedEntities: CADEntity[] = [];

  // Preview Rubberband Line / Shape during drawing
  private previewMesh: THREE.Object3D | null = null;
  private planeZ0 = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
  private raycaster = new THREE.Raycaster();

  currentCursorWorld = new THREE.Vector3();
  activeSnap: SnapResult | null = null;
  visualStyle: VisualStyle = '2d_wireframe';

  // Undo / Redo history
  private undoStack: CADEntity[][] = [];
  private redoStack: CADEntity[][] = [];

  onCoordsUpdate?: (x: number, y: number, z: number) => void;
  onSnapUpdate?: (snap: SnapResult | null, screenPos: { x: number, y: number }) => void;
  onCameraChange?: (quat: THREE.Quaternion) => void;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;

    // 1. Scene & Renderer
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x212830); // AutoCAD Charcoal

    const width = canvas.clientWidth || window.innerWidth;
    const height = canvas.clientHeight || window.innerHeight;

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      preserveDrawingBuffer: true
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;

    // 2. Dual Camera (Perspective with CAD settings)
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.5, 10000);
    this.camera.position.set(0, 0, 180);
    this.camera.up.set(0, 1, 0);
    this.camera.lookAt(0, 0, 0);

    // 3. Lighting for 3D solids
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    this.scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight1.position.set(100, 150, 200);
    this.scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xffffff, 0.4);
    dirLight2.position.set(-100, -100, -50);
    this.scene.add(dirLight2);

    // 4. Grid System
    this.grid = new CADGrid(1000, 10, 5);
    this.scene.add(this.grid.getGroup());

    // 5. Snapping Manager
    this.snapManager = new SnapManager();

    // 6. Camera Controller
    this.cameraController = new CameraController(canvas, this.camera, {
      onCameraChange: (quat) => {
        if (this.onCameraChange) this.onCameraChange(quat);
      }
    });

    // 7. Event listeners
    this.setupMouseEvents();
    window.addEventListener('resize', this.onWindowResize.bind(this));

    this.animate();
  }

  getCurrentLayer(): Layer {
    return this.layers.find(l => l.id === this.currentLayerId) || this.layers[0];
  }

  private setupMouseEvents() {
    this.canvas.addEventListener('pointermove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      this.raycaster.setFromCamera(new THREE.Vector2(mouseX, mouseY), this.camera);
      const targetPoint = new THREE.Vector3();
      this.raycaster.ray.intersectPlane(this.planeZ0, targetPoint);

      if (targetPoint) {
        // Snap detection
        const snap = this.snapManager.findSnap(
          targetPoint,
          this.camera,
          rect.width,
          rect.height,
          this.entities
        );

        this.activeSnap = snap;
        this.currentCursorWorld.copy(snap ? snap.point : targetPoint);

        if (this.onCoordsUpdate) {
          this.onCoordsUpdate(
            this.currentCursorWorld.x,
            this.currentCursorWorld.y,
            this.currentCursorWorld.z
          );
        }

        if (this.onSnapUpdate) {
          const screenPos = this.worldToScreen(this.currentCursorWorld, rect.width, rect.height);
          this.onSnapUpdate(snap, screenPos);
        }
      }
    });
  }

  worldToScreen(worldPoint: THREE.Vector3, width: number, height: number): { x: number, y: number } {
    const p = worldPoint.clone().project(this.camera);
    return {
      x: (p.x * 0.5 + 0.5) * width,
      y: (-p.y * 0.5 + 0.5) * height
    };
  }

  screenToWorld(screenX: number, screenY: number): THREE.Vector3 {
    const rect = this.canvas.getBoundingClientRect();
    const nx = ((screenX - rect.left) / rect.width) * 2 - 1;
    const ny = -((screenY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(new THREE.Vector2(nx, ny), this.camera);
    const target = new THREE.Vector3();
    this.raycaster.ray.intersectPlane(this.planeZ0, target);
    return target || new THREE.Vector3();
  }

  // --- Entity Management ---

  addEntity(entity: CADEntity, saveUndo = true) {
    if (saveUndo) this.saveUndoState();
    this.entities.push(entity);
    this.scene.add(entity.object3D);
  }

  removeEntity(id: string) {
    const idx = this.entities.findIndex(e => e.id === id);
    if (idx !== -1) {
      this.saveUndoState();
      const ent = this.entities[idx];
      this.scene.remove(ent.object3D);
      this.entities.splice(idx, 1);
    }
  }

  clearEntities() {
    this.saveUndoState();
    for (const ent of this.entities) {
      this.scene.remove(ent.object3D);
    }
    this.entities = [];
  }

  saveUndoState() {
    // Snapshot entities list
    this.undoStack.push([...this.entities]);
    this.redoStack = [];
  }

  undo() {
    if (this.undoStack.length === 0) return;
    this.redoStack.push([...this.entities]);
    const previous = this.undoStack.pop()!;

    for (const ent of this.entities) {
      this.scene.remove(ent.object3D);
    }
    this.entities = previous;
    for (const ent of this.entities) {
      this.scene.add(ent.object3D);
    }
  }

  redo() {
    if (this.redoStack.length === 0) return;
    this.undoStack.push([...this.entities]);
    const next = this.redoStack.pop()!;

    for (const ent of this.entities) {
      this.scene.remove(ent.object3D);
    }
    this.entities = next;
    for (const ent of this.entities) {
      this.scene.add(ent.object3D);
    }
  }

  // --- Dynamic Rubberband Preview ---

  setPreviewLine(p1: THREE.Vector3, p2: THREE.Vector3) {
    this.clearPreview();
    const geom = new THREE.BufferGeometry().setFromPoints([p1, p2]);
    const mat = new THREE.LineDashedMaterial({
      color: 0x0084ff,
      dashSize: 3,
      gapSize: 2,
      linewidth: 1.5
    });
    const line = new THREE.Line(geom, mat);
    line.computeLineDistances();
    this.previewMesh = line;
    this.scene.add(line);
  }

  setPreviewCircle(center: THREE.Vector3, radius: number) {
    this.clearPreview();
    const points: THREE.Vector3[] = [];
    for (let i = 0; i <= 64; i++) {
      const th = (i / 64) * Math.PI * 2;
      points.push(new THREE.Vector3(
        center.x + Math.cos(th) * radius,
        center.y + Math.sin(th) * radius,
        0
      ));
    }
    const geom = new THREE.BufferGeometry().setFromPoints(points);
    const mat = new THREE.LineDashedMaterial({ color: 0x0084ff, dashSize: 3, gapSize: 2 });
    const circle = new THREE.Line(geom, mat);
    circle.computeLineDistances();
    this.previewMesh = circle;
    this.scene.add(circle);
  }

  setPreviewRectangle(p1: THREE.Vector3, p2: THREE.Vector3) {
    this.clearPreview();
    const minX = Math.min(p1.x, p2.x);
    const maxX = Math.max(p1.x, p2.x);
    const minY = Math.min(p1.y, p2.y);
    const maxY = Math.max(p1.y, p2.y);

    const corners = [
      new THREE.Vector3(minX, minY, 0),
      new THREE.Vector3(maxX, minY, 0),
      new THREE.Vector3(maxX, maxY, 0),
      new THREE.Vector3(minX, maxY, 0),
      new THREE.Vector3(minX, minY, 0)
    ];
    const geom = new THREE.BufferGeometry().setFromPoints(corners);
    const mat = new THREE.LineDashedMaterial({ color: 0x0084ff, dashSize: 3, gapSize: 2 });
    const rect = new THREE.Line(geom, mat);
    rect.computeLineDistances();
    this.previewMesh = rect;
    this.scene.add(rect);
  }

  clearPreview() {
    if (this.previewMesh) {
      this.scene.remove(this.previewMesh);
      this.previewMesh = null;
    }
  }

  // --- Visual Style Switching ---

  setVisualStyle(style: VisualStyle) {
    this.visualStyle = style;
    for (const ent of this.entities) {
      if (ent.type.startsWith('solid') || ent.type === 'solid_csg') {
        const mesh = ent.object3D as THREE.Mesh;
        if (mesh && mesh.material) {
          const mat = mesh.material as THREE.MeshStandardMaterial;
          switch (style) {
            case '2d_wireframe':
              mat.wireframe = true;
              mat.transparent = false;
              mat.opacity = 1;
              break;
            case 'shaded_edges':
              mat.wireframe = false;
              mat.transparent = false;
              mat.opacity = 1;
              if (ent.edges3D) ent.edges3D.visible = true;
              break;
            case 'conceptual':
              mat.wireframe = false;
              mat.roughness = 0.8;
              mat.metalness = 0.0;
              mat.transparent = false;
              mat.opacity = 1;
              break;
            case 'realistic':
              mat.wireframe = false;
              mat.roughness = 0.2;
              mat.metalness = 0.3;
              mat.transparent = false;
              mat.opacity = 1;
              break;
            case 'xray':
              mat.wireframe = false;
              mat.transparent = true;
              mat.opacity = 0.45;
              if (ent.edges3D) ent.edges3D.visible = true;
              break;
          }
        }
      }
    }
  }

  private onWindowResize() {
    const width = this.canvas.clientWidth;
    const height = this.canvas.clientHeight;
    if (width === 0 || height === 0) return;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  private animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.renderer.render(this.scene, this.camera);
  }
}
