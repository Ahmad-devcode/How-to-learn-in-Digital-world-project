export interface Course {
  id: string;
  title: string;
  description: string;
  demandLevel: 'High' | 'Very High' | 'Extremely High';
  icon: string;
  color: string;
}

export interface LearningPlatform {
  id: string;
  name: string;
  url: string;
  isPaid: boolean;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  description: string;
  logo: string;
}

export interface SuccessStory {
  id: string;
  name: string;
  course: string;
  platform: string;
  quote: string;
  outcome: string;
  image: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface LearningTip {
  id: string;
  title: string;
  description: string;
  icon: string;
}