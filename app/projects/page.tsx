'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { SiPython, SiDjango, SiReact, SiAws } from 'react-icons/si';

const projects = [
  {
    id: 1,
    title: 'E-commerce Backend API',
    description: 'Scalable microservices architecture for e-commerce platform',
    tags: ['Django', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'bg-gradient-to-br from-purple-500/20 to-blue-500/20',
    featured: true,
  },
  {
    id: 2,
    title: 'AI Content Generator',
    description: 'Machine learning powered content creation tool',
    tags: ['Python', 'TensorFlow', 'FastAPI', 'React', 'Tailwind'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'bg-gradient-to-br from-green-500/20 to-emerald-500/20',
    featured: true,
  },
  // Add more projects...
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');

  return (
    <div className="min-h-screen py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-6xl font-bold mb-4">Projects</h1>
        <p className="text-gray-400 text-lg mb-8">Showcase of my best work</p>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {['all', 'backend', 'ai', 'web', 'tools'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === cat
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                  : 'glass text-gray-400 hover:text-white'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Project card content */}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}