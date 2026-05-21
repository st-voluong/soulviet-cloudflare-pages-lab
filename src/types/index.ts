import type { LucideIcon } from 'lucide-react';

export type Destination = {
  id: number;
  location: string;
  description: string;
  imageUrl: string;
  tags: string[];
  rating: number;
  duration: string;
};

export type Experience = {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Story = {
  id: number;
  title: string;
  author: string;
  readingTime: string;
  excerpt: string;
  imageUrl: string;
};
