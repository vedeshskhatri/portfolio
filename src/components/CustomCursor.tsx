import { motion } from 'motion/react';
import { useTheme } from '../contexts/ThemeContext';

interface CustomCursorProps {
  mousePosition: { x: number; y: number };
}

export default function CustomCursor({ mousePosition }: CustomCursorProps) {
  const { theme } = useTheme();

  // Hide custom cursor on light theme for better usability
  if (theme === 'light') {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed w-4 h-4 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          backgroundColor: theme === 'black' ? '#ffffff' : '#a855f7',
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      />
      
      {/* Cursor ring */}
      <motion.div
        className="fixed w-8 h-8 border-2 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          borderColor: theme === 'black' ? '#ffffff' : '#a855f7',
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
        }}
      />
    </>
  );
}
