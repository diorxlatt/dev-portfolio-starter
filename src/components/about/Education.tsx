import React from 'react';
import { GraduationCap } from 'lucide-react';

export function Education() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
        <GraduationCap className="w-6 h-6 mr-2" />
        Education
      </h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Bachelor's in Computer Science
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Tech University | 2018
        </p>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          During my academic journey, I participated in numerous internship programs 
          that allowed me to apply theoretical knowledge in practical scenarios and 
          gain valuable industry experience.
        </p>
      </div>
    </section>
  );
}