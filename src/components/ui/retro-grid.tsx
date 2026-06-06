import { useEffect, useRef } from "react";

interface RetroGridProps {
  gridColor?: string;
  showScanlines?: boolean;
  glowEffect?: boolean;
  className?: string;
}

export function RetroGrid({
  gridColor = "#F87B54",
  showScanlines = true,
  glowEffect = true,
  className = "",
}: RetroGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) }
        : { r: 248, g: 123, b: 84 };
    };

    const cellWidth = 120;
    const cellDepth = 80;
    const numCellsWide = 16;
    const numCellsDeep = 20;
    const cameraX = 0;
    const cameraY = 60;
    const cameraZ = 400;
    const focalLength = 500;
    let offset = 0;
    const speed = 1.5;
    let rafId: number;

    const project3DTo2D = (x: number, y: number, z: number) => {
      const relX = x - cameraX;
      const relY = y - cameraY;
      const relZ = z - cameraZ;
      if (relZ <= 10) return null;
      const scale = focalLength / relZ;
      return {
        x: canvas.width / 2 + relX * scale,
        y: canvas.height * 0.5 - relY * scale,
        scale,
        z: relZ,
      };
    };

    const drawCell = (x: number, z: number, zOffset: number) => {
      const actualZ = z - zOffset;
      if (actualZ < -cellDepth || actualZ > numCellsDeep * cellDepth) return;
      const tl = project3DTo2D(x - cellWidth / 2, 0, actualZ);
      const tr = project3DTo2D(x + cellWidth / 2, 0, actualZ);
      const bl = project3DTo2D(x - cellWidth / 2, 0, actualZ + cellDepth);
      const br = project3DTo2D(x + cellWidth / 2, 0, actualZ + cellDepth);
      if (!tl || !tr || !bl || !br || actualZ < 0) return;
      const distanceFactor = Math.min(1, actualZ / (numCellsDeep * cellDepth));
      const alpha = Math.max(0.3, 1 - distanceFactor * 0.7);
      const lineWidth = Math.max(1, 2.5 * (1 - distanceFactor * 0.5));
      if (glowEffect) { ctx.shadowBlur = 10 * (1 - distanceFactor); ctx.shadowColor = gridColor; }
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = gridColor;
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.moveTo(bl.x, bl.y);
      ctx.lineTo(br.x, br.y);
      ctx.lineTo(tr.x, tr.y);
      ctx.lineTo(tl.x, tl.y);
      ctx.closePath();
      ctx.stroke();
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
    };

    const drawScanlines = () => {
      if (!showScanlines) return;
      ctx.globalAlpha = 0.08;
      ctx.fillStyle = "#000000";
      for (let y = 0; y < canvas.height; y += 4) ctx.fillRect(0, y, canvas.width, 2);
      ctx.globalAlpha = 1;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { r, g, b } = hexToRgb(gridColor);

      const sky = ctx.createLinearGradient(0, 0, 0, canvas.height * 0.55);
      sky.addColorStop(0,    `rgba(${r * 0.04}, ${g * 0.04}, ${b * 0.10}, 1)`);
      sky.addColorStop(0.35, `rgba(${r * 0.08}, ${g * 0.06}, ${b * 0.16}, 1)`);
      sky.addColorStop(0.6,  `rgba(${r * 0.18}, ${g * 0.12}, ${b * 0.22}, 1)`);
      sky.addColorStop(0.82, `rgba(${r * 0.38}, ${g * 0.22}, ${b * 0.30}, 1)`);
      sky.addColorStop(1,    `rgba(${r * 0.60}, ${g * 0.35}, ${b * 0.38}, 1)`);
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, canvas.width, canvas.height * 0.55);

      const ground = ctx.createLinearGradient(0, canvas.height * 0.55, 0, canvas.height);
      ground.addColorStop(0,   `rgba(${r * 0.08}, ${g * 0.05}, ${b * 0.08}, 1)`);
      ground.addColorStop(0.4, `rgba(${r * 0.04}, ${g * 0.02}, ${b * 0.04}, 1)`);
      ground.addColorStop(1,   "#000000");
      ctx.fillStyle = ground;
      ctx.fillRect(0, canvas.height * 0.55, canvas.width, canvas.height * 0.45);

      offset += speed;
      if (offset >= cellDepth) offset = 0;

      for (let row = -5; row < numCellsDeep + 5; row++) {
        const z = row * cellDepth;
        for (let col = -Math.floor(numCellsWide / 2); col <= Math.floor(numCellsWide / 2); col++) {
          drawCell(col * cellWidth, z, offset);
        }
      }

      drawScanlines();

      const vignette = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, canvas.height * 0.3,
        canvas.width / 2, canvas.height / 2, canvas.height * 0.85
      );
      vignette.addColorStop(0, "rgba(0,0,0,0)");
      vignette.addColorStop(1, "rgba(0,0,0,0.55)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      rafId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(rafId);
    };
  }, [gridColor, showScanlines, glowEffect]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: "block", width: "100%", height: "100%", background: "#000" }}
    />
  );
}
