import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { platforms } from '../data/platforms';
import PlatformCard from '../components/PlatformCard';

const ResourcesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState<string>('All');
  const [levelFilter, setLevelFilter] = useState<string>('All');
  
  const filteredPlatforms = platforms.filter(platform => {
    const matchesSearch = platform.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          platform.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesPrice = priceFilter === 'All' || 
                         (priceFilter === 'Free' && !platform.isPaid) ||
                         (priceFilter === 'Paid' && platform.isPaid);
    
    const matchesLevel = levelFilter === 'All' || 
                         platform.level === levelFilter || 
                         platform.level === 'All Levels';
    
    return matchesSearch && matchesPrice && matchesLevel;
  });
  
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
            Learning Resources & Platforms
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Discover the best platforms to learn new skills and advance your career
          </motion.p>
        </div>
        
        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="relative w-full md:w-1/3">
              <input
                type="text"
                placeholder="Search platforms..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <label className="text-gray-700 font-medium">Price:</label>
                <select
                  className="border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={priceFilter}
                  onChange={(e) => setPriceFilter(e.target.value)}
                >
                  <option value="All">All</option>
                  <option value="Free">Free</option>
                  <option value="Paid">Paid</option>
                </select>
              </div>
              
              <div className="flex items-center space-x-2">
                <label className="text-gray-700 font-medium">Level:</label>
                <select
                  className="border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={levelFilter}
                  onChange={(e) => setLevelFilter(e.target.value)}
                >
                  <option value="All">All Levels</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        
        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlatforms.length > 0 ? (
            filteredPlatforms.map((platform, index) => (
              <PlatformCard key={platform.id} platform={platform} index={index} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-gray-500">No platforms found matching your filters. Try different criteria.</p>
            </div>
          )}
        </div>
        
        {/* Additional Resources */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-gray-900 mb-6"
          >
            Additional Learning Resources
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-4">Free Educational YouTube Channels</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="h-5 w-5 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-bold mr-2 mt-0.5">1</span>
                  <div>
                    <span className="font-medium">Crash Course</span>
                    <p className="text-sm text-gray-600">Quick, high-quality introductions to various subjects</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-bold mr-2 mt-0.5">2</span>
                  <div>
                    <span className="font-medium">MIT OpenCourseWare</span>
                    <p className="text-sm text-gray-600">Full MIT courses recorded in video format</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-bold mr-2 mt-0.5">3</span>
                  <div>
                    <span className="font-medium">The Coding Train</span>
                    <p className="text-sm text-gray-600">Creative coding tutorials with Daniel Shiffman</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-bold mr-2 mt-0.5">4</span>
                  <div>
                    <span className="font-medium">3Blue1Brown</span>
                    <p className="text-sm text-gray-600">Beautiful visualizations of mathematical concepts</p>
                  </div>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-4">Useful Communities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="h-5 w-5 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-xs font-bold mr-2 mt-0.5">1</span>
                  <div>
                    <span className="font-medium">Stack Overflow</span>
                    <p className="text-sm text-gray-600">Q&A for programmers facing coding challenges</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-xs font-bold mr-2 mt-0.5">2</span>
                  <div>
                    <span className="font-medium">Reddit r/learnprogramming</span>
                    <p className="text-sm text-gray-600">Supportive community for beginners learning to code</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-xs font-bold mr-2 mt-0.5">3</span>
                  <div>
                    <span className="font-medium">Discord Servers</span>
                    <p className="text-sm text-gray-600">Topic-specific learning communities with real-time help</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-xs font-bold mr-2 mt-0.5">4</span>
                  <div>
                    <span className="font-medium">Dev.to</span>
                    <p className="text-sm text-gray-600">Inclusive community for developers to share ideas</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;