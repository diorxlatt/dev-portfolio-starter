import React, { useState, useMemo } from 'react';
import { CertificateCard } from '../components/certificates/CertificateCard';
import { CertificateFilter } from '../components/certificates/CertificateFilter';
import { certificates } from '../data/certificates';
import { Award } from 'lucide-react';

export function Certificati() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCertificates = useMemo(() => {
    if (activeCategory === 'all') return certificates;
    return certificates.filter(cert => cert.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="container mx-auto px-4 py-24 max-w-7xl">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Award className="w-10 h-10 text-blue-600 dark:text-blue-400" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          My Certificates
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A complete collection of my certifications and achievements
        </p>
      </div>

      <CertificateFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCertificates.map((certificate) => (
          <CertificateCard key={certificate.id} certificate={certificate} />
        ))}
      </div>
    </div>
  );
}