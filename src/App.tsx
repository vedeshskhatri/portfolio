import { useEffect, useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import FloatingShapes from './components/FloatingShapes';
import CustomCursor from './components/CustomCursor';
import ThemeToggler from './components/ThemeToggler';
import AppContent from './components/AppContent';

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
