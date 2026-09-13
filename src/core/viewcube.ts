import * as THREE from 'three';

export interface ViewCubeCallbacks {
  onViewChange: (viewName: string) => void;
}

export class ViewCube {
  private container: HTMLElement;
  private scene: THREE.Scene;
  private camera: THREE.OrthographicCamera;
  private renderer: THREE.WebGLRenderer;
  private cubeMesh: THREE.Mesh;
  private compassGroup: THREE.Group;
  private raycaster = new THREE.Raycaster();
  private mouse = new THREE.Vector2();
  private callbacks: ViewCubeCallbacks;

  constructor(container: HTMLElement, callbacks: ViewCubeCallbacks) {
    this.container = container;
    this.callbacks = callbacks;

    const width = container.clientWidth || 120;
    const height = container.clientHeight || 120;

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.container.appendChild(this.renderer.domElement);

    // Scene & Camera
    this.scene = new THREE.Scene();
    const aspect = width / height;
    const d = 1.8;
    this.camera = new THREE.OrthographicCamera(-d * aspect, d * aspect, d, -d, 0.1, 100);
    this.camera.position.set(2, 2, 2);
    this.camera.lookAt(0, 0, 0);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    this.scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
    dirLight.position.set(3, 4, 2);
    this.scene.add(dirLight);

    // Build the ViewCube Mesh
    const materials = [
      this.createFaceMaterial('RIGHT'),  // +X
      this.createFaceMaterial('LEFT'),   // -X
      this.createFaceMaterial('TOP'),    // +Y
      this.createFaceMaterial('BOTTOM'), // -Y
      this.createFaceMaterial('FRONT'),  // +Z
      this.createFaceMaterial('BACK')    // -Z
    ];

    const geometry = new THREE.BoxGeometry(1.2, 1.2, 1.2);
    this.cubeMesh = new THREE.Mesh(geometry, materials);
    this.scene.add(this.cubeMesh);

    // Edge highlight for cube
    const edgesGeom = new THREE.EdgesGeometry(geometry);
    const edgesMat = new THREE.LineBasicMaterial({ color: 0x485465, linewidth: 2 });
    this.cubeMesh.add(new THREE.LineSegments(edgesGeom, edgesMat));

    // Compass Ring
    this.compassGroup = this.createCompass();
    this.scene.add(this.compassGroup);

    // Event listeners
    this.renderer.domElement.addEventListener('pointerdown', this.onPointerDown.bind(this));
    this.render();
  }

  private createFaceMaterial(text: string): THREE.MeshStandardMaterial {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d')!;

    // Background
    ctx.fillStyle = '#2f3844';
    ctx.fillRect(0, 0, 128, 128);

    // Inner border
    ctx.strokeStyle = '#4b5768';
    ctx.lineWidth = 4;
    ctx.strokeRect(4, 4, 120, 120);

    // Text
    ctx.fillStyle = '#e1e7ec';
    ctx.font = 'bold 24px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, 64, 64);

    const texture = new THREE.CanvasTexture(canvas);
    return new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.5,
      metalness: 0.1
    });
  }

  private createCompass(): THREE.Group {
    const group = new THREE.Group();
    group.position.y = -0.7;

    // Ring
    const ringGeom = new THREE.RingGeometry(0.85, 1.05, 32);
    ringGeom.rotateX(-Math.PI / 2);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x222a33, side: THREE.DoubleSide });
    const ring = new THREE.Mesh(ringGeom, ringMat);
    group.add(ring);

    // Compass direction labels
    const directions = [
      { text: 'N', x: 0, z: -0.95 },
      { text: 'S', x: 0, z: 0.95 },
      { text: 'E', x: 0.95, z: 0 },
      { text: 'W', x: -0.95, z: 0 }
    ];

    directions.forEach(d => {
      const sprite = this.createCompassText(d.text);
      sprite.position.set(d.x, 0.05, d.z);
      sprite.scale.set(0.4, 0.4, 1);
      group.add(sprite);
    });

    return group;
  }

  private createCompassText(char: string): THREE.Sprite {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = '#0084ff';
    ctx.font = 'bold 36px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(char, 32, 32);

    const texture = new THREE.CanvasTexture(canvas);
    const mat = new THREE.SpriteMaterial({ map: texture, transparent: true });
    return new THREE.Sprite(mat);
  }

  private onPointerDown(event: PointerEvent) {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObject(this.cubeMesh);

    if (intersects.length > 0) {
      const normal = intersects[0].face?.normal;
      if (normal) {
        // Transform normal to world space if cube was rotated
        const worldNormal = normal.clone().applyQuaternion(this.cubeMesh.quaternion).round();

        if (worldNormal.y > 0.5) this.callbacks.onViewChange('top');
        else if (worldNormal.y < -0.5) this.callbacks.onViewChange('bottom');
        else if (worldNormal.z > 0.5) this.callbacks.onViewChange('front');
        else if (worldNormal.z < -0.5) this.callbacks.onViewChange('back');
        else if (worldNormal.x > 0.5) this.callbacks.onViewChange('right');
        else if (worldNormal.x < -0.5) this.callbacks.onViewChange('left');
      }
    }
  }

  /**
   * Syncs ViewCube rotation with the main CAD camera
   */
  updateOrientation(mainCameraQuaternion: THREE.Quaternion) {
    this.camera.position.set(0, 0, 3.5).applyQuaternion(mainCameraQuaternion);
    this.camera.quaternion.copy(mainCameraQuaternion);
    this.render();
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  dispose() {
    this.renderer.dispose();
  }
}
