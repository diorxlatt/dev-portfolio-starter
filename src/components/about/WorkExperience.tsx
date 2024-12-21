import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'Auriga',
    role: 'Sviluppatore Software',
    description: 'Programmazione di software per bancomat'
  },
  {
    company: 'Sprint Schools',
    role: 'Team Developer',
    description: 'Sviluppo di una start-up in team'
  },
  {
    company: 'Corte d\'Appello di Bari',
    role: 'Supporto Tecnico',
    description: 'Supporto tecnico e informatico'
  },
  {
    company: 'Libero Professionista',
    role: 'Developer',
    description: 'Creazione di bot, software e server'
  }
];

export function WorkExperience() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
        <Briefcase className="w-6 h-6 mr-2" />
        Esperienze Professionali
      </h2>
      <div className="grid gap-6">
        {experiences.map((exp) => (
          <div key={exp.company} className="bg-white dark:bg-gray-800 rounded-lg 
            shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {exp.company}
            </h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium">
              {exp.role}
            </p>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}