'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { 
  FaGithub, FaLinkedin, FaFacebook, FaCode, FaBrain,
  FaCloud, FaServer, FaDatabase, FaEnvelope, FaNodeJs,
  FaReact, FaAws, FaDocker, FaGitAlt, FaNpm, FaTerminal
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTailwindcss, SiPython, SiDjango, SiFastapi,
  SiPostgresql, SiMongodb, SiRedis, SiGraphql, SiTypescript,
  SiJavascript, SiExpress, SiNestjs, SiJest, SiLinux
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

export default function ProfileSidebar() {
  const [showAvatar, setShowAvatar] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const avatarRef = useRef<HTMLDivElement>(null);
  
  // Toggle between profile picture and avatar every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowAvatar(prev => !prev);
    }, 15000);
    
    return () => clearInterval(interval);
  }, []);

  // Handle avatar eye movement based on cursor
  useEffect(() => {
    if (!showAvatar || !avatarRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const avatar = avatarRef.current;
      if (!avatar) return;
      
      const rect = avatar.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      
      // Limit eye movement (max 8px)
      const eyeX = Math.max(-8, Math.min(8, deltaX * 0.05));
      const eyeY = Math.max(-8, Math.min(8, deltaY * 0.05));
      
      const leftEye = document.getElementById('left-eye');
      const rightEye = document.getElementById('right-eye');
      
      if (leftEye) {
        leftEye.style.transform = `translate(${eyeX}px, ${eyeY}px)`;
      }
      if (rightEye) {
        rightEye.style.transform = `translate(${eyeX}px, ${eyeY}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [showAvatar]);

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/yourusername', label: 'GitHub', color: 'hover:text-purple-400' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: <FaFacebook />, url: 'https://facebook.com/yourusername', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: <FaEnvelope />, url: 'mailto:your.email@example.com', label: 'Email', color: 'hover:text-cyan-400' },
  ];

  // Enhanced skills including Node.js, Next.js, and full stack
  const quickSkills = [
    { icon: <SiPython />, label: 'Python', category: 'Backend' },
    { icon: <SiDjango />, label: 'Django', category: 'Backend' },
    { icon: <SiFastapi />, label: 'FastAPI', category: 'Backend' },
    { icon: <FaNodeJs />, label: 'Node.js', category: 'Backend' },
    { icon: <SiExpress />, label: 'Express', category: 'Backend' },
    { icon: <SiNestjs />, label: 'NestJS', category: 'Backend' },
    { icon: <SiNextdotjs />, label: 'Next.js', category: 'Full Stack' },
    { icon: <FaReact />, label: 'React', category: 'Frontend' },
    { icon: <SiTypescript />, label: 'TypeScript', category: 'Both' },
    { icon: <SiPostgresql />, label: 'PostgreSQL', category: 'Database' },
    { icon: <SiMongodb />, label: 'MongoDB', category: 'Database' },
    { icon: <SiRedis />, label: 'Redis', category: 'Database' },
    { icon: <FaDocker />, label: 'Docker', category: 'DevOps' },
    { icon: <FaAws />, label: 'AWS', category: 'Cloud' },
    { icon: <SiGraphql />, label: 'GraphQL', category: 'API' },
    { icon: <TbApi />, label: 'REST API', category: 'API' },
    { icon: <SiJest />, label: 'Jest', category: 'Testing' },
    { icon: <FaGitAlt />, label: 'Git', category: 'Tools' },
  ];

  // Stats with more relevant metrics
  const stats = [
    { value: '3+', label: 'Years Experience', sub: 'Backend Focus' },
    { value: '50+', label: 'Projects', sub: 'Completed' },
    { value: '20+', label: 'Technologies', sub: 'Mastered' },
    { value: '∞', label: 'Passion', sub: 'Always Learning' },
  ];

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed left-0 top-0 h-full w-80 bg-black/30 backdrop-blur-xl border-r border-white/10 z-40 hidden lg:flex flex-col p-8 overflow-y-auto"
    >
      {/* Profile Card */}
      <div className="relative mb-8">
        {/* Circular animated background */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 animate-pulse-slow blur-xl" />
        
        {/* Profile Picture/Avatar Container */}
        <div className="relative">
          <div 
            ref={avatarRef}
            className="relative w-48 h-48 mx-auto mb-6 cursor-pointer"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => setShowAvatar(!showAvatar)}
          >
            {/* Circular background with gradient rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 animate-spin-slow opacity-20" />
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-cyan-500/30" />
            
            {/* Toggle Button */}
            <button 
              className="absolute top-2 right-2 z-20 w-8 h-8 rounded-full glass flex items-center justify-center text-sm hover:scale-110 transition-transform"
              onClick={(e) => {
                e.stopPropagation();
                setShowAvatar(!showAvatar);
              }}
              title={showAvatar ? "Show Profile Picture" : "Show Avatar"}
            >
              {showAvatar ? "👤" : "🤖"}
            </button>
            
            {/* Profile Picture (Replace the image source with your actual profile picture) */}
            {!showAvatar ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl shadow-purple-500/30"
              >
                {/* --- REPLACE THIS IMAGE SOURCE WITH YOUR PROFILE PICTURE --- */}
                {/* Example: <img src="/your-profile-picture.jpg" alt="Abdullah" className="w-full h-full object-cover" /> */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600">
                  <div className="text-7xl font-bold text-white">A</div>
                </div>
                {/* --- END PROFILE PICTURE REPLACEMENT --- */}
                
                {/* Status indicator */}
                <div className="absolute bottom-4 right-4 w-4 h-4 rounded-full bg-green-500 animate-pulse border-2 border-white/20" />
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl shadow-blue-500/30 bg-gradient-to-br from-blue-900/20 to-cyan-900/20"
              >
                {/* Avatar with moving eyes */}
                <div className="w-full h-full flex flex-col items-center justify-center">
                  {/* Avatar head */}
                  <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400">
                    {/* Eyes container */}
                    <div className="absolute top-12 w-full flex justify-center space-x-12">
                      {/* Left eye */}
                      <div className="relative">
                        <div className="absolute w-8 h-8 rounded-full bg-white -translate-x-4 -translate-y-4">
                          <div 
                            id="left-eye"
                            className="absolute w-4 h-4 rounded-full bg-blue-900 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-150"
                          />
                        </div>
                      </div>
                      {/* Right eye */}
                      <div className="relative">
                        <div className="absolute w-8 h-8 rounded-full bg-white -translate-x-4 -translate-y-4">
                          <div 
                            id="right-eye"
                            className="absolute w-4 h-4 rounded-full bg-blue-900 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-150"
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Mouth */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-blue-900 rounded-full" />
                  </div>
                  
                  {/* Avatar body */}
                  <div className="mt-2 w-40 h-16 rounded-b-full bg-gradient-to-br from-blue-500 to-cyan-500" />
                </div>
                
                {/* Glowing effect */}
                <div className="absolute inset-0 rounded-full animate-pulse-soft bg-gradient-to-r from-transparent via-blue-400/10 to-transparent" />
              </motion.div>
            )}
            
            {/* Hover overlay */}
            {isHovering && (
              <div className="absolute inset-0 rounded-full bg-black/30 flex items-center justify-center">
                <span className="text-white text-sm font-medium">
                  Click to {showAvatar ? "show photo" : "show avatar"}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Name & Title */}
        <div className="text-center">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
            Abdullah
          </h1>
          <div className="flex flex-col items-center space-y-1">
            <p className="text-gray-300 text-lg font-medium">
              Backend Developer
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse" />
              <span className="text-gray-400 text-sm">→ Core Backend Specialist</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse" />
              <span className="text-gray-400 text-sm">→ Partially Full Stack</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Stats */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="glass rounded-2xl p-4 text-center hover:bg-white/5 transition-colors"
          >
            <div className="text-2xl font-bold text-gradient-purple-blue mb-1">{stat.value}</div>
            <div className="text-sm font-semibold text-white">{stat.label}</div>
            <div className="text-xs text-gray-400 mt-1">{stat.sub}</div>
          </motion.div>
        ))}
      </div>

      {/* Bio with role focus */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass rounded-2xl p-6 mb-8 backdrop-blur-sm"
      >
        <h3 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider">
          About Me
        </h3>
        <p className="text-gray-300 leading-relaxed text-sm mb-3">
          <span className="text-purple-400 font-medium">Core Backend Specialist</span> with expertise in 
          scalable systems, API design, and database architecture. Passionate about 
          clean code and robust solutions.
        </p>
        <p className="text-gray-300 leading-relaxed text-sm">
          Expanding into <span className="text-blue-400 font-medium">partially full-stack</span> development 
          with Next.js & React. Continuously exploring AI/ML integration and 
          cloud-native architecture.
        </p>
      </motion.div>

      {/* Enhanced Quick Skills with categories */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">
            Tech Stack
          </h3>
          <span className="text-xs text-gray-500">{quickSkills.length} skills</span>
        </div>
        
        <div className="space-y-4">
          {/* Backend Skills */}
          <div>
            <h4 className="text-xs font-semibold text-purple-400 mb-2 flex items-center gap-2">
              <FaServer className="text-xs" /> Backend Core
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {quickSkills.filter(skill => skill.category === 'Backend').map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="glass rounded-lg p-3 text-center group hover:border-purple-500/30 transition-colors"
                >
                  <div className="text-xl mb-1 text-gray-300 group-hover:text-white transition-colors">
                    {skill.icon}
                  </div>
                  <div className="text-xs text-gray-400">{skill.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Frontend & Full Stack */}
          <div>
            <h4 className="text-xs font-semibold text-blue-400 mb-2 flex items-center gap-2">
              <FaReact className="text-xs" /> Frontend & Full Stack
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {quickSkills.filter(skill => ['Frontend', 'Full Stack', 'Both'].includes(skill.category)).map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="glass rounded-lg p-3 text-center group hover:border-blue-500/30 transition-colors"
                >
                  <div className="text-xl mb-1 text-gray-300 group-hover:text-white transition-colors">
                    {skill.icon}
                  </div>
                  <div className="text-xs text-gray-400">{skill.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Databases & DevOps */}
          <div>
            <h4 className="text-xs font-semibold text-cyan-400 mb-2 flex items-center gap-2">
              <FaDatabase className="text-xs" /> Databases & DevOps
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {quickSkills.filter(skill => ['Database', 'DevOps', 'Cloud', 'Tools'].includes(skill.category)).map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.05 + 0.2 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="glass rounded-lg p-3 text-center group hover:border-cyan-500/30 transition-colors"
                >
                  <div className="text-xl mb-1 text-gray-300 group-hover:text-white transition-colors">
                    {skill.icon}
                  </div>
                  <div className="text-xs text-gray-400">{skill.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-auto pt-6 border-t border-white/10">
        <h3 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">
          Connect With Me
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className={`glass rounded-xl p-3 text-center group ${link.color} transition-all duration-300`}
              aria-label={link.label}
            >
              <div className="text-xl mb-1">
                {link.icon}
              </div>
              <div className="text-xs text-gray-300 group-hover:text-white transition-colors">
                {link.label}
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-6 border-t border-white/10 text-center">
        <div className="text-xs text-gray-500">
          © {new Date().getFullYear()} Abdullah
        </div>
        <div className="text-xs text-gray-600 mt-1 flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Available for opportunities
        </div>
        <div className="text-xs text-gray-500 mt-2">
          Dhaka, Bangladesh • Backend & Full Stack
        </div>
      </div>
    </motion.aside>
  );
}