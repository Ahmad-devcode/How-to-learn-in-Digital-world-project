import { LearningPlatform } from '../types';

export const platforms: LearningPlatform[] = [
  {
    id: '1',
    name: 'Coursera',
    url: 'https://www.coursera.org',
    isPaid: true,
    level: 'All Levels',
    description: 'Offers courses from top universities and companies. Many courses can be audited for free, with paid options for certificates.',
    logo: 'https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '2',
    name: 'edX',
    url: 'https://www.edx.org',
    isPaid: true,
    level: 'All Levels',
    description: 'Founded by Harvard and MIT, offering university-level courses in a wide range of subjects. Free to audit, pay for certificates.',
    logo: 'https://images.pexels.com/photos/4497761/pexels-photo-4497761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '3',
    name: 'Udemy',
    url: 'https://www.udemy.com',
    isPaid: true,
    level: 'All Levels',
    description: 'Marketplace for courses created by individual instructors. Wide variety of topics with frequent discounts on courses.',
    logo: 'https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '4',
    name: 'Khan Academy',
    url: 'https://www.khanacademy.org',
    isPaid: false,
    level: 'Beginner',
    description: 'Free educational platform with courses in math, science, computing, and more. Great for beginners and foundational learning.',
    logo: 'https://images.pexels.com/photos/6238120/pexels-photo-6238120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '5',
    name: 'Codecademy',
    url: 'https://www.codecademy.com',
    isPaid: true,
    level: 'Beginner',
    description: 'Interactive platform for learning to code in various programming languages. Free basic access with paid pro features.',
    logo: 'https://images.pexels.com/photos/5952647/pexels-photo-5952647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '6',
    name: 'YouTube',
    url: 'https://www.youtube.com',
    isPaid: false,
    level: 'All Levels',
    description: 'Vast collection of free educational content on almost any topic. Quality and depth vary by channel.',
    logo: 'https://images.pexels.com/photos/4145349/pexels-photo-4145349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '7',
    name: 'LinkedIn Learning',
    url: 'https://www.linkedin.com/learning',
    isPaid: true,
    level: 'Intermediate',
    description: 'Professional courses focused on business, creative, and technology skills. Subscription-based with free month trial.',
    logo: 'https://images.pexels.com/photos/5538535/pexels-photo-5538535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '8',
    name: 'freeCodeCamp',
    url: 'https://www.freecodecamp.org',
    isPaid: false,
    level: 'Beginner',
    description: 'Free platform teaching coding through challenges and projects. Focuses on web development with certificates.',
    logo: 'https://images.pexels.com/photos/4050312/pexels-photo-4050312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];