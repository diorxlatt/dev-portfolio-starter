export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  category: 'education' | 'technical' | 'music' | 'language';
  logo?: string;
  grade?: string;
  hours?: string;
  verificationLink?: string;
}