import React from 'react';
import { motion } from 'framer-motion';
import { 
  Computer, 
  Home, 
  Clock, 
  Target, 
  PenTool, 
  Users, 
  Coffee, 
  Zap 
} from 'lucide-react';
import { learningTips } from '../data/tips';

const HowToLearnPage: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'ComputerIcon': return <Computer className="h-10 w-10 text-blue-600" />;
      case 'HomeIcon': return <Home className="h-10 w-10 text-blue-600" />;
      case 'ClockIcon': return <Clock className="h-10 w-10 text-blue-600" />;
      case 'TargetIcon': return <Target className="h-10 w-10 text-blue-600" />;
      case 'PenToolIcon': return <PenTool className="h-10 w-10 text-blue-600" />;
      case 'UsersIcon': return <Users className="h-10 w-10 text-blue-600" />;
      case 'CoffeeIcon': return <Coffee className="h-10 w-10 text-blue-600" />;
      case 'ZapIcon': return <Zap className="h-10 w-10 text-blue-600" />;
      default: return <Computer className="h-10 w-10 text-blue-600" />;
    }
  };
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            How to Learn Digitally
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Master the skills of effective online learning with these practical tips and strategies
          </motion.p>
        </div>
        
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold text-gray-900 mb-4"
              >
                The Digital Learning Advantage
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-700 mb-4"
              >
                Digital learning offers flexibility, affordability, and access to global expertise. But it also requires self-discipline and effective study strategies.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-gray-700"
              >
                Our research shows that successful online learners use specific approaches to maximize their learning efficiency and stay motivated.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="md:w-1/2"
            >
              <img 
                src="https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Person learning online" 
                className="rounded-xl shadow-md"
              />
            </motion.div>
          </div>
        </div>
        
        {/* Learning Tips */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            8 Proven Learning Strategies
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningTips.map((tip, index) => (
              <motion.div
                key={tip.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  {getIcon(tip.icon)}
                </div>
                <h3 className="text-xl font-bold text-center mb-4">{tip.title}</h3>
                <p className="text-gray-600 text-center">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Platforms Comparison */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Choosing the Right Learning Platform
          </motion.h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-3 px-6 text-left">Platform Type</th>
                  <th className="py-3 px-6 text-left">Best For</th>
                  <th className="py-3 px-6 text-left">Cost</th>
                  <th className="py-3 px-6 text-left">Pros</th>
                  <th className="py-3 px-6 text-left">Cons</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-6 font-medium">MOOCs (Coursera, edX)</td>
                  <td className="py-4 px-6">Structured, university-style learning</td>
                  <td className="py-4 px-6">Free to audit, $50-$300 for certificates</td>
                  <td className="py-4 px-6">High-quality content from top institutions</td>
                  <td className="py-4 px-6">Less flexible schedules, cohort-based</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Marketplaces (Udemy, Skillshare)</td>
                  <td className="py-4 px-6">Specific skills, self-paced learning</td>
                  <td className="py-4 px-6">$10-$200 per course or subscription</td>
                  <td className="py-4 px-6">Huge variety, frequent sales</td>
                  <td className="py-4 px-6">Variable quality, less rigorous</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Free Resources (Khan Academy, YouTube)</td>
                  <td className="py-4 px-6">Supplementary learning, beginners</td>
                  <td className="py-4 px-6">Free</td>
                  <td className="py-4 px-6">Accessible, great for basics</td>
                  <td className="py-4 px-6">Less structured, no certification</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Coding Platforms (freeCodeCamp, Codecademy)</td>
                  <td className="py-4 px-6">Interactive coding practice</td>
                  <td className="py-4 px-6">Free to $40/month</td>
                  <td className="py-4 px-6">Hands-on, project-based</td>
                  <td className="py-4 px-6">Limited to programming topics</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Bootcamps (Online)</td>
                  <td className="py-4 px-6">Career changers, intensive learning</td>
                  <td className="py-4 px-6">$2,000-$20,000</td>
                  <td className="py-4 px-6">Comprehensive, job-focused</td>
                  <td className="py-4 px-6">Expensive, time-intensive</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Productivity Tools */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center text-gray-900 mb-8"
          >
            Essential Productivity Tools
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h3 className="text-xl font-bold mb-4">Note-Taking</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  <span className="font-medium">Notion</span> - All-in-one workspace
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  <span className="font-medium">Evernote</span> - Cross-platform notes
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  <span className="font-medium">OneNote</span> - Microsoft's notebook
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  <span className="font-medium">Obsidian</span> - Knowledge graph
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h3 className="text-xl font-bold mb-4">Time Management</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  <span className="font-medium">Forest</span> - Focus timer
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  <span className="font-medium">Todoist</span> - Task manager
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  <span className="font-medium">Google Calendar</span> - Scheduling
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  <span className="font-medium">Toggl</span> - Time tracking
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h3 className="text-xl font-bold mb-4">Focus & Wellness</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  <span className="font-medium">Freedom</span> - Distraction blocker
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  <span className="font-medium">Headspace</span> - Meditation app
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  <span className="font-medium">Calm</span> - Stress reduction
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  <span className="font-medium">f.lux</span> - Screen color adjuster
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-blue-600 rounded-xl p-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-white mb-4"
          >
            Ready to Start Learning?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Explore our curated collection of learning platforms and find the perfect course to start your journey today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <a 
              href="/resources" 
              className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors inline-block"
            >
              Browse Learning Platforms
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HowToLearnPage;