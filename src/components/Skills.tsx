import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { currentTheme } = useTheme();

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'JavaScript', level: 75 },
        { name: 'Java', level: 70 },
        { name: 'C++', level: 65 },
      ],
    },
    {
      title: 'AI/ML Technologies',
      skills: [
        { name: 'TensorFlow', level: 60 },
        { name: 'PyTorch', level: 55 },
        { name: 'Scikit-learn', level: 70 },
        { name: 'Pandas & NumPy', level: 75 },
      ],
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'React', level: 80 },
        { name: 'Node.js', level: 65 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', level: 80 },
        { name: 'VS Code', level: 90 },
        { name: 'Linux', level: 60 },
        { name: 'Figma', level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="relative min-h-screen py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className={`text-5xl md:text-7xl mb-6 bg-gradient-to-r ${currentTheme.accent2} bg-clip-text text-transparent`}>
            Skills & Expertise
          </h2>
          <p className={`text-xl ${currentTheme.textSecondary} max-w-3xl mx-auto`}>
            Technologies and tools I'm learning and working with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="relative group"
            >
              <div className={`p-8 rounded-2xl ${currentTheme.cardBg} backdrop-blur-sm border ${currentTheme.cardBorder} group-hover:border-opacity-50 transition-all duration-300`}>
                <h3 className={`text-2xl mb-8 bg-gradient-to-r ${currentTheme.accent3} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className={currentTheme.textPrimary}>{skill.name}</span>
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : {}}
                          transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                          className={currentTheme.textSecondary}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className={`h-2 ${currentTheme.cardBg} rounded-full overflow-hidden border ${currentTheme.cardBorder}`}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.1 + skillIndex * 0.1,
                            ease: 'easeOut',
                          }}
                          className={`h-full bg-gradient-to-r ${currentTheme.accent2} rounded-full relative`}
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/30"
                            animate={{
                              x: ['-100%', '100%'],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: 'linear',
                            }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" 
                style={{ backgroundColor: currentTheme.glowColor }} />
            </motion.div>
          ))}
        </div>

        {/* Floating Icons Animation */}
        <motion.div className="mt-20 flex justify-center flex-wrap gap-8">
          {['🤖', '💻', '🚀', '⚡', '🎯', '🔥'].map((emoji, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? {
                opacity: 1,
                scale: 1,
                y: [0, -20, 0],
              } : {}}
              transition={{
                opacity: { duration: 0.5, delay: index * 0.1 },
                scale: { duration: 0.5, delay: index * 0.1 },
                y: {
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: 'easeInOut',
                },
              }}
              className="text-6xl"
            >
              {emoji}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
