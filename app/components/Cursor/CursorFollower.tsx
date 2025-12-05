'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
      if (!isVisible) setIsVisible(true);
    };

    const mouseLeave = () => setIsVisible(false);
    const mouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseleave', mouseLeave);
    document.addEventListener('mouseenter', mouseEnter);

    // Add hover event listeners
    const interactiveElements = document.querySelectorAll(
      'button, a, input, textarea, .project-card'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', () => setCursorVariant('hover'));
      el.addEventListener('mouseleave', () => setCursorVariant('default'));
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseleave', mouseLeave);
      document.removeEventListener('mouseenter', mouseEnter);
      
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', () => setCursorVariant('hover'));
        el.removeEventListener('mouseleave', () => setCursorVariant('default'));
      });
    };
  }, [isVisible]);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: 'rgba(139, 92, 246, 0.2)',
      borderColor: 'rgba(139, 92, 246, 0.5)',
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
      backgroundColor: 'rgba(139, 92, 246, 0.1)',
      borderColor: 'rgba(139, 92, 246, 0.8)',
    },
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border-2 border-primary-purple pointer-events-none z-50 mix-blend-difference"
        animate={cursorVariant}
        variants={variants}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      
      {/* Trail effect */}
      <div className="fixed top-0 left-0 w-4 h-4 rounded-full bg-primary-purple/20 pointer-events-none z-40 mix-blend-difference"
        style={{
          transform: `translate(${mousePosition.x - 8}px, ${mousePosition.y - 8}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      />
    </>
  );
}