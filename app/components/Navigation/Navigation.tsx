'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import { FaHome, FaCode, FaProjectDiagram, FaUser, FaEnvelope } from 'react-icons/fa';

const navItems = [
  { path: '/', label: 'Home', icon: <FaHome /> },
  { path: '/skills', label: 'Skills', icon: <FaCode /> },
  { path: '/projects', label: 'Projects', icon: <FaProjectDiagram /> },
  { path: '/about', label: 'About', icon: <FaUser /> },
  { path: '/contact', label: 'Contact', icon: <FaEnvelope /> },
];

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <nav className="fixed top-8 right-8 z-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 p-2 backdrop-blur-xl bg-black/20 border border-white/10 rounded-full"
      >
        {navItems.map((item, index) => (
          <div key={item.path} className="relative group">
            <button
              onClick={() => handleNavigation(item.path)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`p-3 rounded-full transition-all duration-300 ease-out relative ${
                pathname === item.path
                  ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              
              {hoveredIndex === index && (
                <motion.div
                  layoutId="nav-hover"
                  className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
              )}
              
              {pathname === item.path && (
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse" />
              )}
            </button>

            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="px-3 py-1 rounded-md backdrop-blur-md bg-white/5 border border-white/10 text-sm whitespace-nowrap">
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </nav>
  );
}