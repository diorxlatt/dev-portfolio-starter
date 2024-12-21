import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-100 dark:bg-dark-800 
        hover:bg-gray-200 dark:hover:bg-dark-700
        transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400
        group relative"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      <div className="relative w-6 h-6 transform transition-transform duration-300">
        {theme === 'dark' ? (
          <Sun className="w-6 h-6 text-yellow-500 absolute inset-0 transform group-hover:rotate-90 transition-transform duration-300" />
        ) : (
          <Moon className="w-6 h-6 text-primary-600 absolute inset-0 transform group-hover:-rotate-12 transition-transform duration-300" />
        )}
      </div>
    </button>
  );
}