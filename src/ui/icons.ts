// AutoCAD Vector Icons Set (Pixel-crisp SVG strings)

export const ICONS: Record<string, string> = {
  // QAT & File
  new: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>`,
  open: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
  save: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>`,
  plot: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>`,
  undo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>`,
  redo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`,

  // 2D Draw
  line: `<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><line x1="4" y1="20" x2="20" y2="4"/><rect x="2" y="18" width="4" height="4" fill="#0084ff"/><rect x="18" y="2" width="4" height="4" fill="#0084ff"/></svg>`,
  polyline: `<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><polyline points="3 19 9 7 15 15 21 5"/><circle cx="3" cy="19" r="2" fill="#0084ff"/><circle cx="9" cy="7" r="2" fill="#0084ff"/><circle cx="15" cy="15" r="2" fill="#0084ff"/><circle cx="21" cy="5" r="2" fill="#0084ff"/></svg>`,
  circle: `<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="1.5" fill="#e53935"/><line x1="12" y1="12" x2="21" y2="12" stroke="#e53935" stroke-dasharray="2,2"/></svg>`,
  arc: `<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><path d="M4 18 A 12 12 0 0 1 20 18"/><circle cx="4" cy="18" r="2" fill="#0084ff"/><circle cx="12" cy="6" r="2" fill="#0084ff"/><circle cx="20" cy="18" r="2" fill="#0084ff"/></svg>`,
  rectangle: `<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><rect x="4" y="5" width="16" height="14"/><circle cx="4" cy="5" r="2" fill="#0084ff"/><circle cx="20" cy="19" r="2" fill="#0084ff"/></svg>`,
  polygon: `<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><polygon points="12 3 21 9 18 19 6 19 3 9"/></svg>`,
  ellipse: `<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><ellipse cx="12" cy="12" rx="10" ry="6"/></svg>`,
  hatch: `<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><rect x="3" y="3" width="18" height="18"/><line x1="3" y1="9" x2="9" y2="3"/><line x1="3" y1="15" x2="15" y2="3"/><line x1="3" y1="21" x2="21" y2="3"/><line x1="9" y1="21" x2="21" y2="9"/><line x1="15" y1="21" x2="21" y2="15"/></svg>`,

  // Modify
  move: `<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><polyline points="5 9 2 12 5 15"/><polyline points="9 5 12 2 15 5"/><polyline points="15 19 12 22 9 19"/><polyline points="19 9 22 12 19 15"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/></svg>`,
  copy: `<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><rect x="9" y="9" width="12" height="12" rx="1"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
  rotate: `<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><path d="M21.5 2v6h-6"/><path d="M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>`,
  trim: `<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>`,
  extend: `<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><line x1="20" y1="2" x2="20" y2="22" stroke="#0084ff" stroke-width="2.5"/><line x1="3" y1="12" x2="14" y2="12"/><polyline points="11 9 14 12 11 15"/></svg>`,
  fillet: `<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><path d="M4 20 L 4 14 A 8 8 0 0 1 12 6 L 20 6"/></svg>`,
  chamfer: `<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><path d="M4 20 L 4 12 L 12 4 L 20 4"/></svg>`,
  erase: `<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>`,
  offset: `<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="9" stroke-dasharray="3,3"/></svg>`,
  mirror: `<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><line x1="12" y1="2" x2="12" y2="22" stroke="#0084ff" stroke-dasharray="2,2"/><polygon points="8 6 3 18 8 18" fill="rgba(255,255,255,0.2)"/><polygon points="16 6 21 18 16 18" fill="rgba(255,255,255,0.4)"/></svg>`,
  scale: `<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><rect x="3" y="11" width="10" height="10"/><rect x="9" y="3" width="12" height="12" stroke-dasharray="2,2"/><polyline points="14 3 21 3 21 10"/><line x1="13" y1="11" x2="21" y2="3"/></svg>`,

  // Annotation
  dimension: `<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="2" y2="17"/><line x1="22" y1="7" x2="22" y2="17"/><polygon points="5 10 2 12 5 14" fill="#e1e7ec"/><polygon points="19 10 22 12 19 14" fill="#e1e7ec"/><rect x="9" y="8" width="6" height="8" fill="#212830"/><text x="10" y="14" font-size="6" fill="#0084ff" font-family="sans-serif">50</text></svg>`,
  text: `<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><polyline points="4 7 4 4 20 4 20 7"/><line x1="12" y1="4" x2="12" y2="20"/><line x1="9" y1="20" x2="15" y2="20"/></svg>`,
  layers: `<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
  measure: `<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,

  // 3D Solids
  box: `<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="1.8"><path d="M12 2 L21 7 L12 12 L3 7 Z"/><path d="M3 7 L3 17 L12 22 L12 12"/><path d="M21 7 L21 17 L12 22"/></svg>`,
  cylinder: `<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="1.8"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6 L4 18 A 8 3 0 0 0 20 18 L20 6"/><path d="M4 18 A 8 3 0 0 1 20 18" stroke-dasharray="2,2"/></svg>`,
  cone: `<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="1.8"><ellipse cx="12" cy="19" rx="8" ry="3"/><path d="M4 19 L12 3 L20 19"/></svg>`,
  sphere: `<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="9" ry="3"/></svg>`,
  torus: `<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="1.8"><ellipse cx="12" cy="12" rx="9" ry="5"/><ellipse cx="12" cy="12" rx="4" ry="2"/></svg>`,
  wedge: `<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="1.8"><path d="M3 18 L19 18 L21 12 L5 12 Z"/><path d="M3 18 L5 6 L21 12"/></svg>`,

  // 3D Solid Operations & Booleans
  extrude: `<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="1.8"><rect x="4" y="14" width="12" height="6"/><polyline points="16 14 20 9 20 15 16 20"/><polyline points="4 14 8 9 20 9"/><line x1="8" y1="9" x2="8" y2="15"/></svg>`,
  revolve: `<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="1.8"><line x1="12" y1="2" x2="12" y2="22" stroke="#0084ff" stroke-dasharray="2,2"/><path d="M12 7 C 18 7, 21 10, 21 12 C 21 14, 18 17, 12 17"/><polygon points="12 15 9 17 12 19" fill="#e1e7ec"/></svg>`,
  union: `<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="1.8"><circle cx="9" cy="12" r="6" fill="rgba(0,132,255,0.3)"/><circle cx="15" cy="12" r="6" fill="rgba(0,132,255,0.3)"/><path d="M9 6 A 6 6 0 0 0 15 6 A 6 6 0 0 1 15 18 A 6 6 0 0 1 9 18 A 6 6 0 0 1 9 6" stroke="#0084ff" stroke-width="2"/></svg>`,
  subtract: `<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="1.8"><circle cx="9" cy="12" r="6" fill="rgba(0,132,255,0.4)" stroke="#0084ff" stroke-width="2"/><circle cx="15" cy="12" r="6" stroke="#e53935" stroke-dasharray="2,2"/></svg>`,
  intersect: `<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="1.8"><circle cx="9" cy="12" r="6"/><circle cx="15" cy="12" r="6"/><path d="M12 7.2 A 6 6 0 0 1 12 16.8 A 6 6 0 0 1 12 7.2" fill="#0084ff"/></svg>`,

  // Views & Navigation
  orbit: `<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><circle cx="12" cy="12" r="9" stroke-dasharray="3,3"/><ellipse cx="12" cy="12" rx="9" ry="4"/><circle cx="12" cy="12" r="2" fill="#0084ff"/></svg>`,
  pan: `<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>`,
  zoomExtents: `<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16" y2="16"/><polyline points="8 11 11 8 14 11"/><polyline points="8 11 11 14 14 11"/></svg>`,
  homeView: `<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,

  // Status Bar Toggles
  grid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="3" x2="21" y2="3"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="3" y1="21" x2="21" y2="21"/><line x1="3" y1="3" x2="3" y2="21"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="21" y1="3" x2="21" y2="21"/></svg>`,
  snap: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="5" cy="5" r="1.5" fill="currentColor"/><circle cx="12" cy="5" r="1.5" fill="currentColor"/><circle cx="19" cy="5" r="1.5" fill="currentColor"/><circle cx="5" cy="12" r="1.5" fill="currentColor"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/><circle cx="19" cy="12" r="1.5" fill="currentColor"/><circle cx="5" cy="19" r="1.5" fill="currentColor"/><circle cx="12" cy="19" r="1.5" fill="currentColor"/><circle cx="19" cy="19" r="1.5" fill="currentColor"/></svg>`,
  ortho: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="5 5 5 19 19 19"/><rect x="5" y="15" width="4" height="4" fill="none"/></svg>`,
  polar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><line x1="12" y1="12" x2="19" y2="5"/><path d="M16 12 A 4 4 0 0 0 14.8 9.2"/></svg>`,
  osnap: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="6" width="12" height="12"/><circle cx="12" cy="12" r="2" fill="currentColor"/></svg>`,
  dyn: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="6" width="18" height="12" rx="2"/><line x1="7" y1="12" x2="11" y2="12"/><polyline points="14 10 17 12 14 14"/></svg>`,
  lab: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 2v7.31"/><path d="M14 2v7.31"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><path d="M5.52 16h12.96"/></svg>`
};
