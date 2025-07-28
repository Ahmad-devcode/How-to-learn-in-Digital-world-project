import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { getIconComponent } from '../data/courses';

const FeaturedCourses: React.FC = () => {
  // Only show the first 3 courses on the home page
  const featuredCourses = courses.slice(0, 3);
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-800 mb-4"
          >
            Future-Proof Your Career
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-800 max-w-2xl mx-auto"
          >
            Discover the most in-demand skills that will shape the future job market
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCourses.map((course, index) => {
            const Icon = getIconComponent(course.icon);
            
            return (
              <motion.div
                key={course.id}
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
                        ? 'bg-purple-200 text-purple-800' 
                        : course.demandLevel === 'Very High'
                          ? 'bg-blue-200 text-blue-800'
                          : 'bg-green-200 text-green-800'
                    }`}>
                      {course.demandLevel} Demand
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/courses"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Explore all courses <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;