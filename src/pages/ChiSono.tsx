import React from 'react';
import { Biography } from '../components/about/Biography';
import { TechnicalSkills } from '../components/about/TechnicalSkills';
import { PersonalInfo } from '../components/about/PersonalInfo';
import { Education } from '../components/about/Education';
import { SoftSkills } from '../components/about/SoftSkills';

export function ChiSono() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        About Me
      </h1>
      <div className="space-y-12">
        <Biography />
        <Education />
        <TechnicalSkills />
        <SoftSkills />
        <PersonalInfo />
      </div>
    </div>
  );
}