import './styles/autocad.css';
import * as THREE from 'three';
import { CADEngine } from './core/cad-engine';
import { ViewCube } from './core/viewcube';
import { UCSIcon } from './core/ucs';
import { RibbonUI } from './ui/ribbon';
import { CommandParser } from './commands/command-parser';
import { EntityFactory } from './geometry2d/entities';
import { SolidFactory } from './modeling3d/solids';
import { DXFManager } from './io/dxf';
import { STLExporter } from './io/stl';
import { LabExercisesManager } from './lab/exercises';
import { CADEntity, Layer, StandardView, VisualStyle } from './types/cad';

class StudentCADApp {
  engine: CADEngine;
  viewcube: ViewCube;
  ucsIcon: UCSIcon;
  ribbon: RibbonUI;

  // Command State Machine
  activeCommand: string | null = null;
  commandStep = 0;
  commandPoints: THREE.Vector3[] = [];
  selectedEntitiesForCmd: CADEntity[] = [];
  commandHistoryList: string[] = [];
  historyIndex = -1;

  // Dynamic Input enabled
  dynEnabled = true;

  constructor() {
    const canvas = document.getElementById('cad-canvas') as HTMLCanvasElement;
    this.engine = new CADEngine(canvas);

    // ViewCube
    const vcContainer = document.getElementById('viewcube-container')!;
    this.viewcube = new ViewCube(vcContainer, {
      onViewChange: (view) => this.setStandardView(view as StandardView)
    });

    // UCS Icon
    const ucsContainer = document.getElementById('ucs-container')!;
    this.ucsIcon = new UCSIcon(ucsContainer);

    // Sync camera orientations
    this.engine.onCameraChange = (quat) => {
      this.viewcube.updateOrientation(quat);
      this.ucsIcon.draw(quat);
    };

    // Live coordinates readout
    const coordsEl = document.getElementById('coords-display')!;
    this.engine.onCoordsUpdate = (x, y, z) => {
      coordsEl.textContent = `${x.toFixed(4)}, ${y.toFixed(4)}, ${z.toFixed(4)}`;
      this.updateDynamicInput(x, y, z);
    };

    // Snap glyph updates
    const snapGlyphEl = document.getElementById('snap-glyph')!;
    this.engine.onSnapUpdate = (snap, screenPos) => {
      if (snap) {
        snapGlyphEl.style.display = 'block';
        snapGlyphEl.style.left = `${screenPos.x}px`;
        snapGlyphEl.style.top = `${screenPos.y}px`;
        snapGlyphEl.className = `acad-snap-glyph snap-${snap.type}`;
      } else {
        snapGlyphEl.style.display = 'none';
      }
    };

    // Initialize Ribbon
    const ribbonContainer = document.getElementById('acad-ribbon')!;
    this.ribbon = new RibbonUI(ribbonContainer, {
      onToolSelect: (tool) => this.startCommand(tool),
      onLayerSelect: (layerId) => { this.engine.currentLayerId = layerId; },
      onLayerProperties: () => this.openLayerModal(),
      onViewSelect: (view) => this.setStandardView(view as StandardView),
      onVisualStyleSelect: (style) => this.setVisualStyle(style as VisualStyle),
      onExerciseSelect: (labId) => this.loadExercise(labId),
      onOpenLabGuide: () => this.openLabGuideModal()
    });

    this.setupViewportClicks();
    this.setupCommandLine();
    this.setupStatusToggles();
    this.setupQuickAccessToolbar();
    this.setupModals();
    this.setupGlobalShortcuts();

    // Default to Home View
    document.getElementById('viewcube-home')?.addEventListener('click', () => {
      this.setStandardView('sw_iso');
    });

    // Load initial greeting exercise or clear workspace
    this.loadExercise('lab-1');
  }

  // --- Viewport Interactive Clicks & Entity Selection ---

  private setupViewportClicks() {
    const canvas = this.engine.canvas;

    canvas.addEventListener('pointerdown', (e) => {
      // Left click only
      if (e.button !== 0) return;

      const clickWorld = this.engine.currentCursorWorld.clone();
      this.handleCanvasPoint(clickWorld);
    });

    canvas.addEventListener('pointermove', () => {
      if (!this.activeCommand) return;

      const curr = this.engine.currentCursorWorld;

      // Update interactive rubberband preview
      if (this.activeCommand === 'LINE' && this.commandPoints.length > 0) {
        this.engine.setPreviewLine(this.commandPoints[this.commandPoints.length - 1], curr);
      } else if (this.activeCommand === 'RECTANGLE' && this.commandPoints.length === 1) {
        this.engine.setPreviewRectangle(this.commandPoints[0], curr);
      } else if (this.activeCommand === 'CIRCLE' && this.commandPoints.length === 1) {
        const r = this.commandPoints[0].distanceTo(curr);
        this.engine.setPreviewCircle(this.commandPoints[0], r);
      }
    });
  }

  private handleCanvasPoint(pt: THREE.Vector3) {
    if (!this.activeCommand) return;

    this.commandPoints.push(pt);

    switch (this.activeCommand) {
      case 'LINE':
        if (this.commandPoints.length === 1) {
          this.promptUser('Specify next point or [Undo]:');
        } else {
          const p1 = this.commandPoints[this.commandPoints.length - 2];
          const p2 = this.commandPoints[this.commandPoints.length - 1];
          const line = EntityFactory.createLine(this.generateId('line'), p1, p2, this.engine.getCurrentLayer());
          this.engine.addEntity(line);
          this.appendHistory(`Line added from (${p1.x.toFixed(1)}, ${p1.y.toFixed(1)}) to (${p2.x.toFixed(1)}, ${p2.y.toFixed(1)})`);
          this.promptUser('Specify next point or [Close/Enter]:');
        }
        break;

      case 'PLINE':
        if (this.commandPoints.length === 1) {
          this.promptUser('Specify next point or [Close/Enter]:');
        } else {
          const p1 = this.commandPoints[this.commandPoints.length - 2];
          const p2 = this.commandPoints[this.commandPoints.length - 1];
          const seg = EntityFactory.createLine(this.generateId('pline_seg'), p1, p2, this.engine.getCurrentLayer());
          this.engine.addEntity(seg);
          this.promptUser('Specify next point or press Enter to finish:');
        }
        break;

      case 'CIRCLE':
        if (this.commandPoints.length === 1) {
          this.promptUser('Specify radius of circle or [Diameter]:');
        } else if (this.commandPoints.length === 2) {
          const center = this.commandPoints[0];
          const r = center.distanceTo(this.commandPoints[1]);
          const circle = EntityFactory.createCircle(this.generateId('circle'), center, r, this.engine.getCurrentLayer());
          this.engine.addEntity(circle);
          this.appendHistory(`Circle created at (${center.x.toFixed(1)}, ${center.y.toFixed(1)}), Radius: ${r.toFixed(1)}`);
          this.finishCommand();
        }
        break;

      case 'RECTANGLE':
        if (this.commandPoints.length === 1) {
          this.promptUser('Specify other corner point or [Dimensions]:');
        } else if (this.commandPoints.length === 2) {
          const rect = EntityFactory.createRectangle(this.generateId('rect'), this.commandPoints[0], this.commandPoints[1], this.engine.getCurrentLayer());
          this.engine.addEntity(rect);
          this.appendHistory(`Rectangle created from (${this.commandPoints[0].x.toFixed(1)}, ${this.commandPoints[0].y.toFixed(1)}) to (${this.commandPoints[1].x.toFixed(1)}, ${this.commandPoints[1].y.toFixed(1)})`);
          this.finishCommand();
        }
        break;

      case 'ARC':
        if (this.commandPoints.length === 1) {
          this.promptUser('Specify second point of arc:');
        } else if (this.commandPoints.length === 2) {
          this.promptUser('Specify end point of arc:');
        } else if (this.commandPoints.length === 3) {
          const p1 = this.commandPoints[0];
          const p2 = this.commandPoints[1];
          const p3 = this.commandPoints[2];
          // Approximate center and radius
          const mid = new THREE.Vector3().addVectors(p1, p3).multiplyScalar(0.5);
          const r = p1.distanceTo(mid);
          const a1 = Math.atan2(p1.y - mid.y, p1.x - mid.x);
          const a2 = Math.atan2(p3.y - mid.y, p3.x - mid.x);
          const arc = EntityFactory.createArc(this.generateId('arc'), mid, r, a1, a2, this.engine.getCurrentLayer());
          this.engine.addEntity(arc);
          this.finishCommand();
        }
        break;

      case 'DIMLINEAR':
        if (this.commandPoints.length === 1) {
          this.promptUser('Specify second extension line origin:');
        } else if (this.commandPoints.length === 2) {
          this.promptUser('Specify dimension line location:');
        } else if (this.commandPoints.length === 3) {
          const p1 = this.commandPoints[0];
          const p2 = this.commandPoints[1];
          const loc = this.commandPoints[2];
          const offset = loc.distanceTo(p1) > 5 ? 12 : -12;
          const dim = EntityFactory.createDimension(this.generateId('dim'), p1, p2, offset, this.engine.getCurrentLayer());
          this.engine.addEntity(dim);
          this.appendHistory(`Dimension created: ${p1.distanceTo(p2).toFixed(1)} mm`);
          this.finishCommand();
        }
        break;

      case 'BOX':
        if (this.commandPoints.length === 1) {
          this.promptUser('Specify other corner of box [Width, Height, Depth]:');
        } else if (this.commandPoints.length === 2) {
          const p1 = this.commandPoints[0];
          const p2 = this.commandPoints[1];
          const w = Math.max(10, Math.abs(p2.x - p1.x));
          const h = Math.max(10, Math.abs(p2.y - p1.y));
          const d = 40; // Default extrusion depth
          const center = new THREE.Vector3((p1.x + p2.x) / 2, (p1.y + p2.y) / 2, d / 2);
          const box = SolidFactory.createBox(this.generateId('box'), w, h, d, center, this.engine.getCurrentLayer());
          this.engine.addEntity(box);
          this.appendHistory(`3D Box created: ${w.toFixed(1)} x ${h.toFixed(1)} x ${d.toFixed(1)}`);
          this.setStandardView('sw_iso');
          this.finishCommand();
        }
        break;

      case 'CYLINDER':
        if (this.commandPoints.length === 1) {
          this.promptUser('Specify base radius and height:');
        } else if (this.commandPoints.length === 2) {
          const center = this.commandPoints[0];
          const r = Math.max(5, center.distanceTo(this.commandPoints[1]));
          const height = 50;
          const cyl = SolidFactory.createCylinder(this.generateId('cyl'), r, height, new THREE.Vector3(center.x, center.y, height / 2), this.engine.getCurrentLayer());
          this.engine.addEntity(cyl);
          this.appendHistory(`3D Cylinder created: Radius ${r.toFixed(1)}, Height ${height}`);
          this.setStandardView('sw_iso');
          this.finishCommand();
        }
        break;

      case 'SPHERE':
        if (this.commandPoints.length === 1) {
          this.promptUser('Specify radius of sphere:');
        } else if (this.commandPoints.length === 2) {
          const center = this.commandPoints[0];
          const r = Math.max(5, center.distanceTo(this.commandPoints[1]));
          const sph = SolidFactory.createSphere(this.generateId('sph'), r, center, this.engine.getCurrentLayer());
          this.engine.addEntity(sph);
          this.appendHistory(`3D Sphere created: Radius ${r.toFixed(1)}`);
          this.setStandardView('sw_iso');
          this.finishCommand();
        }
        break;

      case 'CONE':
        if (this.commandPoints.length === 1) {
          this.promptUser('Specify base radius:');
        } else if (this.commandPoints.length === 2) {
          const center = this.commandPoints[0];
          const r = Math.max(5, center.distanceTo(this.commandPoints[1]));
          const cone = SolidFactory.createCone(this.generateId('cone'), r, 60, center, this.engine.getCurrentLayer());
          this.engine.addEntity(cone);
          this.appendHistory(`3D Cone created: Radius ${r.toFixed(1)}`);
          this.setStandardView('sw_iso');
          this.finishCommand();
        }
        break;

      case 'DIST':
        if (this.commandPoints.length === 1) {
          this.promptUser('Specify second point:');
        } else if (this.commandPoints.length === 2) {
          const d = this.commandPoints[0].distanceTo(this.commandPoints[1]);
          const dx = Math.abs(this.commandPoints[1].x - this.commandPoints[0].x);
          const dy = Math.abs(this.commandPoints[1].y - this.commandPoints[0].y);
          this.appendHistory(`Distance = ${d.toFixed(4)} mm, Delta X = ${dx.toFixed(4)}, Delta Y = ${dy.toFixed(4)}`);
          this.finishCommand();
        }
        break;

      case 'HATCH':
        if (this.commandPoints.length >= 2) {
          const p1 = this.commandPoints[0];
          const p2 = this.commandPoints[1];
          const hatch = EntityFactory.createHatch(
            this.generateId('hatch'),
            Math.min(p1.x, p2.x),
            Math.min(p1.y, p2.y),
            Math.max(p1.x, p2.x),
            Math.max(p1.y, p2.y),
            this.engine.getCurrentLayer()
          );
          this.engine.addEntity(hatch);
          this.finishCommand();
        } else {
          this.promptUser('Specify opposite corner for hatch boundary:');
        }
        break;

      case 'SUBTRACT':
        // CSG boolean subtraction on selected solids
        this.handleCSGClick('subtract', pt);
        break;

      case 'UNION':
        this.handleCSGClick('union', pt);
        break;

      case 'EXTRUDE':
        this.handleExtrudeClick(pt);
        break;

      case 'ERASE':
        this.handleEraseClick(pt);
        break;
    }
  }

  private handleCSGClick(op: 'subtract' | 'union', pt: THREE.Vector3) {
    const solid = this.findNearestSolid(pt);
    if (!solid) {
      this.appendHistory('No 3D solid found near pick point. Click directly on a solid.');
      return;
    }

    this.selectedEntitiesForCmd.push(solid);

    if (op === 'subtract') {
      if (this.selectedEntitiesForCmd.length === 1) {
        this.promptUser('Select solid to subtract (cutting tool):');
      } else if (this.selectedEntitiesForCmd.length === 2) {
        const solidA = this.selectedEntitiesForCmd[0];
        const solidB = this.selectedEntitiesForCmd[1];
        try {
          const result = SolidFactory.subtract(
            this.generateId('csg_sub'),
            solidA.object3D as THREE.Mesh,
            solidB.object3D as THREE.Mesh,
            this.engine.getCurrentLayer()
          );
          this.engine.removeEntity(solidA.id);
          this.engine.removeEntity(solidB.id);
          this.engine.addEntity(result);
          this.appendHistory('CSG Subtraction completed successfully.');
        } catch (err) {
          this.appendHistory('Error performing boolean subtraction: ' + String(err));
        }
        this.finishCommand();
      }
    } else if (op === 'union') {
      if (this.selectedEntitiesForCmd.length === 1) {
        this.promptUser('Select second solid for union:');
      } else if (this.selectedEntitiesForCmd.length === 2) {
        const solidA = this.selectedEntitiesForCmd[0];
        const solidB = this.selectedEntitiesForCmd[1];
        try {
          const result = SolidFactory.union(
            this.generateId('csg_uni'),
            solidA.object3D as THREE.Mesh,
            solidB.object3D as THREE.Mesh,
            this.engine.getCurrentLayer()
          );
          this.engine.removeEntity(solidA.id);
          this.engine.removeEntity(solidB.id);
          this.engine.addEntity(result);
          this.appendHistory('CSG Union completed successfully.');
        } catch (err) {
          this.appendHistory('Error performing boolean union: ' + String(err));
        }
        this.finishCommand();
      }
    }
  }

  private handleExtrudeClick(pt: THREE.Vector3) {
    // Find nearest 2D entity to extrude
    let targetEnt: CADEntity | null = null;
    let minDist = 40;

    for (const ent of this.engine.entities) {
      if (ent.type === 'rectangle' || ent.type === 'circle') {
        const center = ent.data.center || new THREE.Vector3().addVectors(ent.data.p1, ent.data.p2).multiplyScalar(0.5);
        const dist = pt.distanceTo(center);
        if (dist < minDist) {
          minDist = dist;
          targetEnt = ent;
        }
      }
    }

    if (!targetEnt) {
      this.appendHistory('Select a closed 2D entity (Rectangle or Circle) to extrude.');
      return;
    }

    if (targetEnt.type === 'rectangle') {
      const p1 = targetEnt.data.p1;
      const p2 = targetEnt.data.p2;
      const shapePts = [
        new THREE.Vector2(p1.x, p1.y),
        new THREE.Vector2(p2.x, p1.y),
        new THREE.Vector2(p2.x, p2.y),
        new THREE.Vector2(p1.x, p2.y)
      ];
      const extrude = SolidFactory.createExtrude(this.generateId('extrude'), shapePts, 40, this.engine.getCurrentLayer());
      this.engine.addEntity(extrude);
      this.appendHistory('2D Rectangle extruded to 40 mm height solid.');
    } else if (targetEnt.type === 'circle') {
      const cyl = SolidFactory.createCylinder(
        this.generateId('ext_cyl'),
        targetEnt.data.radius,
        50,
        new THREE.Vector3(targetEnt.data.center.x, targetEnt.data.center.y, 25),
        this.engine.getCurrentLayer()
      );
      this.engine.addEntity(cyl);
      this.appendHistory('2D Circle extruded to 50 mm height solid cylinder.');
    }

    this.setStandardView('sw_iso');
    this.finishCommand();
  }

  private handleEraseClick(pt: THREE.Vector3) {
    let toRemove: CADEntity | null = null;
    let minDist = 25;

    for (const ent of this.engine.entities) {
      const pos = ent.object3D.position;
      const dist = pt.distanceTo(pos);
      if (dist < minDist) {
        minDist = dist;
        toRemove = ent;
      }
    }

    if (toRemove) {
      this.engine.removeEntity(toRemove.id);
      this.appendHistory(`Entity ${toRemove.type} (${toRemove.id}) erased.`);
    }
  }

  private findNearestSolid(pt: THREE.Vector3): CADEntity | null {
    let best: CADEntity | null = null;
    let minD = 80;

    for (const ent of this.engine.entities) {
      if (ent.type.startsWith('solid') || ent.type === 'solid_csg') {
        const d = pt.distanceTo(ent.object3D.position);
        if (d < minD) {
          minD = d;
          best = ent;
        }
      }
    }
    return best;
  }

  // --- AutoCAD Command Line Execution ---

  private setupCommandLine() {
    const input = document.getElementById('cmd-input') as HTMLInputElement;
    const popup = document.getElementById('cmd-autocomplete') as HTMLElement;

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const val = input.value.trim();
        input.value = '';
        popup.style.display = 'none';

        if (val) {
          this.executeCommandInput(val);
        } else if (this.activeCommand) {
          // Pressing Enter completes current command (e.g. LINE, PLINE)
          this.finishCommand();
        }
      } else if (e.key === 'Escape') {
        this.cancelActiveCommand();
      } else if (e.key === 'ArrowUp') {
        if (this.commandHistoryList.length > 0) {
          this.historyIndex = Math.min(this.commandHistoryList.length - 1, this.historyIndex + 1);
          input.value = this.commandHistoryList[this.commandHistoryList.length - 1 - this.historyIndex];
        }
      } else if (e.key === 'ArrowDown') {
        if (this.historyIndex > 0) {
          this.historyIndex--;
          input.value = this.commandHistoryList[this.commandHistoryList.length - 1 - this.historyIndex];
        } else {
          this.historyIndex = -1;
          input.value = '';
        }
      }
    });

    input.addEventListener('input', () => {
      const q = input.value.trim();
      if (!q) {
        popup.style.display = 'none';
        return;
      }
      const suggestions = CommandParser.getSuggestions(q);
      if (suggestions.length > 0) {
        popup.innerHTML = suggestions.map(s => `
          <div class="acad-autocomplete-item" data-cmd="${s.name}">
            <span>${s.name}</span>
            <span class="acad-autocomplete-alias">${s.aliases.join(', ')}</span>
          </div>
        `).join('');
        popup.style.display = 'flex';

        popup.querySelectorAll('.acad-autocomplete-item').forEach(item => {
          item.addEventListener('click', (ev) => {
            const cmd = (ev.currentTarget as HTMLElement).dataset.cmd;
            if (cmd) {
              input.value = '';
              popup.style.display = 'none';
              this.startCommand(cmd);
            }
          });
        });
      } else {
        popup.style.display = 'none';
      }
    });
  }

  private executeCommandInput(inputStr: string) {
    this.commandHistoryList.push(inputStr);
    this.historyIndex = -1;
    this.appendHistory(inputStr, false);

    // If a command is already expecting a coordinate or parameter:
    if (this.activeCommand) {
      const lastPt = this.commandPoints.length > 0 ? this.commandPoints[this.commandPoints.length - 1] : undefined;
      const coord = CommandParser.parseCoordinate(inputStr, lastPt);
      if (coord) {
        this.handleCanvasPoint(coord);
        return;
      }

      // Check sub-options (e.g. C for close, U for undo, E for extents)
      const opt = inputStr.toUpperCase();
      if (opt === 'C' && this.activeCommand === 'LINE' && this.commandPoints.length >= 2) {
        // Close line loop
        const p1 = this.commandPoints[this.commandPoints.length - 1];
        const p2 = this.commandPoints[0];
        const line = EntityFactory.createLine(this.generateId('line'), p1, p2, this.engine.getCurrentLayer());
        this.engine.addEntity(line);
        this.finishCommand();
        return;
      } else if (opt === 'U') {
        this.engine.undo();
        return;
      }
    }

    // Otherwise, parse as new command name or alias
    const cmdDef = CommandParser.findCommand(inputStr);
    if (cmdDef) {
      this.startCommand(cmdDef.name);
    } else {
      this.appendHistory(`Unknown command "${inputStr}". Type ? or press F1 for help.`);
      this.finishCommand();
    }
  }

  startCommand(cmdName: string) {
    this.finishCommand(false);
    this.activeCommand = cmdName.toUpperCase();
    this.commandStep = 0;
    this.commandPoints = [];
    this.selectedEntitiesForCmd = [];

    const label = document.getElementById('cmd-prompt-label')!;

    switch (this.activeCommand) {
      case 'LINE':
        this.promptUser('Specify first point:');
        break;
      case 'PLINE':
        this.promptUser('Specify start point:');
        break;
      case 'CIRCLE':
        this.promptUser('Specify center point for circle or [3P/2P]:');
        break;
      case 'RECTANGLE':
        this.promptUser('Specify first corner point:');
        break;
      case 'ARC':
        this.promptUser('Specify start point of arc:');
        break;
      case 'BOX':
        this.promptUser('Specify first corner point of box:');
        break;
      case 'CYLINDER':
        this.promptUser('Specify center point of base:');
        break;
      case 'SPHERE':
        this.promptUser('Specify center point:');
        break;
      case 'CONE':
        this.promptUser('Specify center point of base:');
        break;
      case 'EXTRUDE':
        this.promptUser('Select 2D closed object to extrude:');
        break;
      case 'SUBTRACT':
        this.promptUser('Select solid to subtract from (base solid):');
        break;
      case 'UNION':
        this.promptUser('Select first solid for union:');
        break;
      case 'DIMLINEAR':
        this.promptUser('Specify first extension line origin:');
        break;
      case 'DIST':
        this.promptUser('Specify first point:');
        break;
      case 'HATCH':
        this.promptUser('Specify first corner for hatch boundary:');
        break;
      case 'ERASE':
        this.promptUser('Select objects to erase:');
        break;
      case 'ZOOM':
      case 'ZOOM_EXTENTS':
        this.engine.cameraController.zoomExtents();
        this.appendHistory('Regenerating model -- Zoom Extents completed.');
        this.finishCommand();
        break;
      case 'PAN':
        this.promptUser('Press and drag middle mouse button to pan.');
        this.finishCommand();
        break;
      case 'ORBIT':
        this.promptUser('Press Shift + middle mouse button to free orbit in 3D.');
        this.finishCommand();
        break;
      case 'LAYER':
        this.openLayerModal();
        this.finishCommand();
        break;
      case 'EXPORTDXF':
        this.exportDXFFile();
        this.finishCommand();
        break;
      case 'EXPORTSTL':
        this.exportSTLFile();
        this.finishCommand();
        break;
      case 'IMPORTDXF':
        document.getElementById('dxf-file-input')?.click();
        this.finishCommand();
        break;
      case 'PLOT':
        window.print();
        this.finishCommand();
        break;
      default:
        this.promptUser(`Command ${this.activeCommand} activated.`);
    }
  }

  cancelActiveCommand() {
    if (this.activeCommand) {
      this.appendHistory(`*Cancel*`);
    }
    this.finishCommand();
  }

  finishCommand(resetPrompt = true) {
    this.activeCommand = null;
    this.commandPoints = [];
    this.selectedEntitiesForCmd = [];
    this.engine.clearPreview();

    if (resetPrompt) {
      const label = document.getElementById('cmd-prompt-label')!;
      label.textContent = 'Command:';
    }
  }

  promptUser(text: string) {
    const label = document.getElementById('cmd-prompt-label')!;
    label.textContent = text;
    this.appendHistory(text, true);
  }

  appendHistory(text: string, isPrompt = false) {
    const historyEl = document.getElementById('cmd-history')!;
    const div = document.createElement('div');
    if (isPrompt) {
      div.className = 'cmd-prompt';
    } else {
      div.className = 'cmd-entry';
    }
    div.textContent = text;
    historyEl.appendChild(div);
    historyEl.scrollTop = historyEl.scrollHeight;
  }

  private updateDynamicInput(x: number, y: number, z: number) {
    if (!this.dynEnabled) return;
    const dynEl = document.getElementById('dynamic-input')!;

    if (this.activeCommand) {
      dynEl.style.display = 'block';
      const screenPos = this.engine.worldToScreen(new THREE.Vector3(x, y, z), window.innerWidth, window.innerHeight);
      dynEl.style.left = `${screenPos.x + 18}px`;
      dynEl.style.top = `${screenPos.y - 12}px`;

      if (this.commandPoints.length > 0) {
        const last = this.commandPoints[this.commandPoints.length - 1];
        const dist = last.distanceTo(new THREE.Vector3(x, y, z));
        const angle = (Math.atan2(y - last.y, x - last.x) * 180) / Math.PI;
        dynEl.textContent = `${dist.toFixed(2)} < ${angle.toFixed(1)}°`;
      } else {
        dynEl.textContent = `${x.toFixed(2)}, ${y.toFixed(2)}`;
      }
    } else {
      dynEl.style.display = 'none';
    }
  }

  // --- Views & Visual Styles ---

  setStandardView(view: StandardView) {
    this.engine.cameraController.setView(view);
    const vpName = document.getElementById('vp-view-name')!;
    vpName.textContent = `[${view.toUpperCase()}]`;
    this.appendHistory(`View changed to ${view.toUpperCase()}`);
  }

  setVisualStyle(style: VisualStyle) {
    this.engine.setVisualStyle(style);
    const vpStyle = document.getElementById('vp-style-name')!;
    vpStyle.textContent = `[${style.replace('_', ' ').toUpperCase()}]`;
    this.appendHistory(`Visual style set to ${style}`);
  }

  // --- Status Bar Toggles ---

  private setupStatusToggles() {
    const setupToggle = (id: string, onToggle: (active: boolean) => void) => {
      const btn = document.getElementById(id)!;
      btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        onToggle(btn.classList.contains('active'));
      });
    };

    setupToggle('toggle-grid', (active) => this.engine.grid.toggleVisibility(active));
    setupToggle('toggle-snap', (active) => { this.engine.snapManager.gridSnapEnabled = active; });
    setupToggle('toggle-ortho', (active) => { this.engine.snapManager.orthoEnabled = active; });
    setupToggle('toggle-osnap', (active) => { this.engine.snapManager.enabled = active; });
    setupToggle('toggle-dyn', (active) => { this.dynEnabled = active; });
  }

  // --- Quick Access Toolbar ---

  private setupQuickAccessToolbar() {
    document.getElementById('qat-new')?.addEventListener('click', () => {
      this.engine.clearEntities();
      this.appendHistory('New drawing created.');
    });

    document.getElementById('qat-open')?.addEventListener('click', () => {
      document.getElementById('dxf-file-input')?.click();
    });

    document.getElementById('qat-save')?.addEventListener('click', () => {
      this.exportDXFFile();
    });

    document.getElementById('qat-plot')?.addEventListener('click', () => {
      window.print();
    });

    document.getElementById('qat-undo')?.addEventListener('click', () => {
      this.engine.undo();
      this.appendHistory('UNDO');
    });

    document.getElementById('qat-redo')?.addEventListener('click', () => {
      this.engine.redo();
      this.appendHistory('REDO');
    });

    document.getElementById('workspace-select')?.addEventListener('change', (e) => {
      const val = (e.target as HTMLSelectElement).value;
      if (val === 'drafting') {
        this.ribbon.setTab('home');
        this.setStandardView('top');
        this.setVisualStyle('2d_wireframe');
      } else {
        this.ribbon.setTab('solid');
        this.setStandardView('sw_iso');
        this.setVisualStyle('shaded_edges');
      }
    });

    // In-Canvas Top-Left Dropdown Quick Toggle
    document.getElementById('vp-view-name')?.addEventListener('click', () => {
      this.ribbon.setTab('view');
    });
    document.getElementById('vp-style-name')?.addEventListener('click', () => {
      this.ribbon.setTab('view');
    });
  }

  // --- Modals (Layers & Lab Exercises) ---

  private setupModals() {
    // Layers Modal
    document.getElementById('btn-close-layers')?.addEventListener('click', () => {
      document.getElementById('modal-layers')!.style.display = 'none';
    });

    document.getElementById('btn-new-layer')?.addEventListener('click', () => {
      const num = this.engine.layers.length + 1;
      const colors = ['#00e676', '#ff9100', '#d500f9', '#00e5ff', '#ff1744'];
      const newLyr: Layer = {
        id: 'layer_' + num,
        name: 'Layer ' + num,
        color: colors[num % colors.length],
        visible: true,
        locked: false,
        linetype: 'Continuous',
        lineweight: 0.25
      };
      this.engine.layers.push(newLyr);
      this.renderLayersTable();
    });

    // Lab Guide Modal
    document.getElementById('btn-close-lab-guide')?.addEventListener('click', () => {
      document.getElementById('modal-lab-guide')!.style.display = 'none';
    });

    // Hidden DXF File Input Handler
    const dxfInput = document.getElementById('dxf-file-input') as HTMLInputElement;
    dxfInput.addEventListener('change', async () => {
      const file = dxfInput.files?.[0];
      if (!file) return;

      const text = await file.text();
      const imported = DXFManager.parseDXF(text, this.engine.getCurrentLayer());
      for (const ent of imported) {
        this.engine.addEntity(ent, false);
      }
      this.appendHistory(`DXF File "${file.name}" imported with ${imported.length} entities.`);
      this.engine.cameraController.zoomExtents();
      dxfInput.value = '';
    });
  }

  openLayerModal() {
    this.renderLayersTable();
    document.getElementById('modal-layers')!.style.display = 'flex';
  }

  private renderLayersTable() {
    const tbody = document.getElementById('layers-table-body')!;
    tbody.innerHTML = this.engine.layers.map(l => `
      <tr>
        <td>${l.id === this.engine.currentLayerId ? '&#9654; Current' : ''}</td>
        <td><b>${l.name}</b></td>
        <td><input type="checkbox" ${l.visible ? 'checked' : ''} data-layer-vis="${l.id}"></td>
        <td><input type="checkbox" ${l.locked ? 'checked' : ''} data-layer-lock="${l.id}"></td>
        <td><span class="acad-color-box" style="background-color: ${l.color}"></span></td>
        <td>${l.linetype}</td>
        <td>${l.lineweight} mm</td>
      </tr>
    `).join('');

    tbody.querySelectorAll('[data-layer-vis]').forEach(cb => {
      cb.addEventListener('change', (e) => {
        const id = (e.currentTarget as HTMLElement).dataset.layerVis;
        const lyr = this.engine.layers.find(l => l.id === id);
        if (lyr) lyr.visible = (e.target as HTMLInputElement).checked;
      });
    });
  }

  openLabGuideModal() {
    const container = document.getElementById('lab-guide-content')!;
    const exercises = LabExercisesManager.getExercises(this.engine.getCurrentLayer());

    container.innerHTML = exercises.map(ex => `
      <div class="lab-card">
        <div class="lab-card-header">
          <div class="lab-title">${ex.title}</div>
          <span class="lab-badge">${ex.year} &bull; ${ex.branch}</span>
        </div>
        <div class="lab-desc">${ex.description}</div>
        <div class="lab-steps">
          <b>AutoCAD Instructions:</b><br>
          ${ex.instructions.map(ins => `<div>${ins}</div>`).join('')}
        </div>
        <button class="acad-primary-btn" data-load-lab="${ex.id}">Load Problem into Workspace</button>
      </div>
    `).join('');

    container.querySelectorAll('[data-load-lab]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).dataset.loadLab;
        if (id) {
          this.loadExercise(id);
          document.getElementById('modal-lab-guide')!.style.display = 'none';
        }
      });
    });

    document.getElementById('modal-lab-guide')!.style.display = 'flex';
  }

  loadExercise(exerciseId: string) {
    const exercises = LabExercisesManager.getExercises(this.engine.getCurrentLayer());
    const ex = exercises.find(e => e.id === exerciseId);
    if (!ex) return;

    this.engine.clearEntities();
    const ents = ex.entities();
    for (const ent of ents) {
      if (ent) this.engine.addEntity(ent as CADEntity, false);
    }

    this.appendHistory(`--------------------------------------------------`);
    this.appendHistory(`Loaded: ${ex.title}`);
    this.appendHistory(ex.description);
    this.appendHistory(`--------------------------------------------------`);

    // If it's a 3D exercise (Lab 4, 5, 6), switch to Isometric Shaded view
    if (ex.id === 'lab-4' || ex.id === 'lab-5' || ex.id === 'lab-6') {
      this.setStandardView('sw_iso');
      this.setVisualStyle('shaded_edges');
      this.ribbon.setTab('solid');
    } else {
      this.setStandardView('top');
      this.setVisualStyle('2d_wireframe');
      this.ribbon.setTab('home');
    }

    this.engine.cameraController.zoomExtents();
  }

  // --- File I/O Exporters ---

  exportDXFFile() {
    const dxfText = DXFManager.exportDXF(this.engine.entities, this.engine.layers);
    const blob = new Blob([dxfText], { type: 'application/dxf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'StudentCAD_Drawing.dxf';
    a.click();
    URL.revokeObjectURL(url);
    this.appendHistory('DXF Drawing exported successfully.');
  }

  exportSTLFile() {
    const stlText = STLExporter.exportSTL(this.engine.entities);
    const blob = new Blob([stlText], { type: 'model/stl' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'StudentCAD_Model.stl';
    a.click();
    URL.revokeObjectURL(url);
    this.appendHistory('3D STL file exported successfully.');
  }

  // --- Global Keyboard Shortcuts ---

  private setupGlobalShortcuts() {
    window.addEventListener('keydown', (e) => {
      // Focus command line on any letter key if not inside input
      const input = document.getElementById('cmd-input') as HTMLInputElement;
      if (document.activeElement !== input && e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
        input.focus();
      }

      // Function keys matching AutoCAD standard
      if (e.key === 'F3') {
        e.preventDefault();
        document.getElementById('toggle-osnap')?.click();
      } else if (e.key === 'F7') {
        e.preventDefault();
        document.getElementById('toggle-grid')?.click();
      } else if (e.key === 'F8') {
        e.preventDefault();
        document.getElementById('toggle-ortho')?.click();
      } else if (e.key === 'F9') {
        e.preventDefault();
        document.getElementById('toggle-snap')?.click();
      } else if (e.key === 'F12') {
        e.preventDefault();
        document.getElementById('toggle-dyn')?.click();
      } else if (e.key === 'Escape') {
        this.cancelActiveCommand();
      }
    });
  }

  private generateId(prefix = 'ent'): string {
    return `${prefix}_${Math.random().toString(36).substr(2, 7)}`;
  }
}

// Start application when DOM is ready or immediately if already loaded
function initStudentCAD() {
  console.log('[Student-CAD] Booting application...');
  try {
    const app = new StudentCADApp();
    (window as any).studentCADApp = app;
    console.log('[Student-CAD] Successfully mounted AutoCAD replica GUI.');

    // Dismiss startup splash loader smoothly
    const loader = document.getElementById('cad-startup-loader');
    if (loader) {
      loader.classList.add('fade-out');
      setTimeout(() => loader.remove(), 400);
    }

    // Trigger window resize to ensure WebGL canvas fits layout
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 50);
  } catch (err) {
    console.error('[Student-CAD] Initialization error:', err);
    const statusEl = document.getElementById('cad-startup-status');
    if (statusEl) {
      statusEl.style.color = '#ff6b6b';
      statusEl.textContent = 'Startup error: ' + ((err as any)?.message || err);
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initStudentCAD);
} else {
  initStudentCAD();
}

