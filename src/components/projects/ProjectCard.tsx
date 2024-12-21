import React from 'react';
import { Github, Globe, Clock } from 'lucide-react';
import { formatProjectDuration } from '../../utils/dateUtils';
import { Project } from '../../types/project';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const duration = formatProjectDuration(project.startDate);
  const status = project.inProgress ? 'In Sviluppo' : 'Completato';
  const statusColor = project.inProgress ? 'bg-yellow-500' : 'bg-green-500';

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden 
      transition-transform hover:scale-105 duration-300">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <span className={`${statusColor} text-white text-sm px-3 py-1 rounded-full`}>
            {status}
          </span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>

        <div className="flex items-center space-x-2 text-sm text-gray-500 
          dark:text-gray-400 mb-4">
          <Clock className="w-4 h-4" />
          <span>{duration}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-blue-100 dark:bg-blue-900 text-blue-800 
                dark:text-blue-100 text-sm px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-blue-800 
                dark:text-blue-400 dark:hover:text-blue-300"
            >
              <Globe className="w-5 h-5 mr-1" />
              <span>Live Demo</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-gray-800 
                dark:text-gray-400 dark:hover:text-gray-300"
            >
              <Github className="w-5 h-5 mr-1" />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}