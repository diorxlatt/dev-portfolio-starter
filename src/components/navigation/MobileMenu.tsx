import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { MenuItem } from './MenuItem';
import { useNavigation } from './NavigationContext';
import { navItems } from './navigationData';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { isHovered } = useNavigation();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen && !isHovered) return null;

  return (
    <div
      className={`fixed inset-y-0 right-0 w-80 bg-dark-900/95 backdrop-blur-lg
        shadow-2xl transform transition-all duration-300 z-50
        ${isOpen ? 'translate-x-0' : 'translate-x-[90%]'}
        ${isHovered && !isOpen ? 'translate-x-[85%] cursor-pointer' : ''}`}
      onMouseEnter={() => !isOpen && isHovered}
      onMouseLeave={() => !isOpen && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <div className="flex flex-col h-full p-4">
        <div className="flex justify-end mb-8">
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-dark-700/50
              transition-colors duration-300 focus:outline-none
              focus:ring-2 focus:ring-primary-500 group"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-gray-300 transition-transform
              duration-300 group-hover:rotate-90" />
          </button>
        </div>

        <nav className="flex-1">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <MenuItem
                key={item.path}
                to={item.path}
                label={item.label}
                index={index}
              />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}