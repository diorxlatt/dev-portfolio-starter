import React from 'react';
import { Timeline } from '../components/experiences/Timeline';
import { experiences } from '../data/experiences';
import { Briefcase } from 'lucide-react';

export function Esperienze() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Briefcase className="w-10 h-10 text-blue-600 dark:text-blue-400" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Professional Experience
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          My professional journey, from educational experiences to recent projects
        </p>
      </div>
      
      <Timeline experiences={experiences} />
    </div>
  );
}