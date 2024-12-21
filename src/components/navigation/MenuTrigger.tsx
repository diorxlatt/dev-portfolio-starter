import React from 'react';
import { Menu } from 'lucide-react';
import { useNavigation } from './NavigationContext';

export function MenuTrigger() {
  const { setIsOpen, setIsHovered } = useNavigation();

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsOpen(true)}
      className="p-3 rounded-lg bg-dark-800/50 hover:bg-dark-700/80
        backdrop-blur-sm transition-all duration-300
        hover:shadow-lg hover:scale-105 focus:outline-none
        focus:ring-2 focus:ring-primary-500 group"
      aria-label="Open menu"
    >
      <Menu className="w-6 h-6 text-gray-300 transition-transform duration-300
        group-hover:rotate-180" />
    </button>
  );
}