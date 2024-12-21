import React, { useState } from 'react';
import { Code2, Bot, Globe, Server, Monitor, Network } from 'lucide-react';

const skills = [
  {
    category: 'Programming Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Ruby', 'Go'],
    icon: <Code2 className="w-6 h-6" />,
    color: 'from-blue-500 to-blue-600',
    hoverColor: 'group-hover:from-blue-600 group-hover:to-blue-700'
  },
  {
    category: 'Frontend Development',
    items: ['React', 'Vue.js', 'Next.js', 'Tailwind CSS', 'Material-UI'],
    icon: <Globe className="w-6 h-6" />,
    color: 'from-green-500 to-green-600',
    hoverColor: 'group-hover:from-green-600 group-hover:to-green-700'
  },
  {
    category: 'Backend Development',
    items: ['Node.js', 'Express', 'Django', 'Spring Boot', 'GraphQL'],
    icon: <Server className="w-6 h-6" />,
    color: 'from-purple-500 to-purple-600',
    hoverColor: 'group-hover:from-purple-600 group-hover:to-purple-700'
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Firebase'],
    icon: <Bot className="w-6 h-6" />,
    color: 'from-red-500 to-red-600',
    hoverColor: 'group-hover:from-red-600 group-hover:to-red-700'
  },
  {
    category: 'DevOps',
    items: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Git'],
    icon: <Monitor className="w-6 h-6" />,
    color: 'from-yellow-500 to-yellow-600',
    hoverColor: 'group-hover:from-yellow-600 group-hover:to-yellow-700'
  },
  {
    category: 'Tools & Others',
    items: ['VS Code', 'Jira', 'Figma', 'Postman', 'Jest'],
    icon: <Network className="w-6 h-6" />,
    color: 'from-indigo-500 to-indigo-600',
    hoverColor: 'group-hover:from-indigo-600 group-hover:to-indigo-700'
  }
];

export function TechnicalSkills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Technical Skills
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.category}
            className="group relative overflow-hidden rounded-xl transition-all duration-300 
              transform hover:scale-105"
            onMouseEnter={() => setHoveredSkill(skill.category)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} ${skill.hoverColor} 
              transition-all duration-300 opacity-10 dark:opacity-20`} />
            
            {/* Content */}
            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 h-full
              border border-gray-200 dark:border-gray-700 rounded-xl">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4
                bg-gradient-to-br ${skill.color} transition-all duration-300`}>
                <div className="text-white">
                  {skill.icon}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3
                transition-colors duration-300">
                {skill.category}
              </h3>

              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className={`text-gray-600 dark:text-gray-300 transition-all duration-300
                      ${hoveredSkill === skill.category ? 'translate-x-2' : ''}`}
                  >
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}