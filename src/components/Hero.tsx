import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExclamationTriangle } from 'react-icons/fa';

const Hero = () => {
  const [text, setText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [cursor, setCursor] = useState(true);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const sentences = [
    'Empowering minds, building character, and fostering excellence since 1960!',
    'We believe in "Whatever you do, think of the Glory of God as your main goal".',
    'We are affiliated with ICSE with Affiliation Number "WB391".'
  ];

  useEffect(() => {
    const currentSentence = sentences[sentenceIndex];
    if (!isDeleting && charIndex < currentSentence.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentSentence[charIndex]);
        setCharIndex(charIndex + 1);
      }, 100); // Typing speed
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        setCharIndex(charIndex - 1);
      }, 50); // Deleting speed
      return () => clearTimeout(timeout);
    } else if (!isDeleting && charIndex === currentSentence.length) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000); // Pause before deleting
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setSentenceIndex((prev) => (prev + 1) % sentences.length);
    }
  }, [charIndex, isDeleting, sentenceIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursor((prev) => !prev);
    }, 500); // Blinking speed
    return () => clearInterval(cursorInterval);
  }, []);

  const handleButtonClick = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="http://donboscoberhampore.in/school1.mp4" type="video/mp4" />
      </video>

      {/* Purple tint overlay throughout the entire video */}
      <div className="absolute inset-0 bg-purple-800/80" />

      {/* Darken bottom part of the video */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgb(12,12,12)]/100" />

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to Don Bosco School
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            {text}
            <span className="blinking-cursor">{cursor ? '|' : ' '}</span>
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#4B0082] to-[#2D1B69] text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg transition-all"
            onClick={handleButtonClick}
          >
            Disclaimer
          </motion.button>
        </motion.div>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {isPopupVisible && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-8 max-w-lg mx-auto text-black text-center mx-4 sm:mx-auto"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <FaExclamationTriangle className="text-4xl text-red-500 mb-4 mx-auto" />
              <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
              <hr className="mb-4" />
              <p className="mb-4">
                This is not the official website. This is a demo website that is open-source and made by Swastik Bhattacharjee, an ex-student of Don Bosco School Berhampore. This is just a side project and not linked officially.
              </p>
              <hr className="mb-4" />
              <button
                className="bg-gradient-to-r from-[#4B0082] to-[#2D1B69] text-white px-4 py-2 rounded-full text-lg font-semibold hover:shadow-lg transition-all"
                onClick={handleClosePopup}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
