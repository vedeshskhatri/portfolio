import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useTheme } from '../contexts/ThemeContext';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { currentTheme } = useTheme();

  const projects = [
    {
      title: 'AI Image Classifier',
      description: 'Deep learning model that classifies images using CNN architecture with 95% accuracy',
      tags: ['Python', 'TensorFlow', 'CNN', 'Keras'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    },
    {
      title: 'Smart Chatbot',
      description: 'NLP-powered chatbot with context awareness and sentiment analysis capabilities',
      tags: ['Python', 'NLP', 'NLTK', 'Flask'],
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop',
    },
    {
      title: 'Portfolio Dashboard',
      description: 'Interactive data visualization dashboard with real-time analytics and insights',
      tags: ['React', 'D3.js', 'TypeScript', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    },
    {
      title: 'ML Price Predictor',
      description: 'Machine learning model that predicts prices using regression algorithms',
      tags: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    },
    {
      title: 'Task Management App',
      description: 'Modern productivity app with drag-and-drop functionality and cloud sync',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop',
    },
    {
      title: 'Weather Forecast AI',
      description: 'AI-powered weather prediction system using historical data and ML algorithms',
      tags: ['Python', 'PyTorch', 'APIs', 'Data Science'],
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
    },
  ];

  return (
    <section id="projects" className="relative min-h-screen py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className={`text-5xl md:text-7xl mb-6 bg-gradient-to-r ${currentTheme.accent3} bg-clip-text text-transparent`}>
            Featured Projects
          </h2>
          <p className={`text-xl ${currentTheme.textSecondary} max-w-3xl mx-auto`}>
            Some of my recent work and experiments in AI/ML and web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className={`relative overflow-hidden rounded-2xl ${currentTheme.cardBg} backdrop-blur-sm border ${currentTheme.cardBorder} group-hover:border-opacity-50 transition-all duration-300`}>
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${index % 3 === 0 ? currentTheme.accent1 : index % 3 === 1 ? currentTheme.accent2 : currentTheme.accent3} opacity-0 group-hover:opacity-40 transition-opacity duration-300`} />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className={`text-2xl mb-3 bg-gradient-to-r ${currentTheme.accent1} bg-clip-text text-transparent`}>
                    {project.title}
                  </h3>
                  <p className={`${currentTheme.textSecondary} mb-4`}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 text-sm rounded-full ${currentTheme.cardBg} ${currentTheme.textSecondary} border ${currentTheme.cardBorder}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`flex items-center gap-2 ${currentTheme.textSecondary} hover:${currentTheme.textPrimary} transition-colors`}
                    >
                      <Github className="w-5 h-5" />
                      <span>Code</span>
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`flex items-center gap-2 ${currentTheme.textSecondary} hover:${currentTheme.textPrimary} transition-colors`}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Demo</span>
                    </motion.a>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl -z-10"
                  style={{ backgroundColor: currentTheme.glowColor }}
                  initial={false}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
