import * as THREE from 'three';
import { StandardView, VisualStyle } from '../types/cad';

export interface CameraCallbacks {
  onCameraChange?: (cameraQuaternion: THREE.Quaternion) => void;
}

export class CameraController {
  domElement: HTMLElement;
  camera: THREE.PerspectiveCamera;
  target = new THREE.Vector3(0, 0, 0);

  isPanning = false;
  isOrbiting = false;
  private previousMousePosition = { x: 0, y: 0 };
  private callbacks: CameraCallbacks;

  // Spherical coordinates for 3D Orbit
  private spherical = new THREE.Spherical(120, Math.PI / 4, Math.PI / 4);

  constructor(domElement: HTMLElement, camera: THREE.PerspectiveCamera, callbacks: CameraCallbacks) {
    this.domElement = domElement;
    this.camera = camera;
    this.callbacks = callbacks;

    this.setView('top');
    this.setupEvents();
  }

  setupEvents() {
    this.domElement.addEventListener('pointerdown', this.onPointerDown.bind(this));
    window.addEventListener('pointermove', this.onPointerMove.bind(this));
    window.addEventListener('pointerup', this.onPointerUp.bind(this));
    this.domElement.addEventListener('wheel', this.onWheel.bind(this), { passive: false });

    // Double-click middle mouse button for Zoom Extents
    this.domElement.addEventListener('dblclick', (e) => {
      if (e.button === 1 || e.button === 0) {
        this.zoomExtents();
      }
    });
  }

  private onPointerDown(e: PointerEvent) {
    this.previousMousePosition = { x: e.clientX, y: e.clientY };

    // Middle button (wheel press)
    if (e.button === 1) {
      if (e.shiftKey) {
        this.isOrbiting = true;
      } else {
        this.isPanning = true;
      }
      e.preventDefault();
    }
  }

  private onPointerMove(e: PointerEvent) {
    if (!this.isPanning && !this.isOrbiting) return;

    const deltaX = e.clientX - this.previousMousePosition.x;
    const deltaY = e.clientY - this.previousMousePosition.y;

    if (this.isPanning) {
      this.pan(deltaX, deltaY);
    } else if (this.isOrbiting) {
      this.orbit(deltaX, deltaY);
    }

    this.previousMousePosition = { x: e.clientX, y: e.clientY };
  }

  private onPointerUp(e: PointerEvent) {
    if (e.button === 1) {
      this.isPanning = false;
      this.isOrbiting = false;
    }
  }

  private onWheel(e: WheelEvent) {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 0.85 : 1.15;
    this.zoom(zoomFactor);
  }

  pan(deltaX: number, deltaY: number) {
    // Calculate world distance relative to camera distance
    const dist = this.camera.position.distanceTo(this.target);
    const panSpeed = dist * 0.0018;

    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(this.camera.quaternion);
    const up = new THREE.Vector3(0, 1, 0).applyQuaternion(this.camera.quaternion);

    const offset = right.multiplyScalar(-deltaX * panSpeed).add(up.multiplyScalar(deltaY * panSpeed));
    this.camera.position.add(offset);
    this.target.add(offset);

    this.notifyChange();
  }

  orbit(deltaX: number, deltaY: number) {
    const rotSpeed = 0.006;
    const offset = this.camera.position.clone().sub(this.target);
    this.spherical.setFromVector3(offset);

    this.spherical.theta -= deltaX * rotSpeed;
    this.spherical.phi = Math.max(0.01, Math.min(Math.PI - 0.01, this.spherical.phi - deltaY * rotSpeed));

    offset.setFromSpherical(this.spherical);
    this.camera.position.copy(this.target).add(offset);
    this.camera.lookAt(this.target);

    this.notifyChange();
  }

  zoom(factor: number) {
    const offset = this.camera.position.clone().sub(this.target);
    const newDist = Math.max(2, Math.min(5000, offset.length() * factor));
    offset.setLength(newDist);
    this.camera.position.copy(this.target).add(offset);
    this.notifyChange();
  }

  zoomExtents(box = new THREE.Box3(new THREE.Vector3(-60, -60, 0), new THREE.Vector3(60, 60, 0))) {
    const center = new THREE.Vector3();
    box.getCenter(center);
    const size = new THREE.Vector3();
    box.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z, 50);

    this.target.copy(center);
    const dist = maxDim * 1.5;

    // Preserve view direction, adjust distance
    const dir = this.camera.position.clone().sub(this.target).normalize();
    if (dir.lengthSq() < 0.001) dir.set(0, 0, 1);
    this.camera.position.copy(this.target).add(dir.multiplyScalar(dist));
    this.camera.lookAt(this.target);

    this.notifyChange();
  }

  setView(view: StandardView) {
    const dist = Math.max(80, this.camera.position.distanceTo(this.target));

    switch (view) {
      case 'top':
        this.camera.position.set(this.target.x, this.target.y, this.target.z + dist);
        this.camera.up.set(0, 1, 0);
        break;
      case 'bottom':
        this.camera.position.set(this.target.x, this.target.y, this.target.z - dist);
        this.camera.up.set(0, 1, 0);
        break;
      case 'front':
        this.camera.position.set(this.target.x, this.target.y - dist, this.target.z);
        this.camera.up.set(0, 0, 1);
        break;
      case 'back':
        this.camera.position.set(this.target.x, this.target.y + dist, this.target.z);
        this.camera.up.set(0, 0, 1);
        break;
      case 'left':
        this.camera.position.set(this.target.x - dist, this.target.y, this.target.z);
        this.camera.up.set(0, 0, 1);
        break;
      case 'right':
        this.camera.position.set(this.target.x + dist, this.target.y, this.target.z);
        this.camera.up.set(0, 0, 1);
        break;
      case 'sw_iso':
        this.camera.position.set(
          this.target.x - dist * 0.7,
          this.target.y - dist * 0.7,
          this.target.z + dist * 0.7
        );
        this.camera.up.set(0, 0, 1);
        break;
      case 'se_iso':
        this.camera.position.set(
          this.target.x + dist * 0.7,
          this.target.y - dist * 0.7,
          this.target.z + dist * 0.7
        );
        this.camera.up.set(0, 0, 1);
        break;
      case 'ne_iso':
        this.camera.position.set(
          this.target.x + dist * 0.7,
          this.target.y + dist * 0.7,
          this.target.z + dist * 0.7
        );
        this.camera.up.set(0, 0, 1);
        break;
      case 'nw_iso':
        this.camera.position.set(
          this.target.x - dist * 0.7,
          this.target.y + dist * 0.7,
          this.target.z + dist * 0.7
        );
        this.camera.up.set(0, 0, 1);
        break;
    }

    this.camera.lookAt(this.target);
    this.notifyChange();
  }

  private notifyChange() {
    if (this.callbacks.onCameraChange) {
      this.callbacks.onCameraChange(this.camera.quaternion);
    }
  }
}
