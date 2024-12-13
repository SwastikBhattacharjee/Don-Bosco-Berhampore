import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, Award, Users } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Clock, value: '15+', label: 'Years of Excellence' },
    { icon: Users, value: '100+', label: 'Alumni Worldwide' },
    { icon: Award, value: '100%', label: 'Success Rate' },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-[#0C0C0C] to-[#2D1B69]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Legacy of Excellence</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
            The aim of the Institution is to impart sound value-based education by forming in the students habits of piety, virtue, discipline and self-reliance during the years of their studies, thus enabling them to be dutiful members of the Catholic Church and useful citizens of our motherland, India.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
            The method of education followed in the school is the Preventive System taught and practiced by St. John Bosco- the Father and Teacher of Youth. It is based on Reason, Religion and Loving Kindness.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#4B0082] rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;