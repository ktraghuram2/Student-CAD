import * as THREE from 'three';
import { CADEntity, Layer } from '../types/cad';
import { EntityFactory } from '../geometry2d/entities';

export class DXFManager {
  /**
   * Generates standard AutoCAD DXF R12 / R2000 format
   */
  static exportDXF(entities: CADEntity[], layers: Layer[]): string {
    let out = '';

    // HEADER section
    out += '0\nSECTION\n2\nHEADER\n';
    out += '9\n$ACADVER\n1\nAC1009\n'; // AutoCAD R12 ASCII DXF (broadest compatibility)
    out += '0\nENDSEC\n';

    // TABLES section (Layers)
    out += '0\nSECTION\n2\nTABLES\n';
    out += '0\nTABLE\n2\nLAYER\n70\n' + layers.length + '\n';
    for (const lyr of layers) {
      out += '0\nLAYER\n2\n' + lyr.name + '\n70\n0\n62\n7\n6\nCONTINUOUS\n';
    }
    out += '0\nENDTAB\n0\nENDSEC\n';

    // ENTITIES section
    out += '0\nSECTION\n2\nENTITIES\n';

    for (const ent of entities) {
      const layerName = layers.find(l => l.id === ent.layerId)?.name || '0';

      if (ent.type === 'line' && ent.data.p1 && ent.data.p2) {
        const p1: THREE.Vector3 = ent.data.p1;
        const p2: THREE.Vector3 = ent.data.p2;
        out += '0\nLINE\n8\n' + layerName + '\n';
        out += '10\n' + p1.x.toFixed(4) + '\n20\n' + p1.y.toFixed(4) + '\n30\n' + p1.z.toFixed(4) + '\n';
        out += '11\n' + p2.x.toFixed(4) + '\n21\n' + p2.y.toFixed(4) + '\n31\n' + p2.z.toFixed(4) + '\n';
      } else if (ent.type === 'circle' && ent.data.center) {
        const c: THREE.Vector3 = ent.data.center;
        const r: number = ent.data.radius;
        out += '0\nCIRCLE\n8\n' + layerName + '\n';
        out += '10\n' + c.x.toFixed(4) + '\n20\n' + c.y.toFixed(4) + '\n30\n' + c.z.toFixed(4) + '\n';
        out += '40\n' + r.toFixed(4) + '\n';
      } else if (ent.type === 'arc' && ent.data.center) {
        const c: THREE.Vector3 = ent.data.center;
        const r: number = ent.data.radius;
        const sDeg = (ent.data.startAngle * 180) / Math.PI;
        const eDeg = (ent.data.endAngle * 180) / Math.PI;
        out += '0\nARC\n8\n' + layerName + '\n';
        out += '10\n' + c.x.toFixed(4) + '\n20\n' + c.y.toFixed(4) + '\n30\n' + c.z.toFixed(4) + '\n';
        out += '40\n' + r.toFixed(4) + '\n50\n' + sDeg.toFixed(2) + '\n51\n' + eDeg.toFixed(2) + '\n';
      } else if (ent.type === 'rectangle' && ent.data.p1 && ent.data.p2) {
        const p1: THREE.Vector3 = ent.data.p1;
        const p2: THREE.Vector3 = ent.data.p2;
        const pts = [
          p1,
          new THREE.Vector3(p2.x, p1.y, p1.z),
          p2,
          new THREE.Vector3(p1.x, p2.y, p1.z)
        ];
        out += '0\nPOLYLINE\n8\n' + layerName + '\n66\n1\n70\n1\n';
        for (const pt of pts) {
          out += '0\nVERTEX\n8\n' + layerName + '\n10\n' + pt.x.toFixed(4) + '\n20\n' + pt.y.toFixed(4) + '\n30\n' + pt.z.toFixed(4) + '\n';
        }
        out += '0\nSEQEND\n';
      }
    }

    out += '0\nENDSEC\n0\nEOF\n';
    return out;
  }

  /**
   * Quick basic DXF parser to load 2D lines and circles from DXF
   */
  static parseDXF(dxfText: string, defaultLayer: Layer): CADEntity[] {
    const entities: CADEntity[] = [];
    const lines = dxfText.split(/\r?\n/);
    let i = 0;

    while (i < lines.length) {
      const code = lines[i]?.trim();
      const val = lines[i + 1]?.trim();

      if (code === '0' && val === 'LINE') {
        let x1 = 0, y1 = 0, z1 = 0, x2 = 0, y2 = 0, z2 = 0;
        i += 2;
        while (i < lines.length && lines[i]?.trim() !== '0') {
          const c = lines[i]?.trim();
          const v = parseFloat(lines[i + 1]?.trim() || '0');
          if (c === '10') x1 = v;
          else if (c === '20') y1 = v;
          else if (c === '30') z1 = v;
          else if (c === '11') x2 = v;
          else if (c === '21') y2 = v;
          else if (c === '31') z2 = v;
          i += 2;
        }
        entities.push(
          EntityFactory.createLine(
            'dxf_' + Math.random().toString(36).substr(2, 6),
            new THREE.Vector3(x1, y1, z1),
            new THREE.Vector3(x2, y2, z2),
            defaultLayer
          )
        );
        continue;
      } else if (code === '0' && val === 'CIRCLE') {
        let cx = 0, cy = 0, cz = 0, r = 10;
        i += 2;
        while (i < lines.length && lines[i]?.trim() !== '0') {
          const c = lines[i]?.trim();
          const v = parseFloat(lines[i + 1]?.trim() || '0');
          if (c === '10') cx = v;
          else if (c === '20') cy = v;
          else if (c === '30') cz = v;
          else if (c === '40') r = v;
          i += 2;
        }
        entities.push(
          EntityFactory.createCircle(
            'dxf_' + Math.random().toString(36).substr(2, 6),
            new THREE.Vector3(cx, cy, cz),
            r,
            defaultLayer
          )
        );
        continue;
      }
      i++;
    }

    return entities;
  }
}
