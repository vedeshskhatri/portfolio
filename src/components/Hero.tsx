import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function Hero() {
  const { currentTheme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto text-center relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <motion.div
            className={`inline-block px-6 py-2 rounded-full bg-gradient-to-r ${currentTheme.accent1.replace('from-', 'from-').replace('to-', 'to-')}/20 border ${currentTheme.cardBorder} mb-8`}
            whileHover={{ scale: 1.05 }}
          >
            <span className={currentTheme.textSecondary}>Welcome to my portfolio</span>
          </motion.div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl lg:text-9xl mb-6"
        >
          <span className={`bg-gradient-to-r ${currentTheme.accent1} bg-clip-text text-transparent inline-block`}>
            Vedesh S Khatri
          </span>
        </motion.h1>

        <motion.div variants={itemVariants} className="space-y-4 mb-12">
          <motion.p
            className={`text-2xl md:text-4xl ${currentTheme.textSecondary}`}
            animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            CSE - AI/ML Student
          </motion.p>
          <p className={`text-lg md:text-xl ${currentTheme.textSecondary}`}>
            1st Year | Future AI Engineer | Tech Enthusiast
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center gap-6 mb-16">
          {[
            { icon: Github, link: '#' },
            { icon: Linkedin, link: '#' },
            { icon: Twitter, link: '#' },
            { icon: Mail, link: '#' },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className={`p-4 rounded-full bg-gradient-to-br ${currentTheme.accent2}/20 border ${currentTheme.cardBorder} hover:border-opacity-60 transition-colors`}
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${currentTheme.glowColor}` }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 rounded-full bg-gradient-to-r ${currentTheme.accent1} hover:opacity-90 transition-all`}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 rounded-full border-2 ${currentTheme.cardBorder} hover:opacity-80 transition-all`}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        <motion.div
          animate={floatingAnimation}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ArrowDown className={`w-8 h-8 ${currentTheme.textSecondary}`} />
        </motion.div>
      </motion.div>

      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
    </section>
  );
}
