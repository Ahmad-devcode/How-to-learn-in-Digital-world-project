import { Course } from '../types';
import { 
  BrainCircuit, 
  ShieldCheck, 
  Database, 
  Code2, 
  LineChart, 
  Blocks, 
  Wrench, 
  Smartphone 
} from 'lucide-react';

export const courses: Course[] = [
  {
    id: '1',
    title: 'AI & Machine Learning',
    description: 'Learn how to build intelligent systems that can learn from data. This rapidly growing field powers everything from recommendation systems to self-driving cars.',
    demandLevel: 'Extremely High',
    icon: 'BrainCircuit',
    color: 'bg-purple-100 text-purple-700'
  },
  {
    id: '2',
    title: 'Cybersecurity',
    description: 'Develop skills to protect systems and networks from digital attacks. As our world becomes more connected, the need for security experts continues to grow.',
    demandLevel: 'Very High',
    icon: 'ShieldCheck',
    color: 'bg-blue-100 text-blue-700'
  },
  {
    id: '3',
    title: 'Data Science',
    description: 'Learn to extract insights from complex data. Organizations need data scientists to help them make better decisions based on the data they collect.',
    demandLevel: 'Very High',
    icon: 'Database',
    color: 'bg-green-100 text-green-700'
  },
  {
    id: '4',
    title: 'Web Development',
    description: 'Build the websites and applications that power the internet. Web development remains one of the most accessible and in-demand tech skills.',
    demandLevel: 'High',
    icon: 'Code2',
    color: 'bg-amber-100 text-amber-700'
  },
  {
    id: '5',
    title: 'Digital Marketing',
    description: 'Master the art and science of promoting products and services online. Digital marketers are essential for businesses to reach their target audiences.',
    demandLevel: 'High',
    icon: 'LineChart',
    color: 'bg-red-100 text-red-700'
  },
  {
    id: '6',
    title: 'Blockchain',
    description: 'Explore the technology behind cryptocurrencies and decentralized applications. Blockchain is transforming finance, supply chain, and many other industries.',
    demandLevel: 'High',
    icon: 'Blocks',
    color: 'bg-indigo-100 text-indigo-700'
  },
  {
    id: '7',
    title: 'Cloud Computing',
    description: 'Learn to design, deploy, and manage applications in the cloud. Cloud skills are essential as businesses continue to migrate their infrastructure.',
    demandLevel: 'Very High',
    icon: 'Wrench',
    color: 'bg-sky-100 text-sky-700'
  },
  {
    id: '8',
    title: 'Mobile App Development',
    description: 'Create applications for iOS and Android devices. With billions of smartphone users worldwide, mobile developers remain in high demand.',
    demandLevel: 'High',
    icon: 'Smartphone',
    color: 'bg-teal-100 text-teal-700'
  }
];

export const getIconComponent = (iconName: string) => {
  switch(iconName) {
    case 'BrainCircuit': return BrainCircuit;
    case 'ShieldCheck': return ShieldCheck;
    case 'Database': return Database;
    case 'Code2': return Code2;
    case 'LineChart': return LineChart;
    case 'Blocks': return Blocks;
    case 'Wrench': return Wrench;
    case 'Smartphone': return Smartphone;
    default: return Code2;
  }
};