'use client';

import { useEffect, useRef } from 'react';

interface ParticleType {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  update: (width: number, height: number) => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: ParticleType[] = [];

    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    const createParticle = (width: number, height: number): ParticleType => {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.2,
        update(w: number, h: number) {
          this.x += this.speedX;
          this.y += this.speedY;

          if (this.x > w) this.x = 0;
          if (this.x < 0) this.x = w;
          if (this.y > h) this.y = 0;
          if (this.y < 0) this.y = h;
        },
        draw(context: CanvasRenderingContext2D) {
          context.fillStyle = `rgba(96, 165, 250, ${this.opacity})`;
          context.beginPath();
          context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          context.fill();
        },
      };
    };

    const init = () => {
      if (!canvas) return;
      particles = [];
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(createParticle(canvas.width, canvas.height));
      }
    };

    const connectParticles = () => {
      if (!ctx) return;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.strokeStyle = `rgba(96, 165, 250, ${0.1 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx);
      });
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resizeCanvas();
      init();
    };

    resizeCanvas();
    init();
    animate();

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-30"
      style={{ zIndex: 0 }}
    />
  );
}
