import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeSectionProps {
  title: string;
  children: React.ReactNode;
  bgColor: string;
}

const MarqueeSection: React.FC<MarqueeSectionProps> = ({ title, children, bgColor }) => {
  return (
    <div className={`${bgColor} p-4 rounded-lg shadow-lg h-full flex flex-col`}>
      <div className="sticky top-0 z-10 bg-inherit pt-2 pb-3 -mx-4 px-4 rounded-t-lg border-b border-white/20">
        <h2 className="text-lg font-semibold text-white">
          {title}
        </h2>
      </div>
      <div className="relative flex-1 overflow-hidden mt-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default MarqueeSection;