import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Brain, Rocket, Target } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { currentTheme } = useTheme();

  const cards = [
    {
      icon: Code2,
      title: 'Passionate Developer',
      description: 'Love building innovative solutions with cutting-edge technologies',
    },
    {
      icon: Brain,
      title: 'AI/ML Enthusiast',
      description: 'Deep diving into artificial intelligence and machine learning',
    },
    {
      icon: Rocket,
      title: 'Quick Learner',
      description: 'Always exploring new tech stacks and frameworks',
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on creating impactful and meaningful projects',
    },
  ];

  return (
    <section id="about" className="relative min-h-screen py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className={`text-5xl md:text-7xl mb-6 bg-gradient-to-r ${currentTheme.accent1} bg-clip-text text-transparent`}>
            About Me
          </h2>
          <p className={`text-xl ${currentTheme.textSecondary} max-w-3xl mx-auto`}>
            A passionate first-year CSE-AIML student on a mission to master artificial intelligence 
            and create innovative solutions that make a difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                style={{
                  backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                }}
              />
              <div className={`relative p-8 rounded-2xl ${currentTheme.cardBg} backdrop-blur-sm border ${currentTheme.cardBorder} group-hover:border-opacity-50 transition-all duration-300`}>
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${index === 0 ? currentTheme.accent1 : index === 1 ? currentTheme.accent2 : index === 2 ? currentTheme.accent3 : currentTheme.accent1} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <card.icon className="w-8 h-8" />
                </div>
                <h3 className={`text-xl mb-3 ${currentTheme.textPrimary}`}>{card.title}</h3>
                <p className={currentTheme.textSecondary}>{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`relative p-12 rounded-3xl bg-gradient-to-r ${currentTheme.accent1}/10 border ${currentTheme.cardBorder} backdrop-blur-sm`}
        >
          <div className="relative z-10">
            <h3 className={`text-3xl mb-6 bg-gradient-to-r ${currentTheme.accent2} bg-clip-text text-transparent`}>
              My Journey
            </h3>
            <p className={`${currentTheme.textPrimary} text-lg leading-relaxed mb-4`}>
              As a first-year CSE-AIML student, I'm at the beginning of an exciting journey into the world 
              of computer science and artificial intelligence. Every day brings new challenges and opportunities 
              to learn and grow.
            </p>
            <p className={`${currentTheme.textPrimary} text-lg leading-relaxed`}>
              I'm passionate about leveraging technology to solve real-world problems and I'm constantly 
              exploring new tools, frameworks, and methodologies. My goal is to become a skilled AI engineer 
              who can contribute to the advancement of intelligent systems.
            </p>
          </div>
          
          {/* Animated Background Pattern */}
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl"
            style={{ backgroundColor: currentTheme.glowColor }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
