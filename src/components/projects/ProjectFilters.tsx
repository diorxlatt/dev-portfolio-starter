import React from 'react';

interface ProjectFiltersProps {
  activeFilters: string[];
  onFilterToggle: (filter: string) => void;
}

const filters = ['React', 'TypeScript', 'Tailwind', 'Vite'];

export function ProjectFilters({ activeFilters, onFilterToggle }: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterToggle(filter)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
            activeFilters.includes(filter)
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}