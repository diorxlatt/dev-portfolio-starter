import React, { createContext, useContext, useState } from 'react';

interface NavigationContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isHovered: boolean;
  setIsHovered: (isHovered: boolean) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <NavigationContext.Provider value={{ isOpen, setIsOpen, isHovered, setIsHovered }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
}