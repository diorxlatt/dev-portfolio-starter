import React, { useState, useMemo } from 'react';
import { ServiceCard } from '../components/services/ServiceCard';
import { ServiceFilter } from '../components/services/ServiceFilter';
import { services } from '../data/services';
import { Sparkles } from 'lucide-react';

export function Servizi() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = useMemo(() => {
    if (activeCategory === 'all') return services;
    return services.filter(service => service.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="container mx-auto px-4 py-24 max-w-7xl">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="w-10 h-10 text-blue-600 dark:text-blue-400" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          My Services
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Discover the full range of services I offer, from programming to gaming
        </p>
      </div>

      <ServiceFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}