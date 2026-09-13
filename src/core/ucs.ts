import * as THREE from 'three';

export class UCSIcon {
  private container: HTMLElement;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  constructor(container: HTMLElement) {
    this.container = container;
    this.canvas = document.createElement('canvas');
    this.canvas.width = 96;
    this.canvas.height = 96;
    this.canvas.style.width = '48px';
    this.canvas.style.height = '48px';
    this.container.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d')!;
    this.draw(new THREE.Quaternion());
  }

  draw(cameraQuaternion: THREE.Quaternion) {
    const ctx = this.ctx;
    const size = 96;
    ctx.clearRect(0, 0, size, size);

    // Origin in 2D canvas
    const ox = 24;
    const oy = size - 24;
    const axisLen = 42;

    // Inverse camera rotation to map world axes to screen projection
    const invQ = cameraQuaternion.clone().invert();

    // World axes
    const xAxis = new THREE.Vector3(1, 0, 0).applyQuaternion(invQ);
    const yAxis = new THREE.Vector3(0, 1, 0).applyQuaternion(invQ);
    const zAxis = new THREE.Vector3(0, 0, 1).applyQuaternion(invQ);

    const drawAxis = (vec: THREE.Vector3, color: string, label: string) => {
      const endX = ox + vec.x * axisLen;
      const endY = oy - vec.y * axisLen;

      ctx.beginPath();
      ctx.moveTo(ox, oy);
      ctx.lineTo(endX, endY);
      ctx.strokeStyle = color;
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Axis label
      ctx.fillStyle = color;
      ctx.font = 'bold 12px Consolas, monospace';
      ctx.fillText(label, endX + (vec.x >= 0 ? 4 : -10), endY + (vec.y >= 0 ? -4 : 10));
    };

    // Draw Z, X, Y
    drawAxis(zAxis, '#0084ff', 'Z');
    drawAxis(xAxis, '#e53935', 'X');
    drawAxis(yAxis, '#00e676', 'Y');

    // Central origin box with 'W' (World Coordinate System)
    ctx.fillStyle = '#1a1d24';
    ctx.fillRect(ox - 5, oy - 5, 10, 10);
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1;
    ctx.strokeRect(ox - 5, oy - 5, 10, 10);

    ctx.fillStyle = '#ffffff';
    ctx.font = '8px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('W', ox, oy);
  }
}
