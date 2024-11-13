'use client'

import { useEffect, useRef } from 'react';

export default function StarryNight() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.max(window.innerHeight, document.body.scrollHeight);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const threshold = 100;

      if (isDarkMode) {
        const offset = Math.max(0, scrollY - threshold);
        canvas.style.transform = `translateY(${offset * 0.3}px)`;
      } else {
        canvas.style.transform = 'translateY(0)';
      }
    };

    window.addEventListener('scroll', handleScroll);

    class Star {
      x: number = 0;
      y: number = 0;
      size: number = 0;
      opacity: number = 0;
      speed: number = 0;
      maxOpacity: number = 0;

      constructor(private canvas: HTMLCanvasElement) {
        this.reset();
      }

      reset() {
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.maxOpacity = Math.random() * 0.35 + 0.15;
        this.opacity = this.maxOpacity;
        this.speed = Math.random() * 0.003 + 0.001;
      }

      draw() {
        if (!ctx) return;
        
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 3
        );
        
        const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (isDarkMode) {
          gradient.addColorStop(0, `rgba(255, 255, 253, ${this.opacity})`);
          gradient.addColorStop(0.5, `rgba(255, 255, 250, ${this.opacity * 0.5})`);
        } else {
          gradient.addColorStop(0, `rgba(173, 255, 47, ${this.opacity})`);
          gradient.addColorStop(0.5, `rgba(255, 255, 102, ${this.opacity * 0.5})`);
        }
        gradient.addColorStop(1, 'rgba(255, 253, 247, 0)');

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      twinkle() {
        this.opacity = this.maxOpacity * (0.6 + Math.sin(Date.now() * this.speed) * 0.4);
      }
    }

    const stars = Array.from({ length: 150 }, () => new Star(canvas));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => {
        star.twinkle();
        star.draw();
      });
      requestAnimationFrame(animate);
    };

    animate();

    const observer = new ResizeObserver(resizeCanvas);
    observer.observe(document.body);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <canvas
        ref={canvasRef}
        className="opacity-60 dark:opacity-80 transition-opacity duration-1000"
        style={{ mixBlendMode: 'screen' }}
      />
    </div>
  );
} 