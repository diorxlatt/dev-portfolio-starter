import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Personal Portfolio',
    description: 'Modern portfolio website built with React, TypeScript, and Tailwind CSS. ' +
      'Features dark/light theme, routing, and reusable components.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    startDate: '2024-01-15T12:00:00+01:00',
    inProgress: false,
    liveUrl: import.meta.env.VITE_PORTFOLIO_LIVE_URL,
    githubUrl: import.meta.env.VITE_PORTFOLIO_GITHUB_URL
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    description: 'Full-featured e-commerce platform with product management, cart functionality, and payment integration.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&h=500',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    startDate: '2023-11-01T12:00:00+01:00',
    inProgress: true,
    liveUrl: import.meta.env.VITE_ECOMMERCE_LIVE_URL,
    githubUrl: import.meta.env.VITE_ECOMMERCE_GITHUB_URL
  }
];