import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { LearningPlatform } from '../types';

interface PlatformCardProps {
  platform: LearningPlatform;
  index: number;
}

const PlatformCard: React.FC<PlatformCardProps> = ({ platform, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div 
        className="h-48 bg-cover bg-center" 
        style={{ backgroundImage: `url(${platform.logo})` }}
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{platform.name}</h3>
          <div className="flex space-x-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              platform.isPaid ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'
            }`}>
              {platform.isPaid ? 'Paid' : 'Free'}
            </span>
            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
              {platform.level}
            </span>
          </div>
        </div>
        <p className="text-gray-600 mb-4">{platform.description}</p>
        <a
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          Visit platform <ExternalLink size={16} className="ml-1" />
        </a>
      </div>
    </motion.div>
  );
};

export default PlatformCard;