import { useState, useMemo } from 'react';
import { projects } from '../data/projects';
import { Project } from '../types/project';

export function useProjectFilters() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    setActiveFilters((current) =>
      current.includes(filter)
        ? current.filter((f) => f !== filter)
        : [...current, filter]
    );
  };

  const filteredProjects = useMemo(() => {
    if (activeFilters.length === 0) return projects;
    return projects.filter((project) =>
      activeFilters.some((filter) => project.technologies.includes(filter))
    );
  }, [activeFilters]);

  return { activeFilters, toggleFilter, filteredProjects };
}