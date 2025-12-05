'use client';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { 
  FaGithub, FaLinkedin, FaFacebook, FaCode, FaBrain,
  FaCloud, FaServer, FaDatabase, FaEnvelope, FaNodeJs,
  FaReact, FaAws, FaDocker, FaGitAlt, FaNpm, FaTerminal,
  FaArrowDown, FaDownload, FaLaptopCode, FaRocket, FaShieldAlt,
  FaChartLine, FaUsers, FaLightbulb, FaLayerGroup, FaCogs,
  FaPalette, FaMobileAlt, FaGlobe, FaLock, FaBolt, FaUser, 
  FaMapMarkerAlt, FaEye, FaInfinity, FaGalacticRepublic,
  FaTwitter, FaDiscord, FaYoutube, FaStar, FaSatellite,
  FaCompass, FaSpaceShuttle, FaMeteor, FaShieldVirus,
  FaBriefcase, FaGraduationCap, FaTools, FaProjectDiagram,FaShoppingCart , FaShareAlt , FaDesktop , FaPaperPlane , FaArrowUp 
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTailwindcss, SiPython, SiDjango, SiFastapi,
  SiPostgresql, SiMongodb, SiRedis, SiGraphql, SiTypescript,
  SiJavascript, SiExpress, SiNestjs, SiJest, SiLinux,
  SiPrisma, SiRedux, SiStorybook, SiVercel, SiNetlify,
  SiJupyter, SiTensorflow, SiPytorch, SiKubernetes, SiTerraform,
  SiAnsible, SiJenkins, SiPrometheus, SiGrafana, SiThreedotjs,
  SiBlender, SiUnity, SiUnrealengine, SiArduino, SiRaspberrypi
} from 'react-icons/si';
import { TbApi, TbWorldWww } from 'react-icons/tb';
import { IoMdPlanet, IoMdNuclear } from 'react-icons/io';
import { GiBlackHoleBolas, GiGalaxy, GiSpaceship } from 'react-icons/gi';

// Sound effects for interactivity
const playSound = (type: string) => {
  if (typeof window !== 'undefined') {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    switch(type) {
      case 'hover':
        oscillator.frequency.value = 800;
        gainNode.gain.value = 0.1;
        oscillator.type = 'sine';
        break;
      case 'click':
        oscillator.frequency.value = 1200;
        gainNode.gain.value = 0.2;
        oscillator.type = 'triangle';
        break;
      case 'warp':
        oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.5);
        gainNode.gain.value = 0.15;
        oscillator.type = 'sawtooth';
        break;
    }
    
    oscillator.start();
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.3);
    oscillator.stop(audioContext.currentTime + 0.3);
  }
};

export default function EnhancedCosmicPortfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [showAvatar, setShowAvatar] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringBlackHole, setIsHoveringBlackHole] = useState(false);
  const [particleCount, setParticleCount] = useState(100);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Track mouse movement for parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
      
      // Calculate distance from center for black hole effect
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.sqrt(
          Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
        );
        setIsHoveringBlackHole(distance < 300);
        setParticleCount(Math.min(200, Math.max(50, 150 - distance / 10)));
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Parallax transforms
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const parallaxYReverse = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const rotateProgress = useTransform(scrollYProgress, [0, 1], [0, 360]);
  
  // Rotating words for hero section
  useEffect(() => {
    const words = [
      'Full Stack Developer',
      'AI/ML Engineer',
      'Cloud Architect',
      'DevOps Specialist',
      'Backend Engineer',
      'Frontend Developer',
      'Python Developer',
      'React Expert',
      'System Designer'
    ];
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/Funcoder-MADARA', label: 'GitHub', color: 'hover:text-violet-400' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/abdullah-ibna-siddiquie-6419252ab/', label: 'LinkedIn', color: 'hover:text-cyan-400' },
    { icon: <FaTwitter />, url: 'https://twitter.com/yourusername', label: 'Twitter', color: 'hover:text-sky-400' },
    { icon: <FaDiscord />, url: 'https://discord.com/yourusername', label: 'Discord', color: 'hover:text-indigo-400' },
    { icon: <FaYoutube />, url: 'https://youtube.com/yourusername', label: 'YouTube', color: 'hover:text-red-400' },
    { icon: <FaEnvelope />, url: 'mailto:abdullahibnasiddiquie12688@gmail.com', label: 'Email', color: 'hover:text-teal-400' },
  ];

  const techStack = [
    // AI/ML
    { icon: <FaBrain />, label: 'AI/ML', category: 'AI & ML', level: 92 },
    { icon: <SiTensorflow />, label: 'TensorFlow', category: 'AI & ML', level: 88 },
    { icon: <SiPytorch />, label: 'PyTorch', category: 'AI & ML', level: 85 },
    { icon: <SiJupyter />, label: 'Jupyter', category: 'AI & ML', level: 90 },
    
    // Backend
    { icon: <SiPython />, label: 'Python', category: 'Backend', level: 96 },
    { icon: <SiDjango />, label: 'Django', category: 'Backend', level: 94 },
    { icon: <SiFastapi />, label: 'FastAPI', category: 'Backend', level: 92 },
    { icon: <FaNodeJs />, label: 'Node.js', category: 'Backend', level: 88 },
    { icon: <SiExpress />, label: 'Express', category: 'Backend', level: 85 },
    { icon: <SiNestjs />, label: 'NestJS', category: 'Backend', level: 82 },
    
    // Frontend
    { icon: <FaReact />, label: 'React', category: 'Frontend', level: 92 },
    { icon: <SiNextdotjs />, label: 'Next.js', category: 'Frontend', level: 90 },
    { icon: <SiTypescript />, label: 'TypeScript', category: 'Frontend', level: 88 },
    { icon: <SiJavascript />, label: 'JavaScript', category: 'Frontend', level: 95 },
    { icon: <SiTailwindcss />, label: 'Tailwind CSS', category: 'Frontend', level: 94 },
    { icon: <SiRedux />, label: 'Redux', category: 'Frontend', level: 85 },
    
    // Database
    { icon: <SiPostgresql />, label: 'PostgreSQL', category: 'Database', level: 91 },
    { icon: <SiMongodb />, label: 'MongoDB', category: 'Database', level: 87 },
    { icon: <SiRedis />, label: 'Redis', category: 'Database', level: 89 },
    
    // DevOps & Cloud
    { icon: <FaDocker />, label: 'Docker', category: 'DevOps & Cloud', level: 88 },
    { icon: <FaAws />, label: 'AWS', category: 'DevOps & Cloud', level: 85 },
    { icon: <SiKubernetes />, label: 'Kubernetes', category: 'DevOps & Cloud', level: 80 },
    { icon: <SiTerraform />, label: 'Terraform', category: 'DevOps & Cloud', level: 82 },
    { icon: <SiAnsible />, label: 'Ansible', category: 'DevOps & Cloud', level: 78 },
    
    // Tools
    { icon: <FaGitAlt />, label: 'Git', category: 'Tools', level: 96 },
    { icon: <SiGraphql />, label: 'GraphQL', category: 'Tools', level: 84 },
    { icon: <TbApi />, label: 'REST API', category: 'Tools', level: 93 },
    { icon: <SiJest />, label: 'Jest', category: 'Tools', level: 83 },
    
    // Emerging Tech
    { icon: <SiThreedotjs />, label: 'Three.js', category: 'Emerging Tech', level: 75 },
    { icon: <TbWorldWww />, label: 'IoT', category: 'Emerging Tech', level: 72 },
    { icon: <SiArduino />, label: 'Arduino', category: 'Emerging Tech', level: 70 },
  ];

  const projects = [
    {
      title: "E-Commerce Microservices Platform",
      description: "Scalable e-commerce solution with microservices architecture handling high traffic and real-time inventory",
      tech: ["Django", "FastAPI", "Redis", "WebSocket", "Docker"],
      github: "#",
      live: "#",
      color: "from-violet-600 to-purple-600",
      icon: <FaShoppingCart />
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time data analytics platform with machine learning predictions and interactive visualizations",
      tech: ["Python", "TensorFlow", "PostgreSQL", "Kafka", "React"],
      github: "#",
      live: "#",
      color: "from-cyan-600 to-blue-600",
      icon: <FaChartLine />
    },
    {
      title: "Serverless Content Management System",
      description: "Headless CMS built with serverless architecture for optimal performance and scalability",
      tech: ["AWS Lambda", "Node.js", "MongoDB", "Next.js", "GraphQL"],
      github: "#",
      live: "#",
      color: "from-teal-600 to-emerald-600",
      icon: <FaServer />
    },
    {
      title: "Computer Vision Security System",
      description: "AI-based security monitoring system with real-time object detection and alerting",
      tech: ["PyTorch", "FastAPI", "OpenCV", "Redis", "WebRTC"],
      github: "#",
      live: "#",
      color: "from-pink-600 to-rose-600",
      icon: <FaShieldAlt />
    },
    {
      title: "Decentralized File Sharing",
      description: "Peer-to-peer file sharing application with blockchain-based authentication and encryption",
      tech: ["React", "WebRTC", "Blockchain", "Node.js", "Web3.js"],
      github: "#",
      live: "#",
      color: "from-orange-600 to-amber-600",
      icon: <FaShareAlt />
    },
    {
      title: "Real-time Monitoring Dashboard",
      description: "Enterprise monitoring system with live metrics, alerts, and performance analytics",
      tech: ["Next.js", "WebSocket", "D3.js", "PostgreSQL", "Docker"],
      github: "#",
      live: "#",
      color: "from-indigo-600 to-violet-600",
      icon: <FaDesktop />
    },
  ];

  const experiences = [
    {
      role: "Senior Full Stack Engineer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Led development of scalable microservices architecture and improved system performance by 400%",
      tech: ["Python", "FastAPI", "Docker", "AWS", "React"],
      achievements: ["Reduced API latency by 70%", "Scaled platform to 1M+ users", "Improved system uptime to 99.99%"]
    },
    {
      role: "Full Stack Developer",
      company: "Digital Solutions LLC",
      period: "2021 - 2022",
      description: "Built enterprise applications and implemented CI/CD pipelines for automated deployments",
      tech: ["Django", "React", "PostgreSQL", "GitHub Actions", "Docker"],
      achievements: ["Implemented microservices architecture", "Reduced deployment time by 80%", "Increased test coverage to 90%"]
    },
    {
      role: "Backend Engineer",
      company: "Web Services Co.",
      period: "2020 - 2021",
      description: "Developed REST APIs and optimized database queries for high-traffic applications",
      tech: ["Node.js", "Express", "MongoDB", "Redis", "AWS"],
      achievements: ["Built 50+ REST APIs", "Optimized query performance by 60%", "Implemented real-time features"]
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0A0A0F] text-white overflow-hidden">
      {/* Interactive Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Interactive Particle System */}
        <div className="absolute inset-0">
          {Array.from({ length: particleCount }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[1px] h-[1px] bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.1,
              }}
              animate={{
                x: [0, (Math.random() - 0.5) * 100],
                y: [0, (Math.random() - 0.5) * 100],
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        {/* Animated Core with Mouse Interaction */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isHoveringBlackHole ? 1.2 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative">
            {/* Animated Ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: `radial-gradient(circle at center, 
                  rgba(139, 92, 246, 0.1) 0%, 
                  rgba(139, 92, 246, 0.05) 20%,
                  rgba(56, 189, 248, 0.02) 40%,
                  transparent 60%)`,
              }}
              animate={{
                scale: [1, 1.1, 1],
                rotate: 360,
              }}
              transition={{
                scale: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                rotate: {
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            />
            
            {/* Outer Ring */}
            <motion.div
              className="absolute -inset-32 rounded-full border border-violet-500/10"
              animate={{
                rotate: 360,
                scale: [1, 1.05, 1],
              }}
              transition={{
                rotate: {
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear"
                },
                scale: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
            
            {/* Central Logo */}
            <motion.div
              className="relative w-32 h-32 rounded-full bg-gradient-to-br from-violet-600 via-cyan-600 to-black"
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  '0 0 60px rgba(139, 92, 246, 0.5)',
                  '0 0 100px rgba(139, 92, 246, 0.7)',
                  '0 0 60px rgba(139, 92, 246, 0.5)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              onMouseEnter={() => playSound('warp')}
            >
              <div className="absolute inset-4 rounded-full bg-black/40 flex items-center justify-center">
                <FaCode className="text-4xl text-violet-400" />
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Animation Waves */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/10"
              style={{
                width: `${100 + i * 150}px`,
                height: `${100 + i * 150}px`,
              }}
              animate={{
                scale: [1, 1.5],
                opacity: [0.1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-violet-400/20 to-cyan-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>

      {/* Animated Lines */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-32 bg-gradient-to-b from-cyan-500/20 to-transparent"
            style={{
              left: `${(i * 5)}%`,
              top: '-10%',
            }}
            animate={{
              y: ['-100%', '200%'],
            }}
            transition={{
              duration: 1 + Math.random(),
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Scroll Gradient Effect */}
      <motion.div
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, 
            transparent 0%,
            rgba(139, 92, 246, ${useTransform(scrollYProgress, [0, 1], [0.02, 0.08])}) 40%,
            transparent 70%)`,
        }}
      />

      {/* Fixed Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 lg:px-16 py-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between glass-dark rounded-2xl px-6 py-3">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-3"
            >
              <div className="relative w-10 h-10">
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600 to-cyan-600"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-1 rounded-full bg-[#0A0A0F] flex items-center justify-center">
                  <FaCode className="text-xl text-violet-400" />
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                ABDULLAH
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' });
                    setActiveSection(item);
                    playSound('click');
                  }}
                  className={`relative px-4 py-2 rounded-lg transition-all ${
                    activeSection === item
                      ? 'bg-gradient-to-r from-violet-600/30 to-cyan-600/30 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {activeSection === item && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-cyan-600/20 rounded-lg border border-white/10"
                    />
                  )}
                  <span className="relative capitalize font-medium">
                    {item}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <div className="w-6 h-0.5 bg-white mb-1.5"></div>
              <div className="w-6 h-0.5 bg-white mb-1.5"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div ref={containerRef} className="relative z-10 pt-20">
        {/* Hero Section */}
        <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-7xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center relative z-10"
            >
              {/* Professional Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-dark mb-8"
                onMouseEnter={() => playSound('hover')}
              >
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400 animate-pulse" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400 animate-ping opacity-20" />
                </div>
                <span className="text-sm font-medium bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                   Full Stack Developer
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.div className="relative">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 tracking-tighter"
                >
                  <span className="relative">
                    <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                      ABDULLAH
                    </span>
                    {/* Text Glow */}
                    <span className="absolute inset-0 bg-gradient-to-r from-violet-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent blur-2xl opacity-30">
                      ABDULLAH
                    </span>
                  </span>
                </motion.h1>

                {/* Subtitle with Word Rotator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mb-8"
                >
                  <div className="text-2xl md:text-4xl font-bold text-gray-300 mb-4 h-16 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentWordIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="inline-block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent"
                      >
                        {[
                          'Full Stack Developer',
                          'AI/ML Engineer',
                          'Cloud Architect',
                          'DevOps Specialist',
                          'Backend Engineer',
                          'Frontend Developer',
                          'Python Developer',
                          'React Expert',
                          'System Designer'
                        ][currentWordIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    Building scalable, high-performance applications with modern technologies
                  </p>
                </motion.div>
              </motion.div>

              {/* Hero Description */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mb-12"
              >
                <div className="inline-block max-w-3xl mx-auto glass-dark rounded-2xl p-8 text-left">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    <span className="text-violet-400 font-semibold">Developer</span> specializing in 
                    <span className="text-cyan-400 font-semibold"> full-stack applications</span>, 
                    <span className="text-teal-400 font-semibold"> microservices architecture</span>, and 
                    <span className="text-indigo-400 font-semibold"> cloud solutions</span>. 
                    Passionate about creating efficient, scalable systems and mentoring development teams.
                  </p>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-wrap gap-6 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => playSound('hover')}
                  onClick={() => {
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                    playSound('click');
                  }}
                  className="group relative px-8 py-4 rounded-full overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-cyan-600 to-teal-600" />
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-cyan-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity animate-shimmer" />
                  <span className="relative flex items-center gap-3 text-white font-bold text-lg">
                    <span>View My Projects</span>
                    <FaRocket className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => playSound('hover')}
                  className="group px-8 py-4 rounded-full glass-dark border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex items-center gap-3"
                >
                  <FaDownload className="text-cyan-400" />
                  <span className="font-bold">Download Resume</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400">
                    PDF
                  </span>
                </motion.button>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="mt-12"
              >
                <div className="inline-grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { value: '50+', label: 'Projects Completed', color: 'text-violet-400' },
                    { value: '5+', label: 'Years Experience', color: 'text-cyan-400' },
                    { value: '25+', label: 'Technologies', color: 'text-teal-400' },
                    { value: '100%', label: 'Client Satisfaction', color: 'text-indigo-400' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating Tech Icons */}
          <div className="hidden lg:block absolute inset-0 overflow-hidden pointer-events-none">
            {techStack.slice(0, 12).map((tech, i) => (
              <motion.div
                key={tech.label}
                className="absolute"
                style={{
                  left: `${50 + Math.cos(i * Math.PI / 6) * 40}%`,
                  top: `${50 + Math.sin(i * Math.PI / 6) * 40}%`,
                }}
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.5,
                  scale: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  y: {
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <div className={`text-3xl ${tech.category === 'Backend' ? 'text-violet-400' : 'text-cyan-400'}`}>
                  {tech.icon}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-sm text-gray-400">Scroll to explore</span>
              <div className="w-6 h-10 rounded-full border border-white/20 flex justify-center">
                <div className="w-1 h-3 rounded-full bg-gradient-to-b from-violet-400 to-cyan-400 mt-2" />
              </div>
            </motion.div>
          </motion.div>
        </section>

{/* About Section */}
<section id="about" className="min-h-screen px-4 md:px-8 lg:px-16 py-20 relative">
  {/* Section Background Effect */}
  <div className="absolute inset-0">
    <motion.div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
      style={{
        background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.05) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }}
      animate={{
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </div>

  <div className="max-w-7xl mx-auto relative">
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="text-center mb-16"
    >
      <div className="inline-block mb-4">
        <span className="text-sm font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-violet-600/20 to-cyan-600/20 text-violet-300 border border-violet-500/20">
          ABOUT ME
        </span>
      </div>
      <h2 className="text-5xl md:text-6xl font-bold mb-6">
        <span className="text-gray-300">Senior </span>
        <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
          Full Stack Developer
        </span>
        <span className="text-gray-300"> & </span>
        <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
          Tech Lead
        </span>
      </h2>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto">
        With 5+ years of experience building scalable applications and leading development teams
      </p>
    </motion.div>

    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Professional Photo Container */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="relative max-w-md mx-auto">
          {/* Professional Photo with Cosmic Effects */}
          <div className="relative w-80 h-80 mx-auto mb-8 group">
            {/* Animated Background Ring */}
            <motion.div
              className="absolute -inset-4 rounded-full border-2 border-violet-500/30"
              animate={{
                rotate: 360,
                scale: [1, 1.05, 1],
              }}
              transition={{
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                },
                scale: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
            
            {/* Photo Container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 group-hover:border-cyan-500/40 transition-all duration-500">
              {/* Professional Image */}
              <Image 
                src="/ais.jpeg" 
                alt="Abdullah -  Full Stack Developer"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 320px, 320px"
                priority
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Cosmic Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Floating Tech Badges */}
            {techStack.slice(0, 4).map((tech, i) => (
              <motion.div
                key={tech.label}
                className="absolute w-12 h-12 rounded-full glass-dark border border-white/10 flex items-center justify-center backdrop-blur-sm"
                style={{
                  left: `${Math.cos(i * Math.PI / 2) * 100 + 50}%`,
                  top: `${Math.sin(i * Math.PI / 2) * 100 + 50}%`,
                }}
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
                onMouseEnter={() => playSound('hover')}
              >
                <div className="text-lg text-cyan-300">
                  {tech.icon}
                </div>
              </motion.div>
            ))}

            {/* Experience Badge */}
            <motion.div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="px-6 py-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-bold text-sm shadow-lg shadow-violet-500/30">
                1+ Years Experience
              </div>
            </motion.div>
          </div>

          {/* Tech Specialties */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { 
                value: 'Python', 
                sub: 'Backend Expert', 
                color: 'from-blue-500 to-cyan-500',
                icon: <SiPython className="text-lg" />
              },
              { 
                value: 'React', 
                sub: 'Frontend Pro', 
                color: 'from-cyan-500 to-blue-500',
                icon: <FaReact className="text-lg" />
              },
              { 
                value: 'Cloud', 
                sub: 'AWS & Azure', 
                color: 'from-violet-500 to-purple-500',
                icon: <FaCloud className="text-lg" />
              },
            ].map((tech, i) => (
              <motion.div
                key={tech.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative overflow-hidden rounded-xl p-4 text-center group cursor-pointer"
                onMouseEnter={() => playSound('hover')}
                whileHover={{ y: -4 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-10`} />
                <div className="relative">
                  <div className={`flex justify-center mb-2 ${tech.color.includes('blue') ? 'text-blue-400' : tech.color.includes('cyan') ? 'text-cyan-400' : 'text-violet-400'}`}>
                    {tech.icon}
                  </div>
                  <div className="text-sm font-bold text-white mb-1">{tech.value}</div>
                  <div className="text-xs text-gray-400">{tech.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* About Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        {/* Main About Card */}
        <div className="glass-dark rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
            <FaUser className="text-violet-400" />
            Professional Profile
          </h3>
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              I'm a <span className="text-violet-400 font-semibold"> Full Stack Developer</span> with 
              extensive experience in <span className="text-cyan-400 font-semibold">Python, JavaScript, React, and cloud technologies</span>. 
              My expertise spans across building scalable applications, implementing microservices architecture, 
              and leading development teams.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I specialize in <span className="text-teal-400 font-semibold">AI/ML integration</span>, 
              <span className="text-indigo-400 font-semibold"> DevOps practices</span>, and 
              <span className="text-pink-400 font-semibold"> cloud-native development</span>. 
              Passionate about clean code, best practices, and mentoring junior developers.
            </p>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { 
              icon: <FaLayerGroup />, 
              title: 'Full Stack', 
              desc: 'End-to-end development', 
              color: 'text-violet-400', 
              bg: 'from-violet-500/10 to-purple-500/10' 
            },
            { 
              icon: <FaCloud />, 
              title: 'Cloud Native', 
              desc: 'AWS & Azure expertise', 
              color: 'text-cyan-400', 
              bg: 'from-cyan-500/10 to-blue-500/10' 
            },
            { 
              icon: <FaBrain />, 
              title: 'AI/ML', 
              desc: 'Machine learning integration', 
              color: 'text-teal-400', 
              bg: 'from-teal-500/10 to-emerald-500/10' 
            },
            { 
              icon: <FaUsers />, 
              title: 'Team Leadership', 
              desc: 'Project management', 
              color: 'text-indigo-400', 
              bg: 'from-indigo-500/10 to-violet-500/10' 
            },
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`relative overflow-hidden rounded-xl p-4 group cursor-pointer bg-gradient-to-br ${feature.bg}`}
              onMouseEnter={() => playSound('hover')}
            >
              <div className="flex items-start gap-3">
                <div className={`text-2xl ${feature.color} p-2 rounded-lg bg-white/5`}>
                  {feature.icon}
                </div>
                <div>
                  <div className="font-bold text-white">{feature.title}</div>
                  <div className="text-sm text-gray-400">{feature.desc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { value: '50+', label: 'Projects', color: 'text-violet-400' },
            { value: '100%', label: 'Client Satisfaction', color: 'text-cyan-400' },
            { value: '10+', label: 'Teams Led', color: 'text-teal-400' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-4 rounded-xl glass-dark border border-white/10"
            >
              <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 rounded-xl glass-dark border border-white/10 hover:border-cyan-500/30 transition-all flex items-center justify-center gap-3 group"
          onMouseEnter={() => playSound('hover')}
          onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <FaBriefcase className="text-cyan-400 group-hover:translate-x-1 transition-transform" />
          <span className="font-bold">View Full Experience</span>
        </motion.button>
      </motion.div>
    </div>
  </div>
</section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen px-4 md:px-8 lg:px-16 py-20 relative">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            >
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full border border-violet-500/10"
                  style={{
                    width: `${400 + i * 200}px`,
                    height: `${400 + i * 200}px`,
                  }}
                />
              ))}
            </motion.div>
          </div>

          <div className="max-w-7xl mx-auto relative">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-cyan-600/20 to-blue-600/20 text-cyan-300 border border-cyan-500/20">
                  TECHNICAL SKILLS
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-gray-300">Expertise in </span>
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  Modern Technologies
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Proficient in a wide range of technologies across frontend, backend, cloud, and DevOps
              </p>
            </motion.div>

            {/* Skills Grid */}
            <div className="space-y-16">
              {['AI & ML', 'Backend', 'Frontend', 'Database', 'DevOps & Cloud', 'Tools', 'Emerging Tech'].map((category, catIndex) => {
                const categorySkills = techStack.filter(s => s.category === category);
                if (categorySkills.length === 0) return null;
                
                return (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 }}
                  >
                    {/* Category Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-8 rounded-full ${
                          category === 'AI & ML' ? 'bg-gradient-to-b from-pink-500 to-rose-500' :
                          category === 'Backend' ? 'bg-gradient-to-b from-violet-500 to-purple-500' :
                          category === 'Frontend' ? 'bg-gradient-to-b from-cyan-500 to-blue-500' :
                          category === 'Database' ? 'bg-gradient-to-b from-teal-500 to-emerald-500' :
                          category === 'DevOps & Cloud' ? 'bg-gradient-to-b from-orange-500 to-amber-500' :
                          category === 'Tools' ? 'bg-gradient-to-b from-indigo-500 to-violet-500' :
                          'bg-gradient-to-b from-lime-500 to-green-500'
                        }`} />
                        <h3 className="text-2xl font-bold text-white">{category}</h3>
                      </div>
                      <div className="px-3 py-1 rounded-full text-sm glass-dark">
                        {categorySkills.length} technologies
                      </div>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {categorySkills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.label}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: (catIndex + skillIndex) * 0.05 }}
                          whileHover={{ y: -6, scale: 1.02 }}
                          onMouseEnter={() => playSound('hover')}
                          className="group relative overflow-hidden rounded-xl p-4 glass-dark hover:border-white/20 transition-all cursor-pointer"
                        >
                          {/* Skill Icon */}
                          <motion.div
                            className="text-3xl mb-4 flex justify-center"
                            animate={{
                              y: [0, -4, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: skillIndex * 0.2,
                            }}
                          >
                            {skill.icon}
                          </motion.div>
                          
                          {/* Skill Info */}
                          <div className="text-center">
                            <div className="font-bold text-white mb-2">{skill.label}</div>
                            
                            {/* Progress Bar */}
                            <div className="relative h-2 rounded-full overflow-hidden bg-white/5 mb-2">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className={`absolute inset-0 rounded-full ${
                                  category === 'AI & ML' ? 'bg-gradient-to-r from-pink-500 to-rose-500' :
                                  category === 'Backend' ? 'bg-gradient-to-r from-violet-500 to-purple-500' :
                                  category === 'Frontend' ? 'bg-gradient-to-r from-cyan-500 to-blue-500' :
                                  category === 'Database' ? 'bg-gradient-to-r from-teal-500 to-emerald-500' :
                                  category === 'DevOps & Cloud' ? 'bg-gradient-to-r from-orange-500 to-amber-500' :
                                  category === 'Tools' ? 'bg-gradient-to-r from-indigo-500 to-violet-500' :
                                  'bg-gradient-to-r from-lime-500 to-green-500'
                                }`}
                              />
                            </div>
                            
                            <div className="text-xs text-gray-400">
                              {skill.level}% proficiency
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen px-4 md:px-8 lg:px-16 py-20 relative">
          {/* Background Animation */}
          <div className="absolute inset-0">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: 360,
                }}
                transition={{
                  duration: 20 + i * 10,
                  repeat: Infinity,
                  ease: "linear",
                  scale: {
                    duration: 3,
                    repeat: Infinity,
                  }
                }}
              >
                <div 
                  className="rounded-full border border-cyan-500/10"
                  style={{
                    width: `${300 + i * 200}px`,
                    height: `${300 + i * 200}px`,
                  }}
                />
              </motion.div>
            ))}
          </div>

          <div className="max-w-7xl mx-auto relative">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 border border-purple-500/20">
                  PROJECT PORTFOLIO
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-gray-300">Featured </span>
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  Projects
                </span>
                <span className="text-gray-300"> & </span>
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Applications
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Real-world applications built with modern technologies and best practices
              </p>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative"
                  onMouseEnter={() => playSound('hover')}
                >
                  {/* Project Card */}
                  <div className="relative h-full rounded-2xl overflow-hidden glass-dark border border-white/10 group-hover:border-cyan-500/30 transition-all">
                    {/* Project Header */}
                    <div className="relative h-48 overflow-hidden">
                      {/* Animated Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`}>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            className="text-6xl text-white/20"
                            animate={{
                              rotate: 360,
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              rotate: {
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                              },
                              scale: {
                                duration: 3,
                                repeat: Infinity,
                              }
                            }}
                          >
                            {project.icon}
                          </motion.div>
                        </div>
                      </div>
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      
                      {/* Project Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full text-xs font-medium glass-dark border border-white/10">
                          Project #{index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} bg-opacity-10`}>
                          <div className="text-2xl text-white">
                            {project.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                          <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full text-xs glass-dark text-gray-300 border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Project Links */}
                      <div className="flex gap-3">
                        <motion.a
                          href={project.github}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => playSound('click')}
                          className="flex-1"
                        >
                          <button className="w-full py-2.5 rounded-lg glass-dark text-sm font-medium hover:bg-white/5 transition-colors">
                            View Code
                          </button>
                        </motion.a>
                        <motion.a
                          href={project.live}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => playSound('click')}
                          className="flex-1"
                        >
                          <button className={`w-full py-2.5 rounded-lg bg-gradient-to-r ${project.color} text-sm font-bold hover:opacity-90 transition-opacity`}>
                            Live Demo
                          </button>
                        </motion.a>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View All Projects */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass-dark border border-white/10 hover:border-cyan-500/30 transition-all group"
                onMouseEnter={() => playSound('hover')}
              >
                <FaEye className="text-cyan-400" />
                <span className="font-bold">View All Projects</span>
                <span className="px-2 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400">
                  {projects.length}+
                </span>
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen px-4 md:px-8 lg:px-16 py-20 relative">
          {/* Background Grid */}
          <div className="absolute inset-0">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
                backgroundSize: '80px 80px',
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto relative">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-teal-600/20 to-emerald-600/20 text-teal-300 border border-teal-500/20">
                  WORK EXPERIENCE
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-gray-300">Professional </span>
                <span className="bg-gradient-to-r from-violet-400 to-teal-400 bg-clip-text text-transparent">
                  Career Timeline
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                My journey through various roles and responsibilities in the tech industry
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-violet-500 via-cyan-500 to-teal-500" />

              {/* Timeline Items */}
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.role}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 flex items-center justify-center z-10">
                      <motion.div
                        className="w-6 h-6 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 border-4 border-[#0A0A0F]"
                        animate={{
                          scale: [1, 1.2, 1],
                          boxShadow: [
                            '0 0 0 0 rgba(139, 92, 246, 0)',
                            '0 0 0 10px rgba(139, 92, 246, 0.1)',
                            '0 0 0 0 rgba(139, 92, 246, 0)',
                          ],
                        }}
                        transition={{
                          scale: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          },
                          boxShadow: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="rounded-2xl p-6 glass-dark border border-white/10 hover:border-cyan-500/30 transition-all"
                        onMouseEnter={() => playSound('hover')}
                      >
                        {/* Header */}
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                            <div className="text-cyan-400 font-medium">{exp.company}</div>
                          </div>
                          <div className="px-3 py-1 rounded-full text-sm glass-dark">
                            {exp.period}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 mb-4">{exp.description}</p>

                        {/* Achievements */}
                        {exp.achievements && (
                          <div className="mb-4">
                            <div className="text-sm text-gray-400 mb-2">Key Achievements:</div>
                            <div className="space-y-1">
                              {exp.achievements.map((achievement, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm">
                                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                                  <span className="text-gray-300">{achievement}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-full text-xs bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen px-4 md:px-8 lg:px-16 py-20 relative">
          {/* Background Effects */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </div>

          <div className="max-w-7xl mx-auto relative">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-indigo-600/20 text-blue-300 border border-blue-500/20">
                  GET IN TOUCH
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-gray-300">Let's </span>
                <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                  Connect & Collaborate
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Interested in working together? Feel free to reach out for opportunities
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Info Card */}
                <div className="rounded-2xl p-8 glass-dark border border-white/10">
                  <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                    <FaCompass className="text-cyan-400" />
                    Contact Information
                  </h3>
                  
                  <div className="space-y-4">
                    {[
                      { icon: <FaEnvelope />, label: 'Email', value: 'abdullahibnasiddiquie12688@gmail.com', color: 'text-cyan-400', bg: 'from-cyan-500/10 to-blue-500/10' },
                      { icon: <FaGithub />, label: 'GitHub', value: 'github.com/Funcoder-MADARA', color: 'text-violet-400', bg: 'from-violet-500/10 to-purple-500/10' },
                      { icon: <FaLinkedin />, label: 'LinkedIn', value: 'linkedin.com/in/abdullah-ibna-siddiquie-6419252ab/', color: 'text-blue-400', bg: 'from-blue-500/10 to-indigo-500/10' },
                      { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Open to Remote / On-site', color: 'text-teal-400', bg: 'from-teal-500/10 to-emerald-500/10' },
                    ].map((item) => (
                      <motion.div
                        key={item.label}
                        whileHover={{ x: 4 }}
                        className={`flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r ${item.bg} cursor-pointer`}
                        onMouseEnter={() => playSound('hover')}
                      >
                        <div className={`text-xl ${item.color} p-3 rounded-lg bg-white/5`}>
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">{item.label}</div>
                          <div className="text-white font-medium">{item.value}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="rounded-2xl p-8 glass-dark border border-white/10">
                  <h3 className="text-2xl font-bold mb-6 text-white">Connect With Me</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {socialLinks.map((link) => (
                      <motion.a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => playSound('click')}
                        className={`p-4 rounded-xl flex flex-col items-center justify-center glass-dark border border-white/10 hover:border-violet-500/30 ${link.color} transition-all`}
                      >
                        <div className="text-2xl mb-2">{link.icon}</div>
                        <div className="text-xs text-gray-300">{link.label}</div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl p-8 glass-dark border border-white/10"
              >
                <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Message
                    </label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-teal-500 focus:outline-none transition-colors resize-none"
                      placeholder="Your message here..."
                    />
                  </div>
                  <motion.button 
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onMouseEnter={() => playSound('hover')}
                    onClick={() => playSound('click')}
                    className="w-full py-4 rounded-lg bg-gradient-to-r from-violet-600 via-cyan-600 to-blue-600 text-white font-bold hover:shadow-2xl hover:shadow-cyan-500/40 transition-all"
                  >
                    <span className="flex items-center justify-center gap-3">
                      <FaPaperPlane />
                      Send Message
                    </span>
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-4 md:px-8 lg:px-16 py-12 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {/* Logo & About */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-10 h-10">
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600 to-cyan-600"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="absolute inset-1 rounded-full bg-[#0A0A0F] flex items-center justify-center">
                      <FaCode className="text-xl text-violet-400" />
                    </div>
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                    ABDULLAH
                  </span>
                </div>
                <p className="text-gray-400 text-sm">
                   Full Stack Developer • AI/ML  • System  Architect
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
                <div className="space-y-2">
                  {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                    <button
                      key={item}
                      onClick={() => document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' })}
                      className="block text-gray-400 hover:text-white transition-colors capitalize"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-lg font-bold text-white mb-4">Core Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.slice(0, 6).map((tech) => (
                    <span key={tech.label} className="px-2 py-1 text-xs rounded-full bg-white/5 text-gray-400">
                      {tech.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="text-lg font-bold text-white mb-4">Newsletter</h4>
                <div className="space-y-3">
                  <p className="text-sm text-gray-400">
                    Subscribe for updates on new projects and articles
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none"
                    />
                    <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-600 text-sm font-bold">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-500">
                © {new Date().getFullYear()} Abdullah. All rights reserved.
                <div className="mt-1 text-xs">
                  Built with Next.js, TypeScript, Tailwind CSS & Framer Motion
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                {socialLinks.slice(0, 4).map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onMouseEnter={() => playSound('hover')}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full glass-dark border border-white/10 flex items-center justify-center hover:border-cyan-500/30 transition-all"
      >
        <FaArrowUp className="text-cyan-400" />
      </motion.button>
    </div>
  );
}