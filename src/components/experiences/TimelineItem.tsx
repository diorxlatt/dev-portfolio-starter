import React from 'react';
import { Experience } from '../../types/experience';
import { formatDate } from '../../utils/dateUtils';

interface TimelineItemProps {
  experience: Experience;
}

export function TimelineItem({ experience }: TimelineItemProps) {
  const endDate = experience.endDate === 'present' ? 'Presente' : formatDate(experience.endDate);
  
  return (
    <div className="relative pl-8 pb-8">
      <div className="absolute left-0 top-0 mt-1.5 -ml-1.5 h-3 w-3 rounded-full border-2 
        border-blue-600 bg-white dark:bg-gray-900"></div>
      <div className="absolute left-0 top-0 mt-3 h-full w-0.5 bg-blue-200 
        dark:bg-blue-900"></div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 
        transition-transform hover:scale-102 duration-300">
        <div className="flex flex-wrap justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {experience.company}
          </h3>
          <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
            {formatDate(experience.startDate)} - {endDate}
          </span>
        </div>
        
        <div className="mb-2">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {experience.role}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {experience.type} • {experience.location}
          </p>
        </div>

        <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
          {experience.responsibilities.map((responsibility, index) => (
            <li key={index} className="text-sm">
              {responsibility}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}