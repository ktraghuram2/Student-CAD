import * as THREE from 'three';
import { CADEntity, LabExercise, Layer } from '../types/cad';
import { EntityFactory } from '../geometry2d/entities';
import { SolidFactory } from '../modeling3d/solids';

export class LabExercisesManager {
  static getExercises(defaultLayer: Layer): LabExercise[] {
    return [
      {
        id: 'lab-1',
        title: 'Lab 1: Orthographic Projections of V-Block',
        branch: 'Common First Year',
        year: 'Diploma',
        description: 'Construct the Front View, Top View, and Side View of a standard 80x50x40 mm V-Block with 90° V-groove and base slot according to first-angle projection standard.',
        instructions: [
          '1. Set layer to "0" (Continuous line) and turn on ORTHO [F8].',
          '2. Front View: Type L (LINE), start at (0, 0), draw outline: (80, 0) -> (80, 40) -> (50, 40) -> (40, 25) -> (30, 40) -> (0, 40) -> Close.',
          '3. Draw the bottom rectangular slot: 20 mm wide x 10 mm high.',
          '4. Top View: Draw projector lines downward and construct the 80x50 mm boundary.',
          '5. Add Linear Dimensions with DIMLINEAR [DIM] to indicate major dimensions.'
        ],
        entities: () => {
          const ents: CADEntity[] = [];
          // Front View
          const fpts = [
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(30, 0, 0),
            new THREE.Vector3(30, 10, 0),
            new THREE.Vector3(50, 10, 0),
            new THREE.Vector3(50, 0, 0),
            new THREE.Vector3(80, 0, 0),
            new THREE.Vector3(80, 40, 0),
            new THREE.Vector3(55, 40, 0),
            new THREE.Vector3(40, 20, 0),
            new THREE.Vector3(25, 40, 0),
            new THREE.Vector3(0, 40, 0),
            new THREE.Vector3(0, 0, 0)
          ];
          ents.push(EntityFactory.createPolyline('l1_fv', fpts, true, defaultLayer));

          // Top View (below front view)
          ents.push(EntityFactory.createRectangle('l1_tv', new THREE.Vector3(0, -60, 0), new THREE.Vector3(80, -10, 0), defaultLayer));
          ents.push(EntityFactory.createLine('l1_tv_g1', new THREE.Vector3(25, -60, 0), new THREE.Vector3(25, -10, 0), defaultLayer));
          ents.push(EntityFactory.createLine('l1_tv_g2', new THREE.Vector3(40, -60, 0), new THREE.Vector3(40, -10, 0), defaultLayer));
          ents.push(EntityFactory.createLine('l1_tv_g3', new THREE.Vector3(55, -60, 0), new THREE.Vector3(55, -10, 0), defaultLayer));

          // Dimensions
          ents.push(EntityFactory.createDimension('l1_d1', new THREE.Vector3(0, 0, 0), new THREE.Vector3(80, 0, 0), -12, defaultLayer));
          ents.push(EntityFactory.createDimension('l1_d2', new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 40, 0), -12, defaultLayer));

          return ents;
        }
      },
      {
        id: 'lab-2',
        title: 'Lab 2: Shaft Support Bracket (2D Machine Drawing)',
        branch: 'Mechanical',
        year: 'Diploma',
        description: 'Draw a mechanical support bracket consisting of a 120x30 base plate, two Ø12 mounting holes, a vertical web, and a Ø40 central shaft housing with R15 fillet.',
        instructions: [
          '1. Base Plate: Type REC, specify 0,0 and 120,25.',
          '2. Mounting Holes: Type C (CIRCLE), center at (20, 12.5), Radius 6. Copy [CO] to (100, 12.5).',
          '3. Central Housing: Type C, center at (60, 65), Radius 25 (outer) and Radius 15 (inner bore).',
          '4. Tangent lines: Type L, snap Tangent to Circle and base plate.',
          '5. Fillet: Type F, enter R -> 12, select corner between upright web and base plate.'
        ],
        entities: () => {
          const ents: CADEntity[] = [];
          // Base
          ents.push(EntityFactory.createRectangle('l2_base', new THREE.Vector3(0, 0, 0), new THREE.Vector3(120, 25, 0), defaultLayer));
          // Holes
          ents.push(EntityFactory.createCircle('l2_h1', new THREE.Vector3(20, 12.5, 0), 6, defaultLayer));
          ents.push(EntityFactory.createCircle('l2_h2', new THREE.Vector3(100, 12.5, 0), 6, defaultLayer));
          // Housing
          ents.push(EntityFactory.createCircle('l2_c_out', new THREE.Vector3(60, 70, 0), 25, defaultLayer));
          ents.push(EntityFactory.createCircle('l2_c_in', new THREE.Vector3(60, 70, 0), 15, defaultLayer));
          // Web lines
          ents.push(EntityFactory.createLine('l2_w1', new THREE.Vector3(35, 25, 0), new THREE.Vector3(35, 70, 0), defaultLayer));
          ents.push(EntityFactory.createLine('l2_w2', new THREE.Vector3(85, 25, 0), new THREE.Vector3(85, 70, 0), defaultLayer));
          // Dimensions
          ents.push(EntityFactory.createDimension('l2_d1', new THREE.Vector3(0, 0, 0), new THREE.Vector3(120, 0, 0), -15, defaultLayer));
          ents.push(EntityFactory.createDimension('l2_d2', new THREE.Vector3(60, 0, 0), new THREE.Vector3(60, 70, 0), 50, defaultLayer));
          return ents;
        }
      },
      {
        id: 'lab-3',
        title: 'Lab 3: Flanged Pipe Joint (Sectional View & Hatching)',
        branch: 'Civil / Mechanical',
        year: 'B.Tech',
        description: 'Construct full sectional elevation of cast iron flanged pipe joint with fluid bore Ø50, flange outer Ø140, 4 bolt holes on Ø100 PCD, and standard 45° cross-hatch.',
        instructions: [
          '1. Draw pipe centerline: Type L, from (-20, 0) to (120, 0).',
          '2. Draw pipe wall: Ø50 inner bore (Y=25) and Ø65 outer diameter (Y=32.5).',
          '3. Draw flange profile: 140 mm height x 20 mm thickness.',
          '4. Bolt holes: 14 mm diameter located on PCD Ø100 (Y=50).',
          '5. Apply Hatch: Type H (HATCH), select enclosed metal area, select pattern ANSI31 (45° lines).'
        ],
        entities: () => {
          const ents: CADEntity[] = [];
          // Centerline
          ents.push(EntityFactory.createLine('l3_cl', new THREE.Vector3(-20, 0, 0), new THREE.Vector3(120, 0, 0), { ...defaultLayer, color: '#e53935' }));
          // Upper Pipe Wall
          ents.push(EntityFactory.createRectangle('l3_pw_up', new THREE.Vector3(0, 25, 0), new THREE.Vector3(80, 32.5, 0), defaultLayer));
          // Lower Pipe Wall
          ents.push(EntityFactory.createRectangle('l3_pw_dn', new THREE.Vector3(0, -32.5, 0), new THREE.Vector3(80, -25, 0), defaultLayer));
          // Flange
          ents.push(EntityFactory.createRectangle('l3_flange', new THREE.Vector3(80, -70, 0), new THREE.Vector3(100, 70, 0), defaultLayer));
          // Bolt Holes
          ents.push(EntityFactory.createRectangle('l3_bh_up', new THREE.Vector3(80, 43, 0), new THREE.Vector3(100, 57, 0), defaultLayer));
          ents.push(EntityFactory.createRectangle('l3_bh_dn', new THREE.Vector3(80, -57, 0), new THREE.Vector3(100, -43, 0), defaultLayer));
          // Hatching on upper section
          ents.push(EntityFactory.createHatch('l3_hatch_up', 0, 25, 80, 32.5, defaultLayer, 4));
          ents.push(EntityFactory.createHatch('l3_hatch_fl', 80, 57, 100, 70, defaultLayer, 4));

          return ents;
        }
      },
      {
        id: 'lab-4',
        title: 'Lab 4: 3D Slotted Bearing Block (CSG Solid Booleans)',
        branch: 'Mechanical / Mechatronics',
        year: 'Diploma',
        description: 'Model a 3D solid bearing block of size 100x60x50 mm. Use CSG Booleans (SUBTRACT) to bore a Ø30 through-hole and cut a 20x10 mm top slot.',
        instructions: [
          '1. Switch to 3D Modeling workspace or Isometric view [SW ISO].',
          '2. Type BOX: center at (0, 0, 25), width=100, height=60, depth=50.',
          '3. Type CYLINDER: center at (0, 0, 25), radius=15, height=80 (along Y axis).',
          '4. Type SUBTRACT [SU]: select the Box first (press Enter), then select Cylinder (press Enter).',
          '5. Cut top slot: Create Box (100, 20, 15) at top and SUBTRACT from base.',
          '6. Orbit with 3DO or Shift+Middle Click to inspect the hollow bore!'
        ],
        entities: () => {
          const ents: CADEntity[] = [];
          // Pre-assembled CSG solid
          const baseBox = SolidFactory.createBox('l4_base', 100, 60, 50, new THREE.Vector3(0, 0, 25), defaultLayer);
          const cylHole = SolidFactory.createCylinder('l4_cyl', 16, 80, new THREE.Vector3(0, 0, 25), defaultLayer);
          const csg1 = SolidFactory.subtract('l4_sub1', baseBox.object3D as THREE.Mesh, cylHole.object3D as THREE.Mesh, defaultLayer);

          const slotBox = SolidFactory.createBox('l4_slot', 105, 22, 20, new THREE.Vector3(0, 0, 45), defaultLayer);
          const csg2 = SolidFactory.subtract('l4_model', csg1.object3D as THREE.Mesh, slotBox.object3D as THREE.Mesh, defaultLayer);

          ents.push(csg2);
          return ents;
        }
      },
      {
        id: 'lab-5',
        title: 'Lab 5: 3D Stepped V-Groove Pulley (Revolve Modeling)',
        branch: 'Mechanical / Automobile',
        year: 'B.Tech',
        description: 'Create a 3D transmission V-belt pulley by defining half-cross section profile and applying REVOLVE [REV] 360° around the central shaft axis.',
        instructions: [
          '1. In 2D view, draw the half-section profile with shaft bore (R12), rim, and 38° V-groove.',
          '2. Close profile into a single closed polyline or region.',
          '3. Type REVOLVE [REV]: Select the closed profile.',
          '4. Specify axis of revolution: Pick points (0,0) and (0,100).',
          '5. Angle of revolution: Enter 360.',
          '6. Change visual style to "Shaded with Edges" to inspect smooth rotational geometry.'
        ],
        entities: () => {
          const ents: CADEntity[] = [];
          // Profile points in XY for LatheGeometry (revolve around Y axis)
          const pts = [
            new THREE.Vector2(12, -20),
            new THREE.Vector2(12, 20),
            new THREE.Vector2(25, 20),
            new THREE.Vector2(25, 10),
            new THREE.Vector2(45, 10),
            new THREE.Vector2(45, 18),
            new THREE.Vector2(55, 12), // V-groove bottom
            new THREE.Vector2(65, 18),
            new THREE.Vector2(65, -18),
            new THREE.Vector2(55, -12),
            new THREE.Vector2(45, -18),
            new THREE.Vector2(45, -10),
            new THREE.Vector2(25, -10),
            new THREE.Vector2(25, -20),
            new THREE.Vector2(12, -20)
          ];
          const pulley = SolidFactory.createRevolve('l5_pulley', pts, 48, defaultLayer);
          pulley.object3D.position.set(0, 0, 25);
          ents.push(pulley);
          return ents;
        }
      },
      {
        id: 'lab-6',
        title: 'Lab 6: Flanged Shaft Coupling with Keyway (3D Assembly)',
        branch: 'Mechanical / Production',
        year: 'Diploma',
        description: 'Model a complete flanged shaft coupling hub with Ø80 flange, Ø40 hub, Ø20 shaft bore, 6x6 mm keyway slot, and 4 bolt holes on Ø60 PCD.',
        instructions: [
          '1. Model main flange cylinder: Ø80, thickness 15 mm.',
          '2. Model hub cylinder: Ø40, length 35 mm. Apply UNION [UNI].',
          '3. Cut shaft bore: Create cylinder Ø20 and keyway box (6x24x55) and SUBTRACT [SU].',
          '4. Model bolt holes: Cylinder Ø8 at radius 30 mm. Use Polar Array [AR] count 4.',
          '5. Subtract bolt holes from flange to complete the coupling!',
          '6. Export to STL [EXPORTSTL] for 3D printing or lab submission.'
        ],
        entities: () => {
          const ents: CADEntity[] = [];
          // Hub + Flange
          const flange = SolidFactory.createCylinder('l6_f', 40, 15, new THREE.Vector3(0, 0, 7.5), defaultLayer);
          const hub = SolidFactory.createCylinder('l6_h', 22, 35, new THREE.Vector3(0, 0, 25), defaultLayer);
          const union1 = SolidFactory.union('l6_u1', flange.object3D as THREE.Mesh, hub.object3D as THREE.Mesh, defaultLayer);

          // Shaft bore + keyway
          const bore = SolidFactory.createCylinder('l6_bore', 12, 60, new THREE.Vector3(0, 0, 25), defaultLayer);
          const sub1 = SolidFactory.subtract('l6_s1', union1.object3D as THREE.Mesh, bore.object3D as THREE.Mesh, defaultLayer);

          // 4 Bolt holes
          const b1 = SolidFactory.createCylinder('l6_b1', 4, 30, new THREE.Vector3(28, 0, 7.5), defaultLayer);
          const b2 = SolidFactory.createCylinder('l6_b2', 4, 30, new THREE.Vector3(-28, 0, 7.5), defaultLayer);
          const b3 = SolidFactory.createCylinder('l6_b3', 4, 30, new THREE.Vector3(0, 28, 7.5), defaultLayer);
          const b4 = SolidFactory.createCylinder('l6_b4', 4, 30, new THREE.Vector3(0, -28, 7.5), defaultLayer);

          let current = sub1.object3D as THREE.Mesh;
          current = SolidFactory.subtract('l6_sb1', current, b1.object3D as THREE.Mesh, defaultLayer).object3D as THREE.Mesh;
          current = SolidFactory.subtract('l6_sb2', current, b2.object3D as THREE.Mesh, defaultLayer).object3D as THREE.Mesh;
          current = SolidFactory.subtract('l6_sb3', current, b3.object3D as THREE.Mesh, defaultLayer).object3D as THREE.Mesh;
          const finalCoupling = SolidFactory.subtract('l6_final', current, b4.object3D as THREE.Mesh, defaultLayer);

          ents.push(finalCoupling);
          return ents;
        }
      }
    ];
  }
}
