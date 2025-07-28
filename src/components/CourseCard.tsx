import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Course } from '../types';
import { getIconComponent } from '../data/courses';

interface CourseCardProps {
  course: Course;
  index: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, index }) => {
  const Icon = getIconComponent(course.icon);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className={`p-6 ${course.color}`}>
        <Icon className="h-10 w-10" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{course.title}</h3>
        <div className="mb-4">
          <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
            course.demandLevel === 'Extremely High' 
              ? 'bg-purple-100 text-purple-700' 
              : course.demandLevel === 'Very High'
                ? 'bg-blue-100 text-blue-700'
                : 'bg-green-100 text-green-700'
          }`}>
            {course.demandLevel} Demand
          </span>
        </div>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <a
          href="#"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          Learn more <ArrowRight size={16} className="ml-1" />
        </a>
      </div>
    </motion.div>
  );
};

export default CourseCard;