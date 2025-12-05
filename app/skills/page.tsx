'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { 
  FaServer, FaDatabase, FaBrain, FaTools, 
  FaCode, FaCloud, FaGitAlt, FaDocker 
} from 'react-icons/fa';
import { 
  SiPython, SiDjango, SiFastapi, SiPostgresql, 
  SiRedis, SiMongodb, SiTensorflow, SiPytorch,
  SiReact, SiNextdotjs, SiTailwindcss,
  SiKubernetes, SiGithubactions, SiJenkins 
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'Backend Development',
    icon: <FaServer className="w-8 h-8" />,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Python', icon: <SiPython />, level: 95 },
      { name: 'Django', icon: <SiDjango />, level: 90 },
      { name: 'FastAPI', icon: <SiFastapi />, level: 85 },
      { name: 'REST APIs', icon: <FaCode />, level: 92 },
      { name: 'Microservices', icon: <FaCloud />, level: 88 },
    ],
  },
  {
    title: 'Databases',
    icon: <FaDatabase className="w-8 h-8" />,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql />, level: 90 },
      { name: 'Redis', icon: <SiRedis />, level: 85 },
      { name: 'MongoDB', icon: <SiMongodb />, level: 80 },
      { name: 'SQL', icon: <FaDatabase />, level: 88 },
      { name: 'ORM', icon: <FaCode />, level: 87 },
    ],
  },
  {
    title: 'AI & Data',
    icon: <FaBrain className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'TensorFlow', icon: <SiTensorflow />, level: 75 },
      { name: 'PyTorch', icon: <SiPytorch />, level: 70 },
      { name: 'ML Ops', icon: <FaBrain />, level: 78 },
      { name: 'Data Pipelines', icon: <FaTools />, level: 82 },
      { name: 'Scikit-learn', icon: <SiPython />, level: 80 },
    ],
  },
  {
    title: 'DevOps & Cloud',
    icon: <FaCloud className="w-8 h-8" />,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'AWS', icon: <SiTailwindcss />, level: 85 },
      { name: 'Docker', icon: <FaDocker />, level: 88 },
      { name: 'Kubernetes', icon: <SiKubernetes />, level: 75 },
      { name: 'CI/CD', icon: <SiGithubactions />, level: 83 },
      { name: 'Jenkins', icon: <SiJenkins />, level: 78 },
    ],
  },
  {
    title: 'Frontend Support',
    icon: <FaCode className="w-8 h-8" />,
    color: 'from-indigo-500 to-purple-500',
    skills: [
      { name: 'React', icon: <SiReact />, level: 80 },
      { name: 'Next.js', icon: <SiNextdotjs />, level: 85 },
      { name: 'Tailwind', icon: <SiTailwindcss />, level: 90 },
      { name: 'TypeScript', icon: <FaCode />, level: 75 },
      { name: 'UI/UX', icon: <FaTools />, level: 70 },
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: <FaTools className="w-8 h-8" />,
    color: 'from-yellow-500 to-orange-500',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, level: 92 },
      { name: 'Docker', icon: <FaDocker />, level: 88 },
      { name: 'VS Code', icon: <FaCode />, level: 95 },
      { name: 'Linux', icon: <FaTools />, level: 85 },
      { name: 'Agile', icon: <FaTools />, level: 87 },
    ],
  },
];

export default function SkillsPage() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Staggered card entrance
    cardRefs.current.forEach((ref, i) => {
      if (ref) {
        gsap.fromTo(ref,
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: i * 0.1,
            ease: 'back.out(1.2)',
          }
        );
      }
    });
  }, []);

  return (
    <div className="min-h-screen py-20 px-6">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto mb-16"
      >
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
            <FaCode className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-2">
              Skills &{' '}
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Technologies
              </span>
            </h1>
            <p className="text-gray-400 text-lg">
              Tools and technologies I use to build amazing things
            </p>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { label: 'Languages', value: '8+' },
            { label: 'Frameworks', value: '15+' },
            { label: 'Tools', value: '20+' },
            { label: 'Databases', value: '6+' },
          ].map((stat, i) => (
            <div key={i} className="glass p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Skills Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              ref={(el) => (cardRefs.current[categoryIndex] = el)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative glass rounded-2xl p-6 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 h-full">
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    <div className="text-sm text-gray-400">
                      {category.skills.length} skills
                    </div>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group/item">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover/item:bg-white/10 transition-colors">
                            <span className="text-lg">{skill.icon}</span>
                          </div>
                          <span className="text-gray-300 font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                          {skill.level}%
                        </span>
                      </div>
                      {/* Progress Bar */}
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/10 pointer-events-none transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Level Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 glass rounded-2xl p-6 max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-bold mb-4 text-center">Experience Level Guide</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 rounded-xl bg-white/5">
              <div className="w-full h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-2" />
              <div className="text-sm font-bold text-green-400">Advanced (80-100%)</div>
              <div className="text-xs text-gray-400">Production ready</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/5">
              <div className="w-full h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-2" />
              <div className="text-sm font-bold text-blue-400">Proficient (60-80%)</div>
              <div className="text-xs text-gray-400">Comfortable & productive</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/5">
              <div className="w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-2" />
              <div className="text-sm font-bold text-purple-400">Learning (40-60%)</div>
              <div className="text-xs text-gray-400">Growing & exploring</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}