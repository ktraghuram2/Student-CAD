import { ICONS } from './icons';

export interface RibbonCallbacks {
  onToolSelect: (toolName: string) => void;
  onLayerSelect: (layerId: string) => void;
  onLayerProperties: () => void;
  onViewSelect: (view: string) => void;
  onVisualStyleSelect: (style: string) => void;
  onExerciseSelect: (exerciseId: string) => void;
  onOpenLabGuide: () => void;
}

export class RibbonUI {
  private container: HTMLElement;
  private callbacks: RibbonCallbacks;
  private activeTab = 'home';

  constructor(container: HTMLElement, callbacks: RibbonCallbacks) {
    this.container = container;
    this.callbacks = callbacks;
    this.render();
  }

  setTab(tabId: string) {
    this.activeTab = tabId;
    this.render();
  }

  render() {
    this.container.innerHTML = `
      <div class="acad-ribbon-tabs">
        <div class="acad-ribbon-tab ${this.activeTab === 'home' ? 'active' : ''}" data-tab="home">Home</div>
        <div class="acad-ribbon-tab ${this.activeTab === 'solid' ? 'active' : ''}" data-tab="solid">Solid (3D Modeling)</div>
        <div class="acad-ribbon-tab ${this.activeTab === 'annotate' ? 'active' : ''}" data-tab="annotate">Annotate</div>
        <div class="acad-ribbon-tab ${this.activeTab === 'view' ? 'active' : ''}" data-tab="view">View</div>
        <div class="acad-ribbon-tab ${this.activeTab === 'output' ? 'active' : ''}" data-tab="output">Output</div>
        <div class="acad-ribbon-tab ${this.activeTab === 'lab' ? 'active' : ''}" data-tab="lab" style="color: #70d8ff; font-weight: 600;">
          🎓 Lab Exercises (Diploma/B.Tech)
        </div>
      </div>
      <div class="acad-ribbon-content">
        ${this.renderActiveTabContent()}
      </div>
    `;

    this.bindEvents();
  }

  private renderActiveTabContent(): string {
    switch (this.activeTab) {
      case 'home':
        return `
          <!-- Draw Panel -->
          <div class="acad-panel">
            <div class="acad-panel-tools">
              <button class="acad-big-btn" data-tool="LINE" title="LINE (L): Creates straight line segments">
                ${ICONS.line}
                <span>Line</span>
              </button>
              <button class="acad-big-btn" data-tool="PLINE" title="PLINE (PL): Creates 2D polyline">
                ${ICONS.polyline}
                <span>Polyline</span>
              </button>
              <button class="acad-big-btn" data-tool="CIRCLE" title="CIRCLE (C): Creates circle with center & radius">
                ${ICONS.circle}
                <span>Circle</span>
              </button>
              <button class="acad-big-btn" data-tool="ARC" title="ARC (A): Creates 3-point arc">
                ${ICONS.arc}
                <span>Arc</span>
              </button>
              <div class="acad-btn-col">
                <button class="acad-small-btn" data-tool="RECTANGLE" title="RECTANGLE (REC): Creates rectangular polyline">
                  ${ICONS.rectangle} <span>Rectangle</span>
                </button>
                <button class="acad-small-btn" data-tool="POLYGON" title="POLYGON (POL): Creates regular polygon">
                  ${ICONS.polygon} <span>Polygon</span>
                </button>
                <button class="acad-small-btn" data-tool="HATCH" title="HATCH (H): Fills enclosed region with hatching">
                  ${ICONS.hatch} <span>Hatch</span>
                </button>
              </div>
            </div>
            <div class="acad-panel-title">Draw</div>
          </div>

          <!-- Modify Panel -->
          <div class="acad-panel">
            <div class="acad-panel-tools">
              <div class="acad-btn-col">
                <button class="acad-small-btn" data-tool="MOVE" title="MOVE (M)">${ICONS.move} <span>Move</span></button>
                <button class="acad-small-btn" data-tool="COPY" title="COPY (CO)">${ICONS.copy} <span>Copy</span></button>
                <button class="acad-small-btn" data-tool="ROTATE" title="ROTATE (RO)">${ICONS.rotate} <span>Rotate</span></button>
              </div>
              <div class="acad-btn-col">
                <button class="acad-small-btn" data-tool="TRIM" title="TRIM (TR)">${ICONS.trim} <span>Trim</span></button>
                <button class="acad-small-btn" data-tool="FILLET" title="FILLET (F)">${ICONS.fillet} <span>Fillet</span></button>
                <button class="acad-small-btn" data-tool="CHAMFER" title="CHAMFER (CHA)">${ICONS.chamfer} <span>Chamfer</span></button>
              </div>
              <div class="acad-btn-col">
                <button class="acad-small-btn" data-tool="OFFSET" title="OFFSET (O)">${ICONS.offset} <span>Offset</span></button>
                <button class="acad-small-btn" data-tool="MIRROR" title="MIRROR (MI)">${ICONS.mirror} <span>Mirror</span></button>
                <button class="acad-small-btn" data-tool="ERASE" title="ERASE (E)">${ICONS.erase} <span>Erase</span></button>
              </div>
            </div>
            <div class="acad-panel-title">Modify</div>
          </div>

          <!-- Annotation Panel -->
          <div class="acad-panel">
            <div class="acad-panel-tools">
              <button class="acad-big-btn" data-tool="DIMLINEAR" title="DIMLINEAR (DIM): Creates linear engineering dimension">
                ${ICONS.dimension}
                <span>Dimension</span>
              </button>
              <button class="acad-big-btn" data-tool="TEXT" title="TEXT (T): Creates annotation text">
                ${ICONS.text}
                <span>Text</span>
              </button>
            </div>
            <div class="acad-panel-title">Annotation</div>
          </div>

          <!-- Layers Panel -->
          <div class="acad-panel">
            <div class="acad-panel-tools">
              <div class="acad-layer-panel-control">
                <button class="acad-small-btn" id="btn-layer-props" title="Layer Properties Manager (LA)">
                  ${ICONS.layers} <span>Layer Properties</span>
                </button>
                <div class="acad-layer-select-row">
                  <select class="acad-layer-select" id="ribbon-layer-select">
                    <option value="0">0 (White / Continuous)</option>
                    <option value="center">Centerlines (Red)</option>
                    <option value="dims">Dimensions (Blue)</option>
                    <option value="hidden">Hidden (Yellow / Dashed)</option>
                    <option value="solids">3D Solids (Cyan)</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="acad-panel-title">Layers</div>
          </div>

          <!-- Utilities Panel -->
          <div class="acad-panel">
            <div class="acad-panel-tools">
              <button class="acad-big-btn" data-tool="DIST" title="DIST (DI): Measure distance">
                ${ICONS.measure}
                <span>Measure</span>
              </button>
            </div>
            <div class="acad-panel-title">Utilities</div>
          </div>
        `;

      case 'solid':
        return `
          <!-- 3D Primitives -->
          <div class="acad-panel">
            <div class="acad-panel-tools">
              <button class="acad-big-btn" data-tool="BOX" title="BOX: Creates 3D solid box">
                ${ICONS.box}
                <span>Box</span>
              </button>
              <button class="acad-big-btn" data-tool="CYLINDER" title="CYLINDER (CYL): Creates 3D solid cylinder">
                ${ICONS.cylinder}
                <span>Cylinder</span>
              </button>
              <button class="acad-big-btn" data-tool="SPHERE" title="SPHERE (SPH): Creates 3D solid sphere">
                ${ICONS.sphere}
                <span>Sphere</span>
              </button>
              <button class="acad-big-btn" data-tool="CONE" title="CONE: Creates 3D solid cone">
                ${ICONS.cone}
                <span>Cone</span>
              </button>
            </div>
            <div class="acad-panel-title">Primitives</div>
          </div>

          <!-- Solid Create -->
          <div class="acad-panel">
            <div class="acad-panel-tools">
              <button class="acad-big-btn" data-tool="EXTRUDE" title="EXTRUDE (EXT): Extrudes 2D shape into 3D solid">
                ${ICONS.extrude}
                <span>Extrude</span>
              </button>
              <button class="acad-big-btn" data-tool="REVOLVE" title="REVOLVE (REV): Revolves 2D profile around axis">
                ${ICONS.revolve}
                <span>Revolve</span>
              </button>
            </div>
            <div class="acad-panel-title">Solid Modeling</div>
          </div>

          <!-- CSG Booleans -->
          <div class="acad-panel">
            <div class="acad-panel-tools">
              <button class="acad-big-btn" data-tool="UNION" title="UNION (UNI): Combines solids into one">
                ${ICONS.union}
                <span>Union</span>
              </button>
              <button class="acad-big-btn" data-tool="SUBTRACT" title="SUBTRACT (SU): Cuts hole or subtracts solid">
                ${ICONS.subtract}
                <span>Subtract</span>
              </button>
              <button class="acad-big-btn" data-tool="INTERSECT" title="INTERSECT (IN): Keeps overlapping volume">
                ${ICONS.intersect}
                <span>Intersect</span>
              </button>
            </div>
            <div class="acad-panel-title">Boolean (CSG)</div>
          </div>
        `;

      case 'annotate':
        return `
          <div class="acad-panel">
            <div class="acad-panel-tools">
              <button class="acad-big-btn" data-tool="DIMLINEAR">${ICONS.dimension}<span>Linear Dim</span></button>
              <button class="acad-big-btn" data-tool="TEXT">${ICONS.text}<span>Text</span></button>
              <button class="acad-big-btn" data-tool="DIST">${ICONS.measure}<span>Distance</span></button>
            </div>
            <div class="acad-panel-title">Dimensions & Text</div>
          </div>
        `;

      case 'view':
        return `
          <!-- Standard Views -->
          <div class="acad-panel">
            <div class="acad-panel-tools">
              <div class="acad-btn-col">
                <button class="acad-small-btn" data-view="top">Top (2D)</button>
                <button class="acad-small-btn" data-view="front">Front</button>
                <button class="acad-small-btn" data-view="right">Right</button>
              </div>
              <div class="acad-btn-col">
                <button class="acad-small-btn" data-view="sw_iso">SW Isometric</button>
                <button class="acad-small-btn" data-view="se_iso">SE Isometric</button>
                <button class="acad-small-btn" data-view="ne_iso">NE Isometric</button>
              </div>
            </div>
            <div class="acad-panel-title">Standard Views</div>
          </div>

          <!-- Visual Styles -->
          <div class="acad-panel">
            <div class="acad-panel-tools">
              <div class="acad-btn-col">
                <button class="acad-small-btn" data-style="2d_wireframe">2D Wireframe</button>
                <button class="acad-small-btn" data-style="shaded_edges">Shaded with Edges</button>
                <button class="acad-small-btn" data-style="conceptual">Conceptual</button>
              </div>
              <div class="acad-btn-col">
                <button class="acad-small-btn" data-style="realistic">Realistic</button>
                <button class="acad-small-btn" data-style="xray">X-Ray</button>
              </div>
            </div>
            <div class="acad-panel-title">Visual Styles</div>
          </div>

          <!-- Navigation -->
          <div class="acad-panel">
            <div class="acad-panel-tools">
              <button class="acad-big-btn" data-tool="ZOOM_EXTENTS">${ICONS.zoomExtents}<span>Zoom Extents</span></button>
              <button class="acad-big-btn" data-tool="ORBIT">${ICONS.orbit}<span>3D Orbit</span></button>
              <button class="acad-big-btn" data-tool="PAN">${ICONS.pan}<span>Pan</span></button>
            </div>
            <div class="acad-panel-title">Navigate</div>
          </div>
        `;

      case 'output':
        return `
          <div class="acad-panel">
            <div class="acad-panel-tools">
              <button class="acad-big-btn" data-tool="EXPORTDXF" title="Export AutoCAD DXF file">
                ${ICONS.save}
                <span>Export DXF</span>
              </button>
              <button class="acad-big-btn" data-tool="EXPORTSTL" title="Export 3D STL file for 3D Printing">
                ${ICONS.box}
                <span>Export STL</span>
              </button>
              <button class="acad-big-btn" data-tool="PLOT" title="Plot / Print Drawing Sheet to PDF">
                ${ICONS.plot}
                <span>Plot / PDF</span>
              </button>
              <button class="acad-big-btn" data-tool="IMPORTDXF" title="Open / Import DXF file">
                ${ICONS.open}
                <span>Import DXF</span>
              </button>
            </div>
            <div class="acad-panel-title">Export / Import</div>
          </div>
        `;

      case 'lab':
        return `
          <div class="acad-panel">
            <div class="acad-panel-tools">
              <button class="acad-big-btn" id="btn-open-lab-guide" style="border-color: #0084ff; background: rgba(0,132,255,0.15);">
                ${ICONS.lab}
                <span>Lab Manual</span>
              </button>
            </div>
            <div class="acad-panel-title">Syllabus Guide</div>
          </div>

          <div class="acad-panel">
            <div class="acad-panel-tools">
              <div class="acad-btn-col">
                <button class="acad-small-btn" data-lab="lab-1">Lab 1: V-Block Orthographic</button>
                <button class="acad-small-btn" data-lab="lab-2">Lab 2: Shaft Support Bracket</button>
                <button class="acad-small-btn" data-lab="lab-3">Lab 3: Flanged Pipe Hatching</button>
              </div>
              <div class="acad-btn-col">
                <button class="acad-small-btn" data-lab="lab-4">Lab 4: 3D Slotted Block (CSG)</button>
                <button class="acad-small-btn" data-lab="lab-5">Lab 5: 3D Stepped Pulley (Revolve)</button>
                <button class="acad-small-btn" data-lab="lab-6">Lab 6: Flanged Coupling Hub</button>
              </div>
            </div>
            <div class="acad-panel-title">Diploma / B.Tech Lab Problems</div>
          </div>
        `;

      default:
        return '';
    }
  }

  private bindEvents() {
    // Tabs
    this.container.querySelectorAll('.acad-ribbon-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        const tabId = (e.currentTarget as HTMLElement).dataset.tab;
        if (tabId) this.setTab(tabId);
      });
    });

    // Tool Buttons
    this.container.querySelectorAll('[data-tool]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tool = (e.currentTarget as HTMLElement).dataset.tool;
        if (tool) this.callbacks.onToolSelect(tool);
      });
    });

    // Standard Views
    this.container.querySelectorAll('[data-view]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const view = (e.currentTarget as HTMLElement).dataset.view;
        if (view) this.callbacks.onViewSelect(view);
      });
    });

    // Visual Styles
    this.container.querySelectorAll('[data-style]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const style = (e.currentTarget as HTMLElement).dataset.style;
        if (style) this.callbacks.onVisualStyleSelect(style);
      });
    });

    // Lab Exercises
    this.container.querySelectorAll('[data-lab]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const labId = (e.currentTarget as HTMLElement).dataset.lab;
        if (labId) this.callbacks.onExerciseSelect(labId);
      });
    });

    // Lab Guide button
    const labGuideBtn = this.container.querySelector('#btn-open-lab-guide');
    if (labGuideBtn) {
      labGuideBtn.addEventListener('click', () => this.callbacks.onOpenLabGuide());
    }

    // Layer Props Button
    const layerPropsBtn = this.container.querySelector('#btn-layer-props');
    if (layerPropsBtn) {
      layerPropsBtn.addEventListener('click', () => this.callbacks.onLayerProperties());
    }

    // Layer Select
    const layerSelect = this.container.querySelector('#ribbon-layer-select') as HTMLSelectElement;
    if (layerSelect) {
      layerSelect.addEventListener('change', () => this.callbacks.onLayerSelect(layerSelect.value));
    }
  }
}
