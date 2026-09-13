import * as THREE from 'three';
import { Brush, Evaluator, SUBTRACTION, ADDITION, INTERSECTION } from 'three-bvh-csg';
import { CADEntity, Layer } from '../types/cad';

export class SolidFactory {
  private static evaluator = new Evaluator();

  /**
   * Helper to convert standard THREE.Mesh into a CSG Brush
   */
  private static toBrush(mesh: THREE.Mesh): Brush {
    const brush = new Brush(mesh.geometry.clone(), mesh.material);
    brush.position.copy(mesh.position);
    brush.quaternion.copy(mesh.quaternion);
    brush.scale.copy(mesh.scale);
    brush.updateMatrixWorld(true);
    return brush;
  }

  /**
   * Helper to add sharp AutoCAD-style edge lines to solid meshes
   */
  static addEdges(mesh: THREE.Mesh, color = 0x111111): THREE.LineSegments {
    const edgesGeom = new THREE.EdgesGeometry(mesh.geometry, 25);
    const edgesMat = new THREE.LineBasicMaterial({ color, linewidth: 1.5 });
    const edges = new THREE.LineSegments(edgesGeom, edgesMat);
    edges.renderOrder = 1;
    mesh.add(edges);
    return edges;
  }

  /**
   * Default AutoCAD Shaded Material
   */
  static createSolidMaterial(color = '#0084ff'): THREE.MeshStandardMaterial {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color(color),
      roughness: 0.35,
      metalness: 0.15,
      polygonOffset: true,
      polygonOffsetFactor: 1,
      polygonOffsetUnits: 1
    });
  }

  /**
   * Creates a 3D Solid Box (AutoCAD BOX command)
   */
  static createBox(
    id: string,
    width: number,
    height: number,
    depth: number,
    center: THREE.Vector3,
    layer: Layer
  ): CADEntity {
    const geometry = new THREE.BoxGeometry(width, height, depth);
    const material = this.createSolidMaterial(layer.color);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.copy(center);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.userData = { entityId: id, type: 'solid_box' };

    const edges = this.addEdges(mesh);

    return {
      id,
      type: 'solid_box',
      layerId: layer.id,
      color: layer.color,
      object3D: mesh,
      edges3D: edges,
      data: { width, height, depth, center: center.clone() }
    };
  }

  /**
   * Creates a 3D Solid Cylinder (AutoCAD CYLINDER command)
   */
  static createCylinder(
    id: string,
    radius: number,
    height: number,
    center: THREE.Vector3,
    layer: Layer,
    segments = 36
  ): CADEntity {
    const geometry = new THREE.CylinderGeometry(radius, radius, height, segments);
    // Align cylinder along Z axis to match standard CAD coordinate conventions
    geometry.rotateX(Math.PI / 2);
    const material = this.createSolidMaterial(layer.color);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.copy(center);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.userData = { entityId: id, type: 'solid_cylinder' };

    const edges = this.addEdges(mesh);

    return {
      id,
      type: 'solid_cylinder',
      layerId: layer.id,
      color: layer.color,
      object3D: mesh,
      edges3D: edges,
      data: { radius, height, center: center.clone() }
    };
  }

  /**
   * Creates a 3D Solid Sphere (AutoCAD SPHERE command)
   */
  static createSphere(
    id: string,
    radius: number,
    center: THREE.Vector3,
    layer: Layer
  ): CADEntity {
    const geometry = new THREE.SphereGeometry(radius, 32, 24);
    const material = this.createSolidMaterial(layer.color);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.copy(center);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.userData = { entityId: id, type: 'solid_sphere' };

    const edges = this.addEdges(mesh);

    return {
      id,
      type: 'solid_sphere',
      layerId: layer.id,
      color: layer.color,
      object3D: mesh,
      edges3D: edges,
      data: { radius, center: center.clone() }
    };
  }

  /**
   * Creates a 3D Solid Cone (AutoCAD CONE command)
   */
  static createCone(
    id: string,
    radius: number,
    height: number,
    center: THREE.Vector3,
    layer: Layer
  ): CADEntity {
    const geometry = new THREE.ConeGeometry(radius, height, 32);
    geometry.rotateX(Math.PI / 2);
    const material = this.createSolidMaterial(layer.color);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.copy(center);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.userData = { entityId: id, type: 'solid_cone' };

    const edges = this.addEdges(mesh);

    return {
      id,
      type: 'solid_cone',
      layerId: layer.id,
      color: layer.color,
      object3D: mesh,
      edges3D: edges,
      data: { radius, height, center: center.clone() }
    };
  }

  /**
   * Creates a 3D Extrusion from 2D shape (AutoCAD EXTRUDE command)
   */
  static createExtrude(
    id: string,
    shapePoints: THREE.Vector2[],
    height: number,
    layer: Layer
  ): CADEntity {
    const shape = new THREE.Shape(shapePoints);
    const extrudeSettings = {
      steps: 1,
      depth: height,
      bevelEnabled: false
    };
    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    const material = this.createSolidMaterial(layer.color);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.userData = { entityId: id, type: 'solid_extrude' };

    const edges = this.addEdges(mesh);

    return {
      id,
      type: 'solid_extrude',
      layerId: layer.id,
      color: layer.color,
      object3D: mesh,
      edges3D: edges,
      data: { shapePoints, height }
    };
  }

  /**
   * Revolve a 2D profile around an axis (AutoCAD REVOLVE command)
   */
  static createRevolve(
    id: string,
    profilePoints: THREE.Vector2[],
    segments = 48,
    layer: Layer
  ): CADEntity {
    // LatheGeometry revolves around Y axis
    const geometry = new THREE.LatheGeometry(profilePoints, segments);
    const material = this.createSolidMaterial(layer.color);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.userData = { entityId: id, type: 'solid_extrude' };

    const edges = this.addEdges(mesh);

    return {
      id,
      type: 'solid_extrude',
      layerId: layer.id,
      color: layer.color,
      object3D: mesh,
      edges3D: edges,
      data: { profilePoints, segments }
    };
  }

  /**
   * Boolean CSG: Union (AutoCAD UNION command)
   */
  static union(id: string, meshA: THREE.Mesh, meshB: THREE.Mesh, layer: Layer): CADEntity {
    const brushA = this.toBrush(meshA);
    const brushB = this.toBrush(meshB);

    const result = this.evaluator.evaluate(brushA, brushB, ADDITION);
    result.material = this.createSolidMaterial(layer.color);
    result.userData = { entityId: id, type: 'solid_csg', op: 'union' };

    const edges = this.addEdges(result);

    return {
      id,
      type: 'solid_csg',
      layerId: layer.id,
      color: layer.color,
      object3D: result,
      edges3D: edges,
      data: { op: 'union' }
    };
  }

  /**
   * Boolean CSG: Subtract (AutoCAD SUBTRACT command)
   */
  static subtract(id: string, meshA: THREE.Mesh, meshB: THREE.Mesh, layer: Layer): CADEntity {
    const brushA = this.toBrush(meshA);
    const brushB = this.toBrush(meshB);

    const result = this.evaluator.evaluate(brushA, brushB, SUBTRACTION);
    result.material = this.createSolidMaterial(layer.color);
    result.userData = { entityId: id, type: 'solid_csg', op: 'subtract' };

    const edges = this.addEdges(result);

    return {
      id,
      type: 'solid_csg',
      layerId: layer.id,
      color: layer.color,
      object3D: result,
      edges3D: edges,
      data: { op: 'subtract' }
    };
  }

  /**
   * Boolean CSG: Intersect (AutoCAD INTERSECT command)
   */
  static intersect(id: string, meshA: THREE.Mesh, meshB: THREE.Mesh, layer: Layer): CADEntity {
    const brushA = this.toBrush(meshA);
    const brushB = this.toBrush(meshB);

    const result = this.evaluator.evaluate(brushA, brushB, INTERSECTION);
    result.material = this.createSolidMaterial(layer.color);
    result.userData = { entityId: id, type: 'solid_csg', op: 'intersect' };

    const edges = this.addEdges(result);

    return {
      id,
      type: 'solid_csg',
      layerId: layer.id,
      color: layer.color,
      object3D: result,
      edges3D: edges,
      data: { op: 'intersect' }
    };
  }
}
