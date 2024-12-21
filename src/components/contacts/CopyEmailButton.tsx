import React, { useState } from 'react';
import { Mail, Check, Copy } from 'lucide-react';

interface CopyEmailButtonProps {
  email: string;
}

export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <div className="relative flex flex-col items-center group">
      <button
        onClick={copyToClipboard}
        className="flex flex-col items-center justify-center p-4 bg-white 
          dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transform 
          hover:scale-105 transition-all duration-300 w-full"
        aria-label="Copy email address"
      >
        <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 
          group-hover:bg-blue-100 dark:group-hover:bg-blue-900 transition-colors">
          <Mail className="w-8 h-8 text-gray-600 dark:text-gray-300 
            group-hover:text-blue-600 dark:group-hover:text-blue-400" />
        </div>
        <span className="text-sm font-medium text-gray-600 dark:text-gray-300 
          group-hover:text-blue-600 dark:group-hover:text-blue-400 mt-2">
          Email
        </span>
      </button>
      
      <div className="absolute -bottom-10 opacity-0 group-hover:opacity-100 
        transition-opacity duration-200 text-sm text-gray-600 dark:text-gray-300 
        text-center w-full">
        {copied ? (
          <span className="flex items-center justify-center">
            <Check className="w-4 h-4 mr-1 text-green-500" />
            Copied!
          </span>
        ) : (
          <span className="flex items-center justify-center">
            <Copy className="w-4 h-4 mr-1" />
            Click to copy
          </span>
        )}
      </div>
    </div>
  );
}