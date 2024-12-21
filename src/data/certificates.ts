import { Certificate } from '../types/certificate';

export const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Computer Science Degree',
    issuer: 'Tech University',
    date: '2018-06-15',
    description: 'Bachelor\'s Degree in Computer Science',
    category: 'education',
    location: 'New York'
  },
  {
    id: 2,
    title: 'AWS Certified Developer',
    issuer: 'Amazon Web Services',
    date: '2020-03-15',
    description: 'Professional certification for AWS cloud development',
    category: 'technical',
    hours: '300h'
  },
  {
    id: 3,
    title: 'Full Stack Development Bootcamp',
    issuer: 'Tech Academy',
    date: '2019-08-20',
    description: 'Intensive bootcamp covering modern web development stack',
    category: 'technical',
    hours: '480h'
  }
];