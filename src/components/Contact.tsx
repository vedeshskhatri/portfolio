import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { currentTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'vedesh.khatri@email.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 XXXXX XXXXX',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'India',
    },
  ];

  return (
    <section id="contact" className="relative min-h-screen py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className={`text-5xl md:text-7xl mb-6 bg-gradient-to-r ${currentTheme.accent1} bg-clip-text text-transparent`}>
            Get In Touch
          </h2>
          <p className={`text-xl ${currentTheme.textSecondary} max-w-3xl mx-auto`}>
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className={`text-3xl mb-6 ${currentTheme.textPrimary}`}>Let's talk about everything!</h3>
              <p className={`${currentTheme.textSecondary} text-lg mb-8`}>
                Don't hesitate to send me a message. Whether it's about a project, 
                collaboration, or just to say hi, I'm always happy to connect!
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${index === 0 ? currentTheme.accent1 : index === 1 ? currentTheme.accent2 : currentTheme.accent3} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="w-7 h-7" />
                </div>
                <div>
                  <p className={`${currentTheme.textSecondary} text-sm`}>{info.title}</p>
                  <p className={`text-lg ${currentTheme.textPrimary}`}>{info.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Animated Decoration */}
            <motion.div
              className="relative h-64 mt-12"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="absolute inset-0 rounded-3xl blur-3xl" 
                style={{ backgroundColor: currentTheme.glowColor }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className={`w-32 h-32 bg-gradient-to-r ${currentTheme.accent2} rounded-full opacity-30 blur-2xl`}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className={`block text-sm mb-2 ${currentTheme.textSecondary}`}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-6 py-4 ${currentTheme.cardBg} border ${currentTheme.cardBorder} rounded-xl focus:border-opacity-50 focus:outline-none transition-all duration-300 ${currentTheme.textPrimary}`}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className={`block text-sm mb-2 ${currentTheme.textSecondary}`}>
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-6 py-4 ${currentTheme.cardBg} border ${currentTheme.cardBorder} rounded-xl focus:border-opacity-50 focus:outline-none transition-all duration-300 ${currentTheme.textPrimary}`}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm mb-2 ${currentTheme.textSecondary}`}>
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-6 py-4 ${currentTheme.cardBg} border ${currentTheme.cardBorder} rounded-xl focus:border-opacity-50 focus:outline-none transition-all duration-300 resize-none ${currentTheme.textPrimary}`}
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: `0 0 30px ${currentTheme.glowColor}` }}
                whileTap={{ scale: 0.98 }}
                className={`w-full px-8 py-4 bg-gradient-to-r ${currentTheme.accent1} rounded-xl flex items-center justify-center gap-3 hover:opacity-90 transition-all duration-300`}
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-32 text-center"
        >
          <p className={currentTheme.textSecondary}>
            © 2025 Vedesh S Khatri. Crafted with passion and code.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
