export type MediaCategory = 'Poster' | 'Infografis' | 'Video' | 'Podcast' | 'Game';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: MediaCategory;
  thumbnail: string;
  mediaUrl: string;
  year: string;
  tags: string[];
}
