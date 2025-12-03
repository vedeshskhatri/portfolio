import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type ThemeType = 'light' | 'sunset' | 'ocean' | 'forest' | 'purple' | 'black';

interface Theme {
  name: string;
  bgGradient: string;
  textPrimary: string;
  textSecondary: string;
  accent1: string;
  accent2: string;
  accent3: string;
  cardBg: string;
  cardBorder: string;
  navBg: string;
  glowColor: string;
}

export const themes: Record<ThemeType, Theme> = {
  light: {
    name: 'Light Mode',
    bgGradient: 'from-gray-50 via-blue-50 to-purple-50',
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-600',
    accent1: 'from-blue-600 to-purple-600',
    accent2: 'from-purple-600 to-pink-600',
    accent3: 'from-pink-600 to-orange-600',
    cardBg: 'bg-white/80',
    cardBorder: 'border-gray-200',
    navBg: 'bg-white/80',
    glowColor: 'rgba(147, 51, 234, 0.3)',
  },
  sunset: {
    name: 'Sunset',
    bgGradient: 'from-orange-950 via-red-950 to-pink-950',
    textPrimary: 'text-orange-50',
    textSecondary: 'text-orange-200',
    accent1: 'from-orange-500 to-red-500',
    accent2: 'from-red-500 to-pink-500',
    accent3: 'from-pink-500 to-rose-500',
    cardBg: 'bg-orange-900/30',
    cardBorder: 'border-orange-500/30',
    navBg: 'bg-orange-950/80',
    glowColor: 'rgba(249, 115, 22, 0.3)',
  },
  ocean: {
    name: 'Ocean',
    bgGradient: 'from-blue-950 via-cyan-950 to-teal-950',
    textPrimary: 'text-cyan-50',
    textSecondary: 'text-cyan-200',
    accent1: 'from-blue-500 to-cyan-500',
    accent2: 'from-cyan-500 to-teal-500',
    accent3: 'from-teal-500 to-emerald-500',
    cardBg: 'bg-blue-900/30',
    cardBorder: 'border-cyan-500/30',
    navBg: 'bg-blue-950/80',
    glowColor: 'rgba(6, 182, 212, 0.3)',
  },
  forest: {
    name: 'Forest',
    bgGradient: 'from-emerald-950 via-green-950 to-teal-950',
    textPrimary: 'text-emerald-50',
    textSecondary: 'text-emerald-200',
    accent1: 'from-emerald-500 to-green-500',
    accent2: 'from-green-500 to-lime-500',
    accent3: 'from-lime-500 to-yellow-500',
    cardBg: 'bg-emerald-900/30',
    cardBorder: 'border-emerald-500/30',
    navBg: 'bg-emerald-950/80',
    glowColor: 'rgba(16, 185, 129, 0.3)',
  },
  purple: {
    name: 'Purple Night',
    bgGradient: 'from-slate-950 via-purple-950 to-slate-950',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-400',
    accent1: 'from-purple-500 to-pink-500',
    accent2: 'from-pink-500 to-cyan-500',
    accent3: 'from-cyan-500 to-purple-500',
    cardBg: 'bg-slate-900/50',
    cardBorder: 'border-purple-500/30',
    navBg: 'bg-slate-950/80',
    glowColor: 'rgba(168, 85, 247, 0.3)',
  },
  black: {
    name: 'Pure Black',
    bgGradient: 'from-black via-gray-950 to-black',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-500',
    accent1: 'from-gray-400 to-gray-600',
    accent2: 'from-gray-600 to-gray-800',
    accent3: 'from-red-600 to-gray-800',
    cardBg: 'bg-black/80',
    cardBorder: 'border-gray-800',
    navBg: 'bg-black/90',
    glowColor: 'rgba(255, 255, 255, 0.1)',
  },
};

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  currentTheme: Theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>('purple');

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') as ThemeType;
    if (savedTheme && themes[savedTheme]) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, currentTheme: themes[theme] }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
