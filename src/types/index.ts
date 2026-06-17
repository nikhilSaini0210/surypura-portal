export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export interface ProgramCard {
  id: string;
  icon: string;
  title: string;
  titleHindi: string;
  description: string;
  color: string;
  stats: string;
  tag: string;
}

export interface SocialPost {
  id: number;
  platform: 'instagram' | 'twitter';
  author: string;
  handle: string;
  avatar: string;
  content: string;
  contentHindi?: string;
  likes: number;
  shares: number;
  comments: number;
  date: string;
  hashtags: string[];
}
