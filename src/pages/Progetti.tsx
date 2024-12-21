import React from 'react';
import { ProjectGallery } from '../components/projects/ProjectGallery';
import { ProjectFilters } from '../components/projects/ProjectFilters';
import { useProjectFilters } from '../hooks/useProjectFilters';

export function Progetti() {
  const { activeFilters, toggleFilter, filteredProjects } = useProjectFilters();

  return (
    <div className="container mx-auto px-4 py-24 max-w-6xl">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        My Projects
      </h1>
      <ProjectFilters activeFilters={activeFilters} onFilterToggle={toggleFilter} />
      <ProjectGallery projects={filteredProjects} />
    </div>
  );
}