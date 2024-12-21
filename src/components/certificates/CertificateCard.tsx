import React from 'react';
import { Calendar, Award, Clock } from 'lucide-react';
import { Certificate } from '../../types/certificate';
import { formatDate } from '../../utils/dateUtils';

interface CertificateCardProps {
  certificate: Certificate;
}

export function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg 
      overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 
              group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {certificate.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 font-medium">
              {certificate.issuer}
            </p>
          </div>
          <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        </div>

        <div className="space-y-3">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{formatDate(certificate.date)}</span>
          </div>

          {certificate.hours && (
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Clock className="w-4 h-4 mr-2" />
              <span>{certificate.hours}</span>
            </div>
          )}

          <p className="text-gray-600 dark:text-gray-300">
            {certificate.description}
          </p>

          {certificate.grade && (
            <div className="mt-2 inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 
              text-blue-800 dark:text-blue-100 text-sm rounded-full">
              {certificate.grade}
            </div>
          )}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent 
        opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          {certificate.verificationLink && (
            <a
              href={certificate.verificationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-4 py-2 
                bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg 
                transition-colors duration-200"
            >
              Verifica Certificato
            </a>
          )}
        </div>
      </div>
    </div>
  );
}