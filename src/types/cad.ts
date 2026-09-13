import * as THREE from 'three';

export type EntityType = 
  | 'line' 
  | 'polyline' 
  | 'circle' 
  | 'arc' 
  | 'rectangle' 
  | 'dimension' 
  | 'text' 
  | 'solid_box' 
  | 'solid_cylinder' 
  | 'solid_sphere' 
  | 'solid_cone' 
  | 'solid_extrude' 
  | 'solid_csg';

export type VisualStyle = '2d_wireframe' | 'shaded_edges' | 'conceptual' | 'realistic' | 'xray';

export type StandardView = 'top' | 'bottom' | 'front' | 'back' | 'left' | 'right' | 'sw_iso' | 'se_iso' | 'ne_iso' | 'nw_iso';

export interface Layer {
  id: string;
  name: string;
  color: string;
  visible: boolean;
  locked: boolean;
  linetype: 'Continuous' | 'Dashed' | 'Center' | 'Hidden';
  lineweight: number; // in mm, e.g. 0.25
}

export interface SnapResult {
  point: THREE.Vector3;
  type: 'endpoint' | 'midpoint' | 'center' | 'quadrant' | 'intersection' | 'perpendicular' | 'nearest' | 'grid';
  entityId?: string;
  label: string;
}

export interface CADEntity {
  id: string;
  type: EntityType;
  layerId: string;
  color?: string;
  object3D: THREE.Object3D;
  edges3D?: THREE.LineSegments;
  data: any; // Raw geometric parameters
  selected?: boolean;
}

export interface CommandDefinition {
  name: string;
  aliases: string[];
  description: string;
  category: 'draw2d' | 'modify2d' | 'solid3d' | 'view' | 'annotation' | 'utility';
  icon?: string;
}

export interface LabExercise {
  id: string;
  title: string;
  branch: string;
  year: string;
  description: string;
  instructions: string[];
  entities: () => Partial<CADEntity>[];
}
