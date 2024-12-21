import React from 'react';
import { NavigationProvider } from './navigation/NavigationContext';
import { MenuTrigger } from './navigation/MenuTrigger';
import { MobileMenu } from './navigation/MobileMenu';
import { useNavigation } from './navigation/NavigationContext';

function NavigationContent() {
  const { isOpen, setIsOpen, isHovered } = useNavigation();

  return (
    <nav className="fixed top-0 right-0 z-40 p-4">
      <MenuTrigger />
      <MobileMenu 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
      />
    </nav>
  );
}

export function Navigation() {
  return (
    <NavigationProvider>
      <NavigationContent />
    </NavigationProvider>
  );
}