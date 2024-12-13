import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar } from 'lucide-react';

const Holidays = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const holidays = [
    {
      season: 'Summer Vacation',
      duration: 'May 18, 2024 - June 17, 2024',
      description: 'School reopens on July 18, 2024',
    },
    {
      season: 'Puja Vacation',
      duration: 'October 6, 2024 - October 17, 2024',
      description: 'School reopens on October 18, 2024',
    },
    {
      season: 'Winter Vacation',
      duration: 'December 21, 2024 - January 5, 2024',
      description: 'School reopens on January 6, 2025',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-[#2D1B69] to-[#0C0C0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Academic Calendar</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {holidays.map((holiday, index) => (
            <motion.div
              key={holiday.season}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-[#1a1a1a] rounded-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="bg-[#4B0082] rounded-full p-3">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{holiday.season}</h3>
                  <p className="text-purple-300 font-medium mb-2">{holiday.duration}</p>
                  <p className="text-gray-400">{holiday.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Holidays;