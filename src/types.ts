export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  category: 'Web' | 'Mobile' | 'Blockchain' | 'AI' | 'Full Stack';
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  features: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  photo: string;
  text: string;
  rating: number;
}

export interface SkillGroup {
  category: string;
  skills: { name: string; level: number }[];
}

export type Language = 'EN' | 'KH';

export type Theme = 'light' | 'dark';
