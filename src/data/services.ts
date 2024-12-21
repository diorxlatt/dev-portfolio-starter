import { Service } from '../types/service';

export const services: Service[] = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Custom web application development using modern frameworks and best practices.',
    icon: 'Code2',
    category: 'development'
  },
  {
    id: 2,
    title: 'Cloud Solutions',
    description: 'Cloud architecture design and implementation using AWS, Azure, or GCP.',
    icon: 'Cloud',
    category: 'technical'
  },
  {
    id: 3,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile app development for iOS and Android.',
    icon: 'Smartphone',
    category: 'development'
  },
  {
    id: 4,
    title: 'UI/UX Design',
    description: 'User interface and experience design with focus on usability and aesthetics.',
    icon: 'Palette',
    category: 'development'
  },
  {
    id: 5,
    title: 'DevOps Services',
    description: 'CI/CD pipeline setup and infrastructure automation.',
    icon: 'Settings',
    category: 'technical'
  },
  {
    id: 6,
    title: 'Coming Soon',
    description: 'New services will be added soon. Stay tuned!',
    icon: 'Sparkles',
    category: 'coming-soon'
  }
];