import * as THREE from 'three';
import { CADEntity } from '../types/cad';

export class STLExporter {
  /**
   * Generates ASCII STL from 3D solid entities
   */
  static exportSTL(entities: CADEntity[], name = 'StudentCAD_Model'): string {
    let output = `solid ${name}\n`;

    const vA = new THREE.Vector3();
    const vB = new THREE.Vector3();
    const vC = new THREE.Vector3();
    const cb = new THREE.Vector3();
    const ab = new THREE.Vector3();
    const normal = new THREE.Vector3();

    for (const ent of entities) {
      if (!ent.type.startsWith('solid') && ent.type !== 'solid_csg') continue;

      const mesh = ent.object3D as THREE.Mesh;
      if (!mesh || !mesh.geometry) continue;

      const geometry = mesh.geometry.clone().toNonIndexed();
      const posAttr = geometry.getAttribute('position');
      if (!posAttr) continue;

      mesh.updateMatrixWorld(true);
      const matrixWorld = mesh.matrixWorld;

      for (let i = 0; i < posAttr.count; i += 3) {
        vA.fromBufferAttribute(posAttr, i).applyMatrix4(matrixWorld);
        vB.fromBufferAttribute(posAttr, i + 1).applyMatrix4(matrixWorld);
        vC.fromBufferAttribute(posAttr, i + 2).applyMatrix4(matrixWorld);

        // Compute face normal
        cb.subVectors(vC, vB);
        ab.subVectors(vA, vB);
        cb.cross(ab).normalize();
        normal.copy(cb);

        output += `  facet normal ${normal.x.toExponential(6)} ${normal.y.toExponential(6)} ${normal.z.toExponential(6)}\n`;
        output += '    outer loop\n';
        output += `      vertex ${vA.x.toExponential(6)} ${vA.y.toExponential(6)} ${vA.z.toExponential(6)}\n`;
        output += `      vertex ${vB.x.toExponential(6)} ${vB.y.toExponential(6)} ${vB.z.toExponential(6)}\n`;
        output += `      vertex ${vC.x.toExponential(6)} ${vC.y.toExponential(6)} ${vC.z.toExponential(6)}\n`;
        output += '    endloop\n';
        output += '  endfacet\n';
      }
    }

    output += `endsolid ${name}\n`;
    return output;
  }
}
