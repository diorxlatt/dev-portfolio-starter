import React from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';
import { TypewriterEffect } from '../components/home/TypewriterEffect';
import { ProfileImage } from '../components/home/ProfileImage';
import { services } from '../data/services';

const introductionPhrases = [
  'Hi, I\'m John! 👋',
  'Welcome to my portfolio! 🚀',
  'I\'m a Full Stack Developer 💻',
  'Let\'s build something amazing! ✨'
];

const serviceTitles = services
  .filter(service => service.category !== 'coming-soon')
  .map(service => service.title);

export function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="mb-8">
          <ProfileImage />
        </div>

        <div className="h-16 flex items-center justify-center mb-4">
          <TypewriterEffect 
            phrases={introductionPhrases}
            className="text-xl md:text-2xl"
          />
        </div>

        <p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
          Passionate software developer with experience in creating innovative and scalable web solutions. 
          Specialized in modern frontend technologies and cloud architectures.
        </p>

        <div className="h-12 flex items-center justify-center mb-8">
          <TypewriterEffect 
            phrases={serviceTitles}
            typingSpeed={50}
            deletingSpeed={25}
            pauseDuration={1500}
            className="text-sm md:text-base"
          />
        </div>

        <a
          href={import.meta.env.VITE_CV_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 
            text-white font-semibold rounded-lg shadow-md transition duration-300 mb-12"
        >
          <FileText className="w-5 h-5 mr-2" />
          View Resume
        </a>

        <div className="flex justify-center space-x-6">
          <a
            href={import.meta.env.VITE_GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <Github className="w-8 h-8" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href={import.meta.env.VITE_LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <Linkedin className="w-8 h-8" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}