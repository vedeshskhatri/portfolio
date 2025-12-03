import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Palette, X } from 'lucide-react';
import { useTheme, ThemeType, themes } from '../contexts/ThemeContext';

export default function ThemeToggler() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const themeIcons: Record<ThemeType, string> = {
    light: '☀️',
    sunset: '🌅',
    ocean: '🌊',
    forest: '🌲',
    purple: '🌙',
    black: '⚫',
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 180 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-shadow"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Palette className="w-6 h-6" />}
      </motion.button>

      {/* Theme Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-1/2 right-8 -translate-y-1/2 z-50 w-80 p-6 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-purple-500/30 shadow-2xl"
            >
              <h3 className="text-2xl mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Choose Theme
              </h3>

              <div className="space-y-3">
                {Object.entries(themes).map(([key, themeData]) => (
                  <motion.button
                    key={key}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setTheme(key as ThemeType);
                      setIsOpen(false);
                    }}
                    className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                      theme === key
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg'
                        : 'bg-slate-800/50 hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{themeIcons[key as ThemeType]}</span>
                        <span className="text-lg">{themeData.name}</span>
                      </div>
                      {theme === key && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-3 h-3 rounded-full bg-white"
                        />
                      )}
                    </div>

                    {/* Theme Preview */}
                    <div className="mt-3 flex gap-2">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${themeData.accent1}`} />
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${themeData.accent2}`} />
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${themeData.accent3}`} />
                    </div>
                  </motion.button>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-6 pt-6 border-t border-gray-700"
              >
                <p className="text-sm text-gray-400 text-center">
                  Theme will be saved automatically
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
