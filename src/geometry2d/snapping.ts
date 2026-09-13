import * as THREE from 'three';
import { CADEntity, SnapResult } from '../types/cad';

export class SnapManager {
  snapDistance = 15; // In pixels on screen
  enabled = true;
  gridSnapEnabled = false;
  gridSize = 10;
  orthoEnabled = false;

  activeSnap: SnapResult | null = null;

  findSnap(
    worldPoint: THREE.Vector3,
    camera: THREE.Camera,
    canvasWidth: number,
    canvasHeight: number,
    entities: CADEntity[],
    referencePoint: THREE.Vector3 | null = null
  ): SnapResult | null {
    if (!this.enabled) {
      if (this.orthoEnabled && referencePoint) {
        return {
          point: this.applyOrtho(referencePoint, worldPoint),
          type: 'nearest',
          label: 'Ortho'
        };
      }
      return null;
    }

    const mouseScreen = this.worldToScreen(worldPoint, camera, canvasWidth, canvasHeight);
    let closestSnap: SnapResult | null = null;
    let minDistance = this.snapDistance;

    const testSnapPoint = (pt: THREE.Vector3, type: SnapResult['type'], label: string, entityId?: string) => {
      const screenPt = this.worldToScreen(pt, camera, canvasWidth, canvasHeight);
      const dist = mouseScreen.distanceTo(screenPt);
      if (dist < minDistance) {
        minDistance = dist;
        closestSnap = { point: pt.clone(), type, label, entityId };
      }
    };

    // 1. Check all entities for Endpoint, Midpoint, Center, Quadrant
    for (const ent of entities) {
      if (ent.type === 'line' && ent.data.p1 && ent.data.p2) {
        const p1: THREE.Vector3 = ent.data.p1;
        const p2: THREE.Vector3 = ent.data.p2;
        testSnapPoint(p1, 'endpoint', 'Endpoint', ent.id);
        testSnapPoint(p2, 'endpoint', 'Endpoint', ent.id);

        const mid = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
        testSnapPoint(mid, 'midpoint', 'Midpoint', ent.id);
      } else if (ent.type === 'circle' && ent.data.center) {
        const center: THREE.Vector3 = ent.data.center;
        const r: number = ent.data.radius;
        testSnapPoint(center, 'center', 'Center', ent.id);

        // Quadrants: 0, 90, 180, 270 deg
        testSnapPoint(new THREE.Vector3(center.x + r, center.y, center.z), 'quadrant', 'Quadrant', ent.id);
        testSnapPoint(new THREE.Vector3(center.x - r, center.y, center.z), 'quadrant', 'Quadrant', ent.id);
        testSnapPoint(new THREE.Vector3(center.x, center.y + r, center.z), 'quadrant', 'Quadrant', ent.id);
        testSnapPoint(new THREE.Vector3(center.x, center.y - r, center.z), 'quadrant', 'Quadrant', ent.id);
      } else if (ent.type === 'rectangle' && ent.data.p1 && ent.data.p2) {
        const p1: THREE.Vector3 = ent.data.p1;
        const p2: THREE.Vector3 = ent.data.p2;
        const c1 = p1;
        const c2 = new THREE.Vector3(p2.x, p1.y, p1.z);
        const c3 = p2;
        const c4 = new THREE.Vector3(p1.x, p2.y, p1.z);

        testSnapPoint(c1, 'endpoint', 'Endpoint', ent.id);
        testSnapPoint(c2, 'endpoint', 'Endpoint', ent.id);
        testSnapPoint(c3, 'endpoint', 'Endpoint', ent.id);
        testSnapPoint(c4, 'endpoint', 'Endpoint', ent.id);

        testSnapPoint(new THREE.Vector3().addVectors(c1, c2).multiplyScalar(0.5), 'midpoint', 'Midpoint', ent.id);
        testSnapPoint(new THREE.Vector3().addVectors(c2, c3).multiplyScalar(0.5), 'midpoint', 'Midpoint', ent.id);
        testSnapPoint(new THREE.Vector3().addVectors(c3, c4).multiplyScalar(0.5), 'midpoint', 'Midpoint', ent.id);
        testSnapPoint(new THREE.Vector3().addVectors(c4, c1).multiplyScalar(0.5), 'midpoint', 'Midpoint', ent.id);
      } else if (ent.type === 'polyline' && ent.data.points) {
        const pts: THREE.Vector3[] = ent.data.points;
        for (let i = 0; i < pts.length; i++) {
          testSnapPoint(pts[i], 'endpoint', 'Endpoint', ent.id);
          if (i < pts.length - 1) {
            const mid = new THREE.Vector3().addVectors(pts[i], pts[i + 1]).multiplyScalar(0.5);
            testSnapPoint(mid, 'midpoint', 'Midpoint', ent.id);
          }
        }
      }
    }

    if (closestSnap) {
      this.activeSnap = closestSnap;
      return closestSnap;
    }

    // 2. Ortho Mode constraint if reference point exists
    if (this.orthoEnabled && referencePoint) {
      const orthoPt = this.applyOrtho(referencePoint, worldPoint);
      this.activeSnap = { point: orthoPt, type: 'nearest', label: 'Ortho' };
      return this.activeSnap;
    }

    // 3. Grid Snap fallback if enabled
    if (this.gridSnapEnabled) {
      const snappedGrid = new THREE.Vector3(
        Math.round(worldPoint.x / this.gridSize) * this.gridSize,
        Math.round(worldPoint.y / this.gridSize) * this.gridSize,
        0
      );
      this.activeSnap = { point: snappedGrid, type: 'grid', label: 'Grid' };
      return this.activeSnap;
    }

    this.activeSnap = null;
    return null;
  }

  applyOrtho(origin: THREE.Vector3, target: THREE.Vector3): THREE.Vector3 {
    const dx = Math.abs(target.x - origin.x);
    const dy = Math.abs(target.y - origin.y);

    if (dx >= dy) {
      return new THREE.Vector3(target.x, origin.y, origin.z);
    } else {
      return new THREE.Vector3(origin.x, target.y, origin.z);
    }
  }

  private worldToScreen(worldPoint: THREE.Vector3, camera: THREE.Camera, width: number, height: number): THREE.Vector2 {
    const p = worldPoint.clone().project(camera);
    return new THREE.Vector2(
      (p.x * 0.5 + 0.5) * width,
      (-p.y * 0.5 + 0.5) * height
    );
  }
}
