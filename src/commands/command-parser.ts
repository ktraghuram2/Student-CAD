import * as THREE from 'three';
import { CommandDefinition } from '../types/cad';

export interface CommandPromptUpdate {
  prompt: string;
  commandName?: string;
}

export interface ExecutionContext {
  promptUser: (msg: string) => void;
  appendHistory: (entry: string, isPrompt?: boolean) => void;
  getActivePoint: () => THREE.Vector3;
  setCommandActive: (cmdName: string | null) => void;
}

export class CommandParser {
  // AutoCAD Command Definitions & Aliases
  static COMMAND_LIST: CommandDefinition[] = [
    { name: 'LINE', aliases: ['L'], description: 'Creates straight line segments', category: 'draw2d' },
    { name: 'PLINE', aliases: ['PL'], description: 'Creates a 2D polyline', category: 'draw2d' },
    { name: 'CIRCLE', aliases: ['C'], description: 'Creates a circle with center and radius', category: 'draw2d' },
    { name: 'ARC', aliases: ['A'], description: 'Creates an arc using 3 points or center-angles', category: 'draw2d' },
    { name: 'RECTANGLE', aliases: ['REC'], description: 'Creates a rectangular polyline', category: 'draw2d' },
    { name: 'POLYGON', aliases: ['POL'], description: 'Creates an equilateral closed polyline', category: 'draw2d' },
    { name: 'ELLIPSE', aliases: ['EL'], description: 'Creates an ellipse', category: 'draw2d' },
    { name: 'HATCH', aliases: ['H'], description: 'Fills an enclosed area with cross-hatching', category: 'draw2d' },

    { name: 'MOVE', aliases: ['M'], description: 'Moves objects a specified distance and direction', category: 'modify2d' },
    { name: 'COPY', aliases: ['CO', 'CP'], description: 'Copies objects a specified distance and direction', category: 'modify2d' },
    { name: 'ROTATE', aliases: ['RO'], description: 'Rotates objects around a base point', category: 'modify2d' },
    { name: 'SCALE', aliases: ['SC'], description: 'Enlarges or reduces selected objects', category: 'modify2d' },
    { name: 'TRIM', aliases: ['TR'], description: 'Trims objects to meet edges of other objects', category: 'modify2d' },
    { name: 'EXTEND', aliases: ['EX'], description: 'Extends objects to meet edges of other objects', category: 'modify2d' },
    { name: 'FILLET', aliases: ['F'], description: 'Rounds and fillets edges of objects', category: 'modify2d' },
    { name: 'CHAMFER', aliases: ['CHA'], description: 'Bevels edges of objects', category: 'modify2d' },
    { name: 'OFFSET', aliases: ['O'], description: 'Creates concentric circles or parallel lines', category: 'modify2d' },
    { name: 'MIRROR', aliases: ['MI'], description: 'Creates a mirrored copy of selected objects', category: 'modify2d' },
    { name: 'ERASE', aliases: ['E'], description: 'Removes objects from drawing', category: 'modify2d' },

    { name: 'DIMLINEAR', aliases: ['DIM', 'D', 'DLI'], description: 'Creates a linear dimension', category: 'annotation' },
    { name: 'TEXT', aliases: ['T', 'DT'], description: 'Creates a single-line text object', category: 'annotation' },

    { name: 'BOX', aliases: ['BOX'], description: 'Creates a 3D solid box', category: 'solid3d' },
    { name: 'CYLINDER', aliases: ['CYL'], description: 'Creates a 3D solid cylinder', category: 'solid3d' },
    { name: 'SPHERE', aliases: ['SPH'], description: 'Creates a 3D solid sphere', category: 'solid3d' },
    { name: 'CONE', aliases: ['CONE'], description: 'Creates a 3D solid cone', category: 'solid3d' },
    { name: 'EXTRUDE', aliases: ['EXT'], description: 'Extrudes 2D closed entities into 3D solid', category: 'solid3d' },
    { name: 'REVOLVE', aliases: ['REV'], description: 'Revolves a 2D profile into a 3D solid', category: 'solid3d' },
    { name: 'UNION', aliases: ['UNI'], description: 'Combines selected 3D solids by union', category: 'solid3d' },
    { name: 'SUBTRACT', aliases: ['SU'], description: 'Subtracts selected 3D solid from base solid', category: 'solid3d' },
    { name: 'INTERSECT', aliases: ['IN'], description: 'Creates 3D solid from common intersection', category: 'solid3d' },

    { name: 'ZOOM', aliases: ['Z'], description: 'Increases or decreases drawing magnification', category: 'view' },
    { name: 'PAN', aliases: ['P'], description: 'Shifts the view without changing magnification', category: 'view' },
    { name: 'ORBIT', aliases: ['3DO'], description: 'Rotates the view in 3D space', category: 'view' },
    { name: 'LAYER', aliases: ['LA'], description: 'Manages layers and layer properties', category: 'utility' },
    { name: 'PROPERTIES', aliases: ['PR', 'CH'], description: 'Controls properties of existing objects', category: 'utility' },
    { name: 'DIST', aliases: ['DI'], description: 'Measures distance and angle between two points', category: 'utility' },
    { name: 'EXPORTDXF', aliases: ['DXF'], description: 'Exports drawing to AutoCAD DXF format', category: 'utility' },
    { name: 'EXPORTSTL', aliases: ['STL'], description: 'Exports 3D solid models to STL format', category: 'utility' }
  ];

  static findCommand(input: string): CommandDefinition | null {
    const clean = input.trim().toUpperCase();
    if (!clean) return null;

    for (const cmd of this.COMMAND_LIST) {
      if (cmd.name === clean || cmd.aliases.includes(clean)) {
        return cmd;
      }
    }
    return null;
  }

  static getSuggestions(query: string): CommandDefinition[] {
    const q = query.trim().toUpperCase();
    if (!q) return [];

    return this.COMMAND_LIST.filter(cmd => 
      cmd.name.startsWith(q) || cmd.aliases.some(a => a.startsWith(q))
    ).slice(0, 6);
  }

  /**
   * Parse coordinate inputs like "100,50", "@50<45", "@20,-10"
   */
  static parseCoordinate(input: string, basePoint?: THREE.Vector3): THREE.Vector3 | null {
    const str = input.trim();
    if (!str) return null;

    // Relative polar: @distance<angle
    if (str.startsWith('@') && str.includes('<')) {
      const parts = str.substring(1).split('<');
      const dist = parseFloat(parts[0]);
      const deg = parseFloat(parts[1]);
      if (isNaN(dist) || isNaN(deg)) return null;

      const rad = (deg * Math.PI) / 180;
      const bx = basePoint?.x || 0;
      const by = basePoint?.y || 0;
      const bz = basePoint?.z || 0;

      return new THREE.Vector3(
        bx + Math.cos(rad) * dist,
        by + Math.sin(rad) * dist,
        bz
      );
    }

    // Relative cartesian: @dx,dy
    if (str.startsWith('@') && str.includes(',')) {
      const parts = str.substring(1).split(',');
      const dx = parseFloat(parts[0]);
      const dy = parseFloat(parts[1]);
      const dz = parts[2] ? parseFloat(parts[2]) : 0;
      if (isNaN(dx) || isNaN(dy)) return null;

      const bx = basePoint?.x || 0;
      const by = basePoint?.y || 0;
      const bz = basePoint?.z || 0;

      return new THREE.Vector3(bx + dx, by + dy, bz + dz);
    }

    // Absolute cartesian: x,y or x,y,z
    if (str.includes(',')) {
      const parts = str.split(',');
      const x = parseFloat(parts[0]);
      const y = parseFloat(parts[1]);
      const z = parts[2] ? parseFloat(parts[2]) : 0;
      if (isNaN(x) || isNaN(y)) return null;

      return new THREE.Vector3(x, y, z);
    }

    return null;
  }
}
