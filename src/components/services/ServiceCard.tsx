import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { Service } from '../../types/service';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = Icons[service.icon as keyof typeof Icons];
  const isComingSoon = service.category === 'coming-soon';

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 
      transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg 
        bg-blue-100 dark:bg-blue-900">
        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        {service.title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {service.description}
      </p>
      
      {isComingSoon ? (
        <a
          href={import.meta.env.VITE_DISCORD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 
            bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 
            text-white font-medium rounded-lg transition-colors duration-200"
        >
          Stay Updated
        </a>
      ) : (
        <Link
          to="/contatti"
          className="inline-flex items-center justify-center px-4 py-2 
            bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 
            text-white font-medium rounded-lg transition-colors duration-200"
        >
          Contact Me
        </Link>
      )}
    </div>
  );
}