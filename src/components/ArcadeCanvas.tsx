"use client";

import { useEffect, useRef } from "react";

export function ArcadeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      color: string;
      blink: number;
    }> = [];

    let width = 0;
    let height = 0;
    let rafId = 0;

    function resize() {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width * ratio;
      canvas!.height = height * ratio;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(ratio, 0, 0, ratio, 0, 0);
    }

    function seed() {
      particles.length = 0;
      const total = Math.min(80, Math.floor(width / 18));
      const colors = ["#4dd8ff", "#ff6b6b", "#ffd166", "#66e080"];
      for (let index = 0; index < total; index += 1) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: 2 + Math.random() * 3,
          speed: 0.15 + Math.random() * 0.4,
          color: colors[index % colors.length],
          blink: Math.random() * Math.PI * 2
        });
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);
      particles.forEach((particle) => {
        particle.y += particle.speed;
        particle.blink += 0.04;
        if (particle.y > height + 10) {
          particle.y = -10;
          particle.x = Math.random() * width;
        }
        ctx!.globalAlpha = 0.35 + Math.sin(particle.blink) * 0.2;
        ctx!.fillStyle = particle.color;
        ctx!.fillRect(particle.x, particle.y, particle.size, particle.size);
      });
      rafId = requestAnimationFrame(draw);
    }

    function restart() {
      cancelAnimationFrame(rafId);
      resize();
      seed();
      draw();
    }

    window.addEventListener("resize", restart);
    restart();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", restart);
    };
  }, []);

  return <canvas ref={canvasRef} className="arcade-canvas" aria-hidden="true" />;
}
