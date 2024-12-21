export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  category: 'development' | 'gaming' | 'technical' | 'coming-soon';
}