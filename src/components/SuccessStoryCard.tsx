import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { SuccessStory } from '../types';

interface SuccessStoryCardProps {
  story: SuccessStory;
  index: number;
}

const SuccessStoryCard: React.FC<SuccessStoryCardProps> = ({ story, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex flex-col md:flex-row">
        <div 
          className="md:w-1/3 h-64 md:h-auto bg-cover bg-center" 
          style={{ backgroundImage: `url(${story.image})` }}
        />
        <div className="p-6 md:w-2/3">
          <Quote className="h-8 w-8 text-blue-100 mb-4" />
          <p className="text-gray-700 italic mb-6">{story.quote}</p>
          
          <div className="mt-4">
            <h3 className="text-xl font-bold">{story.name}</h3>
            <p className="text-gray-600">Studied: {story.course} on {story.platform}</p>
            <p className="text-blue-600 font-medium mt-2">{story.outcome}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SuccessStoryCard;