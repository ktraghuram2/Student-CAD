# Student-CAD 🎓📐

An authentic, browser-based **2D & 3D Computer-Aided Design (CAD)** platform engineered to replicate the **AutoCAD interface, ribbon GUI, command line console, tools, and workflows**. Designed specifically for **Diploma and B.Tech engineering students** to practice Engineering Drawing, Machine Graphics, and 3D Solid Modeling directly in the web browser.

---

## 🚀 Live Demo & Getting Started

### Run Locally:
```bash
# Clone the repository
git clone https://github.com/ktraghuram2/Student-CAD.git
cd Student-CAD

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open **`http://localhost:5173/`** in any modern web browser.

---

## 🖥️ AutoCAD Replica Features

### 1. Authentic AutoCAD Dark UI & Ribbon
* **Title Bar & Quick Access Toolbar (QAT)**:
  * Red **"A"** Application Menu button with dropdown options.
  * Quick Access Toolbar: `New`, `Open`, `Save`, `Plot / PDF`, `Undo`, `Redo`, and `Workspace Switcher` (*Drafting & Annotation* vs. *3D Modeling*).
  * Window Title: `Student-CAD 2025 - [Drawing1.dwg]`.
* **Ribbon Tabs & Panels**:
  * **Home**: Draw (Line, Polyline, Circle, Arc, Rectangle, Polygon, Hatch), Modify (Move, Copy, Rotate, Trim, Extend, Fillet, Chamfer, Offset, Mirror, Erase), Annotation (Linear Dimension, Text), Layers, Utilities (Distance Measure).
  * **Solid (3D Modeling)**: Primitives (Box, Cylinder, Sphere, Cone), 2D-to-3D Solid Operations (Extrude, Revolve), Boolean CSG (Union, Subtract, Intersect).
  * **Annotate**: Linear Dimensions, Text, Centerlines, Distance Measurement.
  * **View**: Standard Orthographic Views (Top, Front, Right, Bottom, Left) & Isometric Views (SW Iso, SE Iso, NE Iso), Visual Styles (`2D Wireframe`, `Shaded with Edges`, `Conceptual`, `Realistic`, `X-Ray`).
  * **Output**: Export AutoCAD **DXF**, Export **STL** (for 3D printing), **Plot / Print to PDF**, and Import DXF.
  * **🎓 Lab Exercises**: 1-click loading of pre-configured Diploma and B.Tech syllabus engineering drawing problems.

### 2. Interactive CAD Viewport
* **Dynamic Grid**: Infinite major and minor subdivision grid lines with Red X and Green Y origin axes.
* **Interactive ViewCube & Compass**:
  * 3D orientable cube in the top-right corner with clickable faces (`TOP`, `FRONT`, `RIGHT`, `LEFT`, `BACK`, `BOTTOM`), corners (Isometric `SW`, `SE`), Home button, and Compass (`N`, `S`, `E`, `W`).
* **UCS Coordinate Icon**: Displays the AutoCAD coordinate tripod (X red, Y green, Z blue) with origin box and `'W'` (World Coordinate System) indicator.
* **Precision Object Snap (OSNAP)**:
  * Snapping for: `Endpoint` (green square), `Midpoint` (green triangle), `Center` (green circle), `Quadrant` (green diamond), `Intersection` (green X), and `Ortho [F8]` lock (0°, 90°, 180°, 270°).
* **Dynamic Input (DYN)**: Floating coordinate and distance/angle tooltip following the cursor in real-time (`dist < angle°`).

### 3. AutoCAD Command Line Console
* Docked at the bottom with prompt: `Command: Type a command`.
* Multi-line scrollable command history.
* Autocomplete suggestions popup as you type.
* Standard AutoCAD shortcut aliases:
  * `L` $\rightarrow$ `LINE`
  * `PL` $\rightarrow$ `PLINE`
  * `C` $\rightarrow$ `CIRCLE`
  * `REC` $\rightarrow$ `RECTANGLE`
  * `A` $\rightarrow$ `ARC`
  * `H` $\rightarrow$ `HATCH`
  * `DIM` / `D` $\rightarrow$ `DIMLINEAR`
  * `BOX` $\rightarrow$ `BOX` (3D Solid)
  * `CYL` $\rightarrow$ `CYLINDER` (3D Solid)
  * `EXT` $\rightarrow$ `EXTRUDE` (2D shape to 3D solid)
  * `REV` $\rightarrow$ `REVOLVE` (Revolve profile 360°)
  * `SU` $\rightarrow$ `SUBTRACT` (CSG Boolean hole cutter)
  * `UNI` $\rightarrow$ `UNION` (CSG Boolean join)
  * `Z` $\rightarrow$ `ZOOM` (`E` for Extents)
  * `P` $\rightarrow$ `PAN`
  * `3DO` $\rightarrow$ `ORBIT` (3D Free Orbit)

### 4. Bottom Status Bar
* `Model`, `Layout1`, `Layout2` paper space tabs.
* Real-time cursor coordinates readout (`X, Y, Z`).
* Functional toggle buttons with hotkeys: `GRID [F7]`, `SNAP [F9]`, `ORTHO [F8]`, `POLAR [F10]`, `OSNAP [F3]`, `DYN [F12]`, and `LWT`.

---

## 🎓 Diploma & B.Tech Syllabus Lab Exercises

Click on the **"🎓 Lab Exercises"** ribbon tab to load any of the 6 pre-configured engineering problems:

1. **Lab 1: Orthographic Projections of V-Block** (*First-angle projection: Front View, Top View with projection lines, slot, and dimensions*).
2. **Lab 2: Shaft Support Bearing Bracket** (*2D machine drawing: base plate, Ø12 mounting holes, upright web, and Ø40 central housing*).
3. **Lab 3: Flanged Pipe Joint with 45° Sectional Hatching** (*Sectional elevation of cast iron pipe with fluid bore, bolt PCD, and ANSI31 cross-hatching*).
4. **Lab 4: 3D Slotted Bearing Block** (*3D solid block with through-bore and top key slot cut via `SUBTRACT` boolean*).
5. **Lab 5: 3D Stepped V-Groove Pulley** (*Rotational solid created by revolving a 2D profile 360° around shaft axis*).
6. **Lab 6: Flanged Shaft Coupling Assembly** (*Flanged coupling hub with central shaft bore, 6x6 mm keyway, and 4 bolt holes on PCD*).

---

## 🛠️ Technology Stack
* **Three.js**: 3D and 2D WebGL rendering, lighting, and camera management.
* **three-bvh-csg**: High-performance Constructive Solid Geometry (CSG) for real-time solid booleans (`UNION`, `SUBTRACT`, `INTERSECT`).
* **Vite + TypeScript**: Rapid build toolchain and strict type safety.
* **Pure CSS**: Pixel-accurate AutoCAD dark UI theme without bulky external CSS frameworks.

---

## 📄 License
MIT License. Created for students, polytechnic institutions, and engineering universities.
