import React, { useState } from 'react';

export function ProfileImage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-48 h-48 mx-auto cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={import.meta.env.VITE_PROFILE_IMAGE}
        alt="Roberto Zonno"
        className={`absolute inset-0 w-full h-full rounded-full shadow-lg border-4 
          border-white dark:border-gray-700 object-cover transition-opacity duration-300 
          ${isHovered ? 'opacity-0' : 'opacity-100'}`}
      />
      <img
        src={import.meta.env.VITE_PROFILE_IMAGE_HOVER}
        alt="Roberto Zonno Alternative"
        className={`absolute inset-0 w-full h-full rounded-full shadow-lg border-4 
          border-white dark:border-gray-700 object-cover transition-opacity duration-300 
          ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      />
      <div className="absolute inset-0 rounded-full bg-blue-500/20 opacity-0 
        group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-0 rounded-full transform scale-105 opacity-0 
        group-hover:opacity-100 transition-all duration-300 
        bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
    </div>
  );
}