import React from 'react';

interface CertificateFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'all', label: 'Tutti' },
  { id: 'education', label: 'Istruzione' },
  { id: 'technical', label: 'Tecnici' },
  { id: 'language', label: 'Lingue' },
  { id: 'music', label: 'Musica' }
];

export function CertificateFilter({ activeCategory, onCategoryChange }: CertificateFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {categories.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => onCategoryChange(id)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 
            ${activeCategory === id
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}