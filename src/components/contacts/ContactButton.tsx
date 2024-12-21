import React from 'react';
import * as Icons from 'lucide-react';
import { Contact } from '../../types/contact';

interface ContactButtonProps {
  contact: Contact;
}

export function ContactButton({ contact }: ContactButtonProps) {
  const Icon = Icons[contact.icon as keyof typeof Icons];
  const isEmail = contact.id === 'email';

  return (
    <div className="relative group">
      <a
        href={contact.url}
        target={isEmail ? '_self' : '_blank'}
        rel={isEmail ? undefined : 'noopener noreferrer'}
        className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 
          rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 
          transition-all duration-300 group"
        aria-label={contact.label}
      >
        <div className="flex flex-col items-center space-y-2">
          <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 
            group-hover:bg-blue-100 dark:group-hover:bg-blue-900 transition-colors">
            <Icon className="w-8 h-8 text-gray-600 dark:text-gray-300 
              group-hover:text-blue-600 dark:group-hover:text-blue-400" />
          </div>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300 
            group-hover:text-blue-600 dark:group-hover:text-blue-400">
            {contact.platform}
          </span>
        </div>
      </a>
      
      {isEmail && (
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 
          opacity-0 group-hover:opacity-100 transition-opacity duration-200 
          whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
          stereos.mote-9h@icloud.com
        </div>
      )}
    </div>
  );
}