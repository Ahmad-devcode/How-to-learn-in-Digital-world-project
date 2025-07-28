import { SuccessStory, FAQ } from '../types';

export const successStories: SuccessStory[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    course: 'Data Science',
    platform: 'Coursera',
    quote: 'I never thought I could transition from marketing to data science at age 35, but the structured curriculum helped me land a job that doubled my salary.',
    outcome: 'Now works as a Data Analyst at Microsoft',
    image: 'https://images.pexels.com/photos/3767392/pexels-photo-3767392.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '2',
    name: 'James Kim',
    course: 'Web Development',
    platform: 'freeCodeCamp',
    quote: 'As a college student with limited funds, freeCodeCamp was a game-changer. I completed all their certifications while working part-time.',
    outcome: 'Hired as Frontend Developer before graduation',
    image: 'https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '3',
    name: 'Priya Patel',
    course: 'AI & Machine Learning',
    platform: 'edX',
    quote: 'The MIT course on edX gave me university-quality education at my own pace. The projects I built became the highlight of my portfolio.',
    outcome: 'Founded an AI startup after 2 years of learning',
    image: 'https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '4',
    name: 'Miguel Rodriguez',
    course: 'Cybersecurity',
    platform: 'YouTube & Udemy',
    quote: 'I combined free YouTube tutorials with strategic Udemy courses during sales. The hands-on labs were essential for passing my certifications.',
    outcome: 'Security specialist at a major bank',
    image: 'https://images.pexels.com/photos/5329056/pexels-photo-5329056.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'Do I need an expensive laptop to learn these skills?',
    answer: 'No, most courses can be completed on any computer with a stable internet connection. For some specialized fields like AI or game development, you might eventually need better hardware, but you can start with what you have.'
  },
  {
    id: '2',
    question: 'How long will it take to learn enough to get a job?',
    answer: 'This varies widely by field and your dedication. Generally, expect 6-12 months of consistent study before you\'re job-ready. Some people land opportunities sooner, while others take longer. Focus on building projects and a portfolio rather than racing through content.'
  },
  {
    id: '3',
    question: 'Are online certificates respected by employers?',
    answer: 'Increasingly yes, especially from recognized platforms. However, employers care more about what you can do than your certificates. Always complement your learning with real projects that demonstrate your skills.'
  },
  {
    id: '4',
    question: 'Can I really learn everything online without a degree?',
    answer: 'Yes! Many successful professionals are self-taught. While degrees can help with certain opportunities, many tech companies have removed degree requirements in favor of skills-based hiring.'
  },
  {
    id: '5',
    question: 'What if I keep getting stuck while learning?',
    answer: 'Getting stuck is normal and part of the learning process. Join communities related to what you\'re studying on Discord, Reddit, or Stack Overflow. Most challenges you face have been encountered by others who can help.'
  },
  {
    id: '6',
    question: 'How do I stay motivated during self-paced learning?',
    answer: 'Set specific goals, find an accountability partner, join communities, track your progress visually, and celebrate small wins. Remember why you started, and consider finding a mentor in your field.'
  }
];