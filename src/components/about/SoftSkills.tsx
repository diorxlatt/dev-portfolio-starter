import React from 'react';
import { Users, Clock, Target, Lightbulb, Heart, Puzzle } from 'lucide-react';

const softSkills = [
  {
    skill: 'Team Leadership',
    icon: <Users className="w-5 h-5" />
  },
  {
    skill: 'Time Management',
    icon: <Clock className="w-5 h-5" />
  },
  {
    skill: 'Problem Solving',
    icon: <Puzzle className="w-5 h-5" />
  },
  {
    skill: 'Communication',
    icon: <Target className="w-5 h-5" />
  },
  {
    skill: 'Creativity',
    icon: <Lightbulb className="w-5 h-5" />
  },
  {
    skill: 'Adaptability',
    icon: <Heart className="w-5 h-5" />
  }
];

export function SoftSkills() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Soft Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {softSkills.map((skill) => (
          <div key={skill.skill} className="flex items-center space-x-3 bg-white 
            dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <div className="text-blue-600 dark:text-blue-400">
              {skill.icon}
            </div>
            <span className="text-gray-700 dark:text-gray-300">
              {skill.skill}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}