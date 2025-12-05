'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  angle: number;
  distance: number;
  originalX: number;
  originalY: number;
  color: string;
  trail: { x: number; y: number }[];
}

export default function BlackholeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Blackhole properties
    const blackhole = {
      x: 0,
      y: 0,
      radius: 150,
      accretionRadius: 400,
      rotation: 0,
    };

    // Particle types
    const particleTypes = [
      { color: '#8B5CF6', speed: 0.8 }, // Purple
      { color: '#38BDF8', speed: 1.0 }, // Blue
      { color: '#60A5FA', speed: 0.6 }, // Light Blue
      { color: '#A78BFA', speed: 0.9 }, // Light Purple
    ];

    // Create particles
    const particles: Particle[] = [];
    const particleCount = 300;

    for (let i = 0; i < particleCount; i++) {
      const type = particleTypes[Math.floor(Math.random() * particleTypes.length)];
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * Math.min(canvas.width, canvas.height) * 0.8;
      
      particles.push({
        x: canvas.width / 2 + Math.cos(angle) * distance,
        y: canvas.height / 2 + Math.sin(angle) * distance,
        size: Math.random() * 1.5 + 0.5,
        speed: type.speed * (Math.random() * 0.5 + 0.5),
        angle: angle,
        distance: distance,
        originalX: canvas.width / 2 + Math.cos(angle) * distance,
        originalY: canvas.height / 2 + Math.sin(angle) * distance,
        color: type.color,
        trail: [],
      });
    }

    // Draw functions
    const drawBlackhole = () => {
      // Blackhole position (following mouse with delay)
      blackhole.x += (mouseRef.current.x - blackhole.x) * 0.02;
      blackhole.y += (mouseRef.current.y - blackhole.y) * 0.02;
      blackhole.rotation += 0.002;

      // Event horizon (dark center)
      const gradient = ctx.createRadialGradient(
        blackhole.x,
        blackhole.y,
        0,
        blackhole.x,
        blackhole.y,
        blackhole.radius
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.9)');
      gradient.addColorStop(0.3, 'rgba(139, 92, 246, 0.3)');
      gradient.addColorStop(0.6, 'rgba(56, 189, 248, 0.2)');
      gradient.addColorStop(1, 'transparent');

      ctx.beginPath();
      ctx.arc(blackhole.x, blackhole.y, blackhole.radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Accretion disk (multiple rings)
      for (let ring = 0; ring < 3; ring++) {
        const radius = blackhole.radius + 50 + ring * 80;
        ctx.beginPath();
        ctx.arc(blackhole.x, blackhole.y, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(139, 92, 246, ${0.05 - ring * 0.015})`;
        ctx.lineWidth = 2 - ring * 0.5;
        ctx.stroke();
      }

      // Rotating accretion particles
      for (let i = 0; i < 50; i++) {
        const angle = (Date.now() / 500 + i * 0.5) % (Math.PI * 2);
        const radius = blackhole.radius + 30 + (i % 5) * 60;
        const x = blackhole.x + Math.cos(angle + blackhole.rotation) * radius;
        const y = blackhole.y + Math.sin(angle + blackhole.rotation) * radius;

        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${0.6 + Math.sin(Date.now() / 200 + i) * 0.3})`;
        ctx.fill();
      }

      // Singularity glow
      ctx.beginPath();
      ctx.arc(blackhole.x, blackhole.y, blackhole.radius * 0.3, 0, Math.PI * 2);
      const glowGradient = ctx.createRadialGradient(
        blackhole.x,
        blackhole.y,
        0,
        blackhole.x,
        blackhole.y,
        blackhole.radius * 0.3
      );
      glowGradient.addColorStop(0, 'rgba(139, 92, 246, 0.8)');
      glowGradient.addColorStop(1, 'transparent');
      ctx.fillStyle = glowGradient;
      ctx.fill();
    };

    const drawParticles = () => {
      timeRef.current += 0.01;

      particles.forEach((particle, index) => {
        // Calculate distance to blackhole
        const dx = blackhole.x - particle.x;
        const dy = blackhole.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Add to trail
        particle.trail.push({ x: particle.x, y: particle.y });
        if (particle.trail.length > 5) {
          particle.trail.shift();
        }

        // Warp effect near blackhole
        if (distance < blackhole.accretionRadius * 1.5) {
          const force = Math.max(0, (blackhole.accretionRadius * 1.5 - distance) / (blackhole.accretionRadius * 1.5));
          const angle = Math.atan2(dy, dx);
          const warpStrength = force * 4;

          // Spiral into blackhole
          particle.x += Math.cos(angle) * warpStrength;
          particle.y += Math.sin(angle) * warpStrength;

          // Rotational velocity
          const tangentAngle = angle + Math.PI / 2;
          particle.x += Math.cos(tangentAngle) * warpStrength * 0.5;
          particle.y += Math.sin(tangentAngle) * warpStrength * 0.5;

          // Size increases as it gets closer
          const sizeMultiplier = 1 + force * 3;

          // Draw trail
          for (let i = 0; i < particle.trail.length; i++) {
            const point = particle.trail[i];
            const alpha = i / particle.trail.length * 0.3;
            ctx.beginPath();
            ctx.arc(point.x, point.y, particle.size * sizeMultiplier * 0.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${parseInt(particle.color.slice(1, 3), 16)}, ${parseInt(particle.color.slice(3, 5), 16)}, ${parseInt(particle.color.slice(5, 7), 16)}, ${alpha})`;
            ctx.fill();
          }

          // Draw particle
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * sizeMultiplier, 0, Math.PI * 2);
          
          // Glow effect
          const glow = ctx.createRadialGradient(
            particle.x,
            particle.y,
            0,
            particle.x,
            particle.y,
            particle.size * sizeMultiplier * 2
          );
          glow.addColorStop(0, particle.color);
          glow.addColorStop(1, 'transparent');
          ctx.fillStyle = glow;
          ctx.fill();

          // Reset particle if too close
          if (distance < blackhole.radius * 0.5) {
            const newAngle = Math.random() * Math.PI * 2;
            const newDistance = Math.random() * Math.min(canvas.width, canvas.height) * 0.8;
            particle.x = canvas.width / 2 + Math.cos(newAngle) * newDistance;
            particle.y = canvas.height / 2 + Math.sin(newAngle) * newDistance;
            particle.trail = [];
          }
        } else {
          // Normal orbital motion
          particle.angle += 0.001 * particle.speed;
          const driftX = Math.sin(timeRef.current + index) * 0.5;
          const driftY = Math.cos(timeRef.current + index * 0.7) * 0.5;
          
          particle.x = particle.originalX + driftX * 50;
          particle.y = particle.originalY + driftY * 50;

          // Draw particle
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = `${particle.color}${Math.floor(0.3 * 255).toString(16).padStart(2, '0')}`;
          ctx.fill();
        }
      });
    };

    const drawGravitationalLensing = () => {
      // Space distortion effect
      const lensRadius = blackhole.accretionRadius * 1.2;
      ctx.beginPath();
      ctx.arc(blackhole.x, blackhole.y, lensRadius, 0, Math.PI * 2);
      
      const lensGradient = ctx.createRadialGradient(
        blackhole.x,
        blackhole.y,
        blackhole.radius,
        blackhole.x,
        blackhole.y,
        lensRadius
      );
      lensGradient.addColorStop(0, 'transparent');
      lensGradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.1)');
      lensGradient.addColorStop(1, 'rgba(56, 189, 248, 0.05)');
      ctx.fillStyle = lensGradient;
      ctx.fill();

      // Warp lines
      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI / 4) + blackhole.rotation;
        const startX = blackhole.x + Math.cos(angle) * blackhole.radius;
        const startY = blackhole.y + Math.sin(angle) * blackhole.radius;
        const endX = blackhole.x + Math.cos(angle) * lensRadius;
        const endY = blackhole.y + Math.sin(angle) * lensRadius;

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 + Math.sin(Date.now() / 500 + i) * 0.1})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    };

    const animate = () => {
      // Clear with fade effect for trails
      ctx.fillStyle = 'rgba(10, 10, 15, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw all elements
      drawBlackhole();
      drawGravitationalLensing();
      drawParticles();

      // Time warp effect
      ctx.fillStyle = 'rgba(56, 189, 248, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.9 }}
    />
  );
}