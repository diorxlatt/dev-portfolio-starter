import React from 'react';
import { ContactButton } from '../components/contacts/ContactButton';
import { CopyEmailButton } from '../components/contacts/CopyEmailButton';
import { contacts } from '../data/contacts';
import { AtSign } from 'lucide-react';

export function Contatti() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <AtSign className="w-10 h-10 text-blue-600 dark:text-blue-400" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Contact Me
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Choose the most convenient way to get in touch with me
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {contacts.map((contact) => (
          <ContactButton key={contact.id} contact={contact} />
        ))}
        <CopyEmailButton email={import.meta.env.VITE_EMAIL} />
      </div>
    </div>
  );
}