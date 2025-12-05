import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0F0F1A',
        text: {
          light: '#E2E8F0',
          DEFAULT: '#FFFFFF',
        },
        primary: {
          purple: '#8B5CF6',
          blue: '#38BDF8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'warp': 'warp 20s linear infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spin 15s linear infinite reverse',
        'orbit': 'orbit 30s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'orbit-slow': 'orbit-slow 30s linear infinite',
        'warp-drive': 'warp-drive 5s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
        'blackhole-spin': 'blackhole-spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        warp: {
          '0%': { 
            transform: 'scale(1) rotate(0deg)',
            filter: 'blur(0px)',
          },
          '50%': { 
            transform: 'scale(1.05) rotate(180deg)',
            filter: 'blur(1px)',
          },
          '100%': { 
            transform: 'scale(1) rotate(360deg)',
            filter: 'blur(0px)',
          },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 100px rgba(139, 92, 246, 0.3)',
          },
          '50%': { 
            boxShadow: '0 0 150px rgba(56, 189, 248, 0.4)',
          },
        },
        twinkle: {
          '0%, 100%': { 
            opacity: '0.3',
            transform: 'scale(1)',
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(1.2)',
          },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200px 0' },
          '100%': { backgroundPosition: '200px 0' },
        },
        'orbit-slow': {
          '0%': { transform: 'rotate(0deg) translateX(150px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(150px) rotate(-360deg)' },
        },
        'warp-drive': {
          '0%, 100%': { 
            transform: 'scale(1)',
            filter: 'blur(0px) brightness(1)',
          },
          '50%': { 
            transform: 'scale(1.1)',
            filter: 'blur(1px) brightness(1.5)',
          },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 1 },
        },
        'blackhole-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(135deg, #0A0A0F 0%, #111125 100%)',
        'nebula-gradient': 'radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.2), transparent 40%), radial-gradient(circle at 70% 70%, rgba(56, 189, 248, 0.15), transparent 40%)',
        'particle-trail': 'linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.3), transparent)',
        'stellar-gradient': 'linear-gradient(45deg, var(--color-primary-purple), var(--color-primary-blue))',
      },
      borderWidth: {
        '3': '3px',
      },
      boxShadow: {
        'cosmic': '0 0 100px rgba(139, 92, 246, 0.3)',
        'cosmic-lg': '0 0 200px rgba(139, 92, 246, 0.4)',
        'neon': '0 0 20px rgba(139, 92, 246, 0.5)',
        'neon-blue': '0 0 20px rgba(56, 189, 248, 0.5)',
        'blackhole': '0 0 200px rgba(139, 92, 246, 0.5)',
        'blackhole-lg': '0 0 400px rgba(56, 189, 248, 0.3)',
        'warp': '0 0 100px rgba(139, 92, 246, 0.8)',
      },
    },
  },
  plugins: [],
} satisfies Config