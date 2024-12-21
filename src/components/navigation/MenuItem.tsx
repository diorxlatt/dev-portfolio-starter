import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigation } from './NavigationContext';

interface MenuItemProps {
  to: string;
  label: string;
  index: number;
}

export function MenuItem({ to, label, index }: MenuItemProps) {
  const location = useLocation();
  const { setIsOpen } = useNavigation();
  const isActive = location.pathname === to;

  return (
    <li
      className="transform transition-all duration-300"
      style={{
        animationDelay: `${index * 50}ms`,
        animation: 'slideIn 0.5s ease forwards'
      }}
    >
      <Link
        to={to}
        onClick={() => setIsOpen(false)}
        className={`block px-6 py-3 rounded-lg text-lg font-medium
          transition-all duration-300 hover:scale-105
          ${isActive 
            ? 'bg-primary-600/20 text-primary-400 hover:bg-primary-600/30' 
            : 'text-gray-300 hover:bg-dark-700/50 hover:text-white'
          }`}
      >
        {label}
      </Link>
    </li>
  );
}