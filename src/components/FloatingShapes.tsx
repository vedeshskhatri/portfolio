import { motion } from 'motion/react';
import { useTheme } from '../contexts/ThemeContext';

export default function FloatingShapes() {
  const { currentTheme } = useTheme();

  const shapes = [
    { size: 300, top: '10%', left: '5%', duration: 20 },
    { size: 200, top: '60%', left: '80%', duration: 25 },
    { size: 250, top: '40%', left: '70%', duration: 30 },
    { size: 180, top: '80%', left: '10%', duration: 22 },
    { size: 220, top: '20%', left: '90%', duration: 28 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full blur-3xl"
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            left: shape.left,
            backgroundColor: currentTheme.glowColor,
            opacity: 0.1,
          }}
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -100, 100, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
