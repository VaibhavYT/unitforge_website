"use client";

import { useEffect, useRef } from "react";

interface SilkProps {
  speed?: number;
  scale?: number;
  color?: string;
  noiseIntensity?: number;
  rotation?: number;
  className?: string;
}

export function Silk({
  speed = 7.4,
  scale = 1.5,
  color = "#3B82F6",
  noiseIntensity = 1.5,
  rotation = 0,
  className = "",
}: SilkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = canvas.width;
    let height = canvas.height;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        width = parent.clientWidth;
        height = parent.clientHeight;
        canvas.width = width;
        canvas.height = height;
      }
    };
    window.addEventListener("resize", resize);
    resize();

    let animationFrameId: number;
    let time = 0;
    
    // We maintain a set of lines
    const linesCount = 70;

    const draw = () => {
      time += speed * 0.001;
      
      // Clear with very subtle black fade
      ctx.fillStyle = "rgba(8, 8, 8, 0.08)";
      ctx.fillRect(0, 0, width, height);

      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.scale(scale, scale);
      
      ctx.lineWidth = 1;
      
      // Hex to RGB for the color string 
      // Assuming color is a hex like #3B82F6
      let r = 59, g = 130, b = 246; // default blue
      if (color.startsWith("#") && color.length === 7) {
        r = parseInt(color.slice(1, 3), 16);
        g = parseInt(color.slice(3, 5), 16);
        b = parseInt(color.slice(5, 7), 16);
      } else if (color === "cyan") {
        r = 6; g = 182; b = 212; // tailwind cyan-500
      }

      for (let line = 0; line < linesCount; line++) {
        ctx.beginPath();
        
        // Gradient color for the line (add slight color variation based on line index)
        const opacity = 0.05 + Math.sin(time + line * 0.1) * 0.02;
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;

        const numPoints = 60;
        const widthHalf = width / 2;
        const heightHalf = height / 2;

        for (let i = 0; i <= numPoints; i++) {
          const t = i / numPoints; // 0 to 1
          const x = (t - 0.5) * width * 1.5;
          
          // Complex noise pattern for Y
          const wave1 = Math.sin(x * 0.003 * noiseIntensity + time * 1.2 + line * 0.05) * 80;
          const wave2 = Math.cos(x * 0.005 * noiseIntensity - time * 0.8 + line * 0.02) * 60;
          const wave3 = Math.sin(x * 0.01 * noiseIntensity + time * 2.0) * 20;

          // Add a pinch effect in the middle
          const pinch = Math.exp(-Math.pow(x / (width * 0.2), 2));
          
          const y = (wave1 + wave2 + wave3) * (1 - pinch * 0.5);

          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      
      ctx.restore();

      animationFrameId = requestAnimationFrame(draw);
    };

    // First clear canvas fully
    ctx.fillStyle = "rgba(8, 8, 8, 1)";
    ctx.fillRect(0, 0, width, height);

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed, scale, color, noiseIntensity, rotation]);

  // bg-[#080808] matches the dark theme
  return (
    <div className={`w-full h-full overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="block"
        style={{ width: "100%", height: "100%", mixBlendMode: "screen" }}
      />
    </div>
  );
}
