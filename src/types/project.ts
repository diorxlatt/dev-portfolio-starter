export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  startDate: string;
  inProgress: boolean;
  liveUrl?: string;
  githubUrl?: string;
}