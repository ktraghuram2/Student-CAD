import * as THREE from 'three';

export class CADGrid {
  private group: THREE.Group;
  private minorGrid: THREE.LineSegments;
  private majorGrid: THREE.LineSegments;
  private axisLines: THREE.LineSegments;
  visible = true;

  constructor(size = 400, step = 10, majorEvery = 5) {
    this.group = new THREE.Group();
    this.group.renderOrder = 0;

    const half = size / 2;
    const minorPoints: THREE.Vector3[] = [];
    const majorPoints: THREE.Vector3[] = [];

    let count = 0;
    for (let x = -half; x <= half; x += step) {
      if (Math.abs(x) < 0.001) {
        count++;
        continue; // Skip origin axis, drawn separately
      }
      const pts = count % majorEvery === 0 ? majorPoints : minorPoints;
      pts.push(new THREE.Vector3(x, -half, 0));
      pts.push(new THREE.Vector3(x, half, 0));
      count++;
    }

    count = 0;
    for (let y = -half; y <= half; y += step) {
      if (Math.abs(y) < 0.001) {
        count++;
        continue;
      }
      const pts = count % majorEvery === 0 ? majorPoints : minorPoints;
      pts.push(new THREE.Vector3(-half, y, 0));
      pts.push(new THREE.Vector3(half, y, 0));
      count++;
    }

    // Minor Grid Lines
    const minorGeom = new THREE.BufferGeometry().setFromPoints(minorPoints);
    const minorMat = new THREE.LineBasicMaterial({ color: 0x2c3540, transparent: true, opacity: 0.7 });
    this.minorGrid = new THREE.LineSegments(minorGeom, minorMat);
    this.group.add(this.minorGrid);

    // Major Grid Lines
    const majorGeom = new THREE.BufferGeometry().setFromPoints(majorPoints);
    const majorMat = new THREE.LineBasicMaterial({ color: 0x3b4756, transparent: true, opacity: 0.9 });
    this.majorGrid = new THREE.LineSegments(majorGeom, majorMat);
    this.group.add(this.majorGrid);

    // X (Red) and Y (Green) Origin Axes
    const axisPoints = [
      new THREE.Vector3(-half, 0, 0), new THREE.Vector3(half, 0, 0), // X-axis
      new THREE.Vector3(0, -half, 0), new THREE.Vector3(0, half, 0)  // Y-axis
    ];
    const axisColors = [
      0.89, 0.22, 0.21,  0.89, 0.22, 0.21, // Red X
      0.0, 0.9, 0.46,    0.0, 0.9, 0.46    // Green Y
    ];
    const axisGeom = new THREE.BufferGeometry().setFromPoints(axisPoints);
    axisGeom.setAttribute('color', new THREE.Float32BufferAttribute(axisColors, 3));
    const axisMat = new THREE.LineBasicMaterial({ vertexColors: true, linewidth: 2 });
    this.axisLines = new THREE.LineSegments(axisGeom, axisMat);
    this.group.add(this.axisLines);
  }

  getGroup(): THREE.Group {
    return this.group;
  }

  toggleVisibility(visible?: boolean) {
    this.visible = visible !== undefined ? visible : !this.visible;
    this.group.visible = this.visible;
  }
}
