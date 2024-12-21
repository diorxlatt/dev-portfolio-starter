import React from 'react';
import { Globe, Music, Book, Plane } from 'lucide-react';

export function PersonalInfo() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <Globe className="w-6 h-6 mr-2" />
          Languages
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <p className="text-gray-700 dark:text-gray-300">
            English (Native)<br />
            Spanish (Fluent)<br />
            French (Intermediate)<br />
            German (Basic)
          </p>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <Music className="w-6 h-6 mr-2" />
          Interests
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <p className="text-gray-700 dark:text-gray-300">
            • Photography and Digital Art<br />
            • Playing Guitar and Piano<br />
            • World Travel and Cultural Exchange<br />
            • Open Source Contributing<br />
            • Hiking and Nature Exploration
          </p>
        </div>
      </div>
    </section>
  );
}