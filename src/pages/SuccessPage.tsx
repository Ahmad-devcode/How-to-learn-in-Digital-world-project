import React from 'react';
import { motion } from 'framer-motion';
import { successStories, faqs } from '../data/success';
import SuccessStoryCard from '../components/SuccessStoryCard';
import FAQItem from '../components/FAQItem';

const SuccessPage: React.FC = () => {
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
            Student Success Stories & FAQs
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Real stories from students who transformed their careers through digital learning
          </motion.p>
        </div>
        
        {/* Success Stories */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Success Stories
          </motion.h2>
          
          <div className="space-y-8">
            {successStories.map((story, index) => (
              <SuccessStoryCard key={story.id} story={story} index={index} />
            ))}
          </div>
        </div>
        
        {/* Inspirational Quote */}
        <div className="bg-blue-600 text-white rounded-xl p-12 mb-16 text-center">
          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-medium italic mb-6"
          >
            "The future belongs to those who learn more skills and combine them in creative ways."
          </motion.blockquote>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg font-medium"
          >
            — Robert Greene
          </motion.p>
        </div>
        
        {/* FAQs */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Frequently Asked Questions
          </motion.h2>
          
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
            {faqs.map((faq, index) => (
              <FAQItem key={faq.id} faq={faq} index={index} />
            ))}
          </div>
        </div>
        
        {/* Tips for Success */}
        <div className="bg-gray-50 rounded-xl p-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-gray-900 mb-8"
          >
            Keys to Success in Online Learning
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2 h-7 w-7 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">1</span>
                Consistency is Key
              </h3>
              <p className="text-gray-600 mb-6 ml-9">
                Small daily efforts compound over time. Even 30 minutes of focused learning each day will yield impressive results over months.
              </p>
              
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2 h-7 w-7 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">2</span>
                Build Projects
              </h3>
              <p className="text-gray-600 mb-6 ml-9">
                Theory alone isn't enough. Apply what you learn by building real projects that you can showcase to potential employers.
              </p>
              
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2 h-7 w-7 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">3</span>
                Find Your Community
              </h3>
              <p className="text-gray-600 ml-9">
                Connect with other learners through forums, Discord servers, or local meetups. Having peers makes the journey more enjoyable and effective.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2 h-7 w-7 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">4</span>
                Embrace Failure
              </h3>
              <p className="text-gray-600 mb-6 ml-9">
                Getting stuck and making mistakes is an essential part of learning. Each error is an opportunity to deepen your understanding.
              </p>
              
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2 h-7 w-7 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">5</span>
                Prioritize Depth Over Breadth
              </h3>
              <p className="text-gray-600 mb-6 ml-9">
                Master one skill or subject area before moving to the next. Employers value specialists more than generalists in most fields.
              </p>
              
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2 h-7 w-7 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">6</span>
                Track Your Progress
              </h3>
              <p className="text-gray-600 ml-9">
                Keep a learning journal to document your journey. Seeing how far you've come is incredibly motivating during challenging periods.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;