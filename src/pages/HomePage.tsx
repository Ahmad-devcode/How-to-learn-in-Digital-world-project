import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import FeaturedCourses from '../components/FeaturedCourses';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                Prepare for the Future with <span className="text-blue-600">Digital Skills</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-700 mb-8"
              >
                Discover the most in-demand courses and learn effectively with digital tools and platforms.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <Link 
                  to="/courses" 
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-white hover:text-blue-800 hover:border border-blue-800 transition-colors flex items-center justify-center"
                >
                  Explore Courses <ArrowRight size={20} className="ml-2" />
                </Link>
                <Link 
                  to="/how-to-learn" 
                  className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors border border-blue-600 flex items-center justify-center"
                >
                  Learning Tips
                </Link>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="md:w-1/2 mt-12 md:mt-0"
            >
              <img 
                src="https://images.pexels.com/photos/5905555/pexels-photo-5905555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Students learning online" 
                className="rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
          
          <div className="flex justify-center mt-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="animate-bounce"
            >
              <ChevronDown size={24} className="text-blue-600" />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Featured Courses Section */}
      <FeaturedCourses />
      
      {/* Stats Section */}
      <section className="py-16 bg-white ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-4xl font-bold text-blue-600 mb-2 border border-blue-300 rounded">65%</p>
              <p className="text-gray-600">of students prefer online learning</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-4xl font-bold text-blue-600 mb-2 border border-blue-300 rounded">85%</p>
              <p className="text-gray-600">of jobs in 2030 don't exist yet</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-4xl font-bold text-blue-600 mb-2 border border-blue-300 rounded">94%</p>
              <p className="text-gray-600">of employers value digital skills</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-4xl font-bold text-blue-600 mb-2 border border-blue-300 rounded">2x</p>
              <p className="text-gray-600">increase in salary with tech skills</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold mb-6"
            >
              What Our Students Say
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-xl italic mb-8">
                "I never thought I could transition from marketing to data science at age 35, but the structured curriculum helped me land a job that doubled my salary."
              </p>
              
              <div>
                <p className="font-medium text-lg">Sarah Johnson</p>
                <p className="text-blue-400">Data Analyst at Microsoft</p>
              </div>
              
              <div className="mt-8">
                <Link 
                  to="/success" 
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-white hover:text-blue-700 transition-colors"
                >
                  Read More Success Stories
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="max-w-2xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold text-white mb-6"
              >
                Ready to Build Your Future?
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-blue-100 mb-8"
              >
                Start exploring the courses and resources that will help you achieve your career goals.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Link 
                  to="/courses" 
                  className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors text-lg"
                >
                  Get Started Today
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;