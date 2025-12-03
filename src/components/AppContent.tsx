import { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import FloatingShapes from './FloatingShapes';
import CustomCursor from './CustomCursor';
import ThemeToggler from './ThemeToggler';

export default function AppContent() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { currentTheme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`relative min-h-screen bg-gradient-to-br ${currentTheme.bgGradient} ${currentTheme.textPrimary} overflow-hidden transition-colors duration-500`}>
      <CustomCursor mousePosition={mousePosition} />
      <FloatingShapes />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ThemeToggler />
      
      {/* Gradient Orbs */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div 
          className="absolute w-96 h-96 rounded-full blur-3xl transition-all duration-500"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            backgroundColor: currentTheme.glowColor,
            transition: 'all 0.3s ease-out'
          }}
        />
      </div>
    </div>
  );
}
