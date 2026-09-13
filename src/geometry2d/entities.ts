import * as THREE from 'three';
import { CADEntity, Layer } from '../types/cad';

export class EntityFactory {
  /**
   * Creates a 2D Line entity
   */
  static createLine(
    id: string,
    p1: THREE.Vector3,
    p2: THREE.Vector3,
    layer: Layer
  ): CADEntity {
    const geometry = new THREE.BufferGeometry().setFromPoints([p1, p2]);
    const material = new THREE.LineBasicMaterial({
      color: new THREE.Color(layer.color),
      linewidth: Math.max(1, Math.round(layer.lineweight * 4))
    });
    const line = new THREE.Line(geometry, material);
    line.userData = { entityId: id, type: 'line' };

    return {
      id,
      type: 'line',
      layerId: layer.id,
      color: layer.color,
      object3D: line,
      data: { p1: p1.clone(), p2: p2.clone() }
    };
  }

  /**
   * Creates a Polyline entity
   */
  static createPolyline(
    id: string,
    points: THREE.Vector3[],
    closed: boolean,
    layer: Layer
  ): CADEntity {
    const pts = [...points];
    if (closed && pts.length > 2) {
      pts.push(pts[0].clone());
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(pts);
    const material = new THREE.LineBasicMaterial({
      color: new THREE.Color(layer.color),
      linewidth: Math.max(1, Math.round(layer.lineweight * 4))
    });
    const line = new THREE.Line(geometry, material);
    line.userData = { entityId: id, type: 'polyline' };

    return {
      id,
      type: 'polyline',
      layerId: layer.id,
      color: layer.color,
      object3D: line,
      data: { points: points.map(p => p.clone()), closed }
    };
  }

  /**
   * Creates a 2D Circle entity
   */
  static createCircle(
    id: string,
    center: THREE.Vector3,
    radius: number,
    layer: Layer,
    segments = 64
  ): CADEntity {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      points.push(new THREE.Vector3(
        center.x + Math.cos(theta) * radius,
        center.y + Math.sin(theta) * radius,
        center.z
      ));
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
      color: new THREE.Color(layer.color),
      linewidth: Math.max(1, Math.round(layer.lineweight * 4))
    });
    const line = new THREE.Line(geometry, material);
    line.userData = { entityId: id, type: 'circle' };

    return {
      id,
      type: 'circle',
      layerId: layer.id,
      color: layer.color,
      object3D: line,
      data: { center: center.clone(), radius }
    };
  }

  /**
   * Creates a 2D Arc entity
   */
  static createArc(
    id: string,
    center: THREE.Vector3,
    radius: number,
    startAngle: number,
    endAngle: number,
    layer: Layer,
    segments = 48
  ): CADEntity {
    const points: THREE.Vector3[] = [];
    let angleSpan = endAngle - startAngle;
    if (angleSpan < 0) angleSpan += Math.PI * 2;

    for (let i = 0; i <= segments; i++) {
      const theta = startAngle + (i / segments) * angleSpan;
      points.push(new THREE.Vector3(
        center.x + Math.cos(theta) * radius,
        center.y + Math.sin(theta) * radius,
        center.z
      ));
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
      color: new THREE.Color(layer.color)
    });
    const line = new THREE.Line(geometry, material);
    line.userData = { entityId: id, type: 'arc' };

    return {
      id,
      type: 'arc',
      layerId: layer.id,
      color: layer.color,
      object3D: line,
      data: { center: center.clone(), radius, startAngle, endAngle }
    };
  }

  /**
   * Creates a 2D Rectangle entity
   */
  static createRectangle(
    id: string,
    p1: THREE.Vector3,
    p2: THREE.Vector3,
    layer: Layer
  ): CADEntity {
    const minX = Math.min(p1.x, p2.x);
    const maxX = Math.max(p1.x, p2.x);
    const minY = Math.min(p1.y, p2.y);
    const maxY = Math.max(p1.y, p2.y);

    const corners = [
      new THREE.Vector3(minX, minY, p1.z),
      new THREE.Vector3(maxX, minY, p1.z),
      new THREE.Vector3(maxX, maxY, p1.z),
      new THREE.Vector3(minX, maxY, p1.z),
      new THREE.Vector3(minX, minY, p1.z)
    ];

    const geometry = new THREE.BufferGeometry().setFromPoints(corners);
    const material = new THREE.LineBasicMaterial({
      color: new THREE.Color(layer.color)
    });
    const line = new THREE.Line(geometry, material);
    line.userData = { entityId: id, type: 'rectangle' };

    return {
      id,
      type: 'rectangle',
      layerId: layer.id,
      color: layer.color,
      object3D: line,
      data: { p1: new THREE.Vector3(minX, minY, p1.z), p2: new THREE.Vector3(maxX, maxY, p1.z) }
    };
  }

  /**
   * Creates an Engineering Linear Dimension
   */
  static createDimension(
    id: string,
    p1: THREE.Vector3,
    p2: THREE.Vector3,
    offset = 12,
    layer: Layer
  ): CADEntity {
    const group = new THREE.Group();
    group.userData = { entityId: id, type: 'dimension' };

    const dir = new THREE.Vector3().subVectors(p2, p1);
    const length = dir.length();
    if (length < 0.001) return this.createLine(id, p1, p2, layer);

    // Normal perpendicular direction in XY plane
    const normal = new THREE.Vector3(-dir.y, dir.x, 0).normalize().multiplyScalar(offset);

    const ext1Start = p1.clone();
    const ext1End = p1.clone().add(normal.clone().multiplyScalar(1.2));
    const ext2Start = p2.clone();
    const ext2End = p2.clone().add(normal.clone().multiplyScalar(1.2));

    const dim1 = p1.clone().add(normal);
    const dim2 = p2.clone().add(normal);

    const dimLines = [
      ext1Start, ext1End,
      ext2Start, ext2End,
      dim1, dim2
    ];

    const geometry = new THREE.BufferGeometry().setFromPoints(dimLines);
    const material = new THREE.LineBasicMaterial({ color: new THREE.Color('#4fc3f7') });
    const lines = new THREE.LineSegments(geometry, material);
    group.add(lines);

    // Dimension Arrow Heads (small cones/triangles)
    const arrowDir1 = new THREE.Vector3().subVectors(dim2, dim1).normalize();
    const arrowDir2 = arrowDir1.clone().negate();

    const arrowHeadSize = Math.min(6, length * 0.15);
    const arrow1p = dim1.clone().add(arrowDir1.clone().multiplyScalar(arrowHeadSize));
    const arrow2p = dim2.clone().add(arrowDir2.clone().multiplyScalar(arrowHeadSize));

    const arrowGeom = new THREE.BufferGeometry().setFromPoints([
      dim1, arrow1p,
      dim2, arrow2p
    ]);
    const arrowLines = new THREE.LineSegments(arrowGeom, new THREE.LineBasicMaterial({ color: 0x4fc3f7, linewidth: 2 }));
    group.add(arrowLines);

    // Dimension text billboard / sprite
    const midPoint = new THREE.Vector3().addVectors(dim1, dim2).multiplyScalar(0.5);
    const textSprite = createTextSprite(length.toFixed(1) + ' mm');
    textSprite.position.copy(midPoint);
    textSprite.position.y += Math.sign(offset) * 3;
    group.add(textSprite);

    return {
      id,
      type: 'dimension',
      layerId: layer.id,
      color: '#4fc3f7',
      object3D: group,
      data: { p1: p1.clone(), p2: p2.clone(), offset, length }
    };
  }

  /**
   * Creates 45-degree Engineering Hatch lines inside rectangle/box
   */
  static createHatch(
    id: string,
    minX: number,
    minY: number,
    maxX: number,
    maxY: number,
    layer: Layer,
    spacing = 10
  ): CADEntity {
    const lines: THREE.Vector3[] = [];
    const width = maxX - minX;
    const height = maxY - minY;
    const count = Math.ceil((width + height) / spacing);

    for (let i = -count; i <= count; i++) {
      const x0 = minX + i * spacing;
      const y0 = minY;
      const x1 = x0 + height;
      const y1 = maxY;

      // Clip line segment to rectangle
      const pts = clipLineToRect(x0, y0, x1, y1, minX, minY, maxX, maxY);
      if (pts) {
        lines.push(new THREE.Vector3(pts.x1, pts.y1, 0));
        lines.push(new THREE.Vector3(pts.x2, pts.y2, 0));
      }
    }

    const geometry = new THREE.BufferGeometry().setFromPoints(lines);
    const material = new THREE.LineBasicMaterial({
      color: new THREE.Color(layer.color),
      transparent: true,
      opacity: 0.6
    });
    const hatch = new THREE.LineSegments(geometry, material);
    hatch.userData = { entityId: id, type: 'hatch' };

    return {
      id,
      type: 'line',
      layerId: layer.id,
      color: layer.color,
      object3D: hatch,
      data: { minX, minY, maxX, maxY, spacing }
    };
  }
}

/**
 * Clips a line to a bounding rectangle
 */
function clipLineToRect(x1: number, y1: number, x2: number, y2: number, rx1: number, ry1: number, rx2: number, ry2: number) {
  // Simple parametric line clipping
  let t0 = 0.0;
  let t1 = 1.0;
  const dx = x2 - x1;
  const dy = y2 - y1;

  const p = [-dx, dx, -dy, dy];
  const q = [x1 - rx1, rx2 - x1, y1 - ry1, ry2 - y1];

  for (let i = 0; i < 4; i++) {
    if (p[i] === 0) {
      if (q[i] < 0) return null;
    } else {
      const t = q[i] / p[i];
      if (p[i] < 0) {
        if (t > t1) return null;
        if (t > t0) t0 = t;
      } else {
        if (t < t0) return null;
        if (t < t1) t1 = t;
      }
    }
  }

  return {
    x1: x1 + t0 * dx,
    y1: y1 + t0 * dy,
    x2: x1 + t1 * dx,
    y2: y1 + t1 * dy
  };
}

/**
 * Creates a canvas-based text sprite for dimensions and labels
 */
export function createTextSprite(text: string, color = '#70d8ff', height = 18): THREE.Sprite {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d')!;
  canvas.width = 256;
  canvas.height = 64;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = 'bold 28px Consolas, monospace';
  ctx.fillStyle = color;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 128, 32);

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  const spriteMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true });
  const sprite = new THREE.Sprite(spriteMaterial);
  sprite.scale.set(height * (canvas.width / canvas.height), height, 1);
  return sprite;
}
