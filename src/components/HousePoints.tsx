import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield } from 'lucide-react';
import { House } from '../types';

const LOCAL_STORAGE_KEY = "housePointsData";
const LAST_UPDATED_KEY = "housePointsLastUpdated";

const getStoredData = () => JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]");
const getLastUpdated = () => localStorage.getItem(LAST_UPDATED_KEY);
const storeData = (data) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  localStorage.setItem(LAST_UPDATED_KEY, new Date().toISOString());
};

const HousePoints = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [houses, setHouses] = useState<House[]>([{
    name: 'Red House', color: 'bg-red-600', points: 0 },
    { name: 'Green House', color: 'bg-green-600', points: 0 },
    { name: 'Yellow House', color: 'bg-yellow-500', points: 0 },
    { name: 'Blue House', color: 'bg-blue-600', points: 0 },
  ]);

  useEffect(() => {
    const fetchHousePoints = async () => {
      const lastUpdated = getLastUpdated();
      const twoDaysInMilliseconds = 2 * 24 * 60 * 60 * 1000;
      const now = new Date();

      if (lastUpdated && now - new Date(lastUpdated) < twoDaysInMilliseconds) {
        const storedData = getStoredData();
        if (storedData.length > 0) {
          setHouses(storedData);
          return;
        }
      }

      try {
        const response = await fetch('https://dbs-api-3h4s.onrender.com/housePoints');
        const data = await response.json();
        const updatedHouses = [
          { name: 'Red House', color: 'bg-red-600', points: data.housePoints.Red || 0 },
          { name: 'Green House', color: 'bg-green-600', points: data.housePoints.Green || 0 },
          { name: 'Yellow House', color: 'bg-yellow-500', points: data.housePoints.Yellow || 0 },
          { name: 'Blue House', color: 'bg-blue-600', points: data.housePoints.Blue || 0 },
        ];

        setHouses(updatedHouses);
        storeData(updatedHouses);
      } catch (error) {
        console.error('Error fetching house points:', error);
      }
    };

    fetchHousePoints();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-[#2D1B69] to-[#0C0C0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">House Points</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {houses.map((house, index) => (
            <motion.div
              key={house.name}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-[#1a1a1a] rounded-lg p-6 text-center transform hover:scale-105 transition-transform">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className={`${house.color} rounded-full p-4 shadow-lg`}>
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="mt-8 text-xl font-bold text-white mb-4">{house.name}</h3>
                <div className="relative pt-4">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-700">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${(house.points / 3000) * 100}%` } : {}}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${house.color}`}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-white">{house.points}</span>
                  <span className="text-gray-400 ml-2">points</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HousePoints;
