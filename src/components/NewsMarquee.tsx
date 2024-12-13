import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Cake, Newspaper } from 'lucide-react';
import MarqueeSection from './MarqueeSection';

const LOCAL_STORAGE_KEY = "birthdaysDate";
const BIRTHDAYS_KEY = "birthdaysData";
const NEWS_KEY = "newsData";
const ACHIEVEMENTS_KEY = "achievementsData";

const getStoredDate = () => localStorage.getItem(LOCAL_STORAGE_KEY);
const getStoredData = (key) => JSON.parse(localStorage.getItem(key) || "[]");
const storeData = (key, data) => localStorage.setItem(key, JSON.stringify(data));
const storeDateAndBirthdays = (date, birthdays) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, date);
  storeData(BIRTHDAYS_KEY, birthdays);
};

const NewsMarquee = () => {
  const [news, setNews] = useState(getStoredData(NEWS_KEY));
  const [achievements, setAchievements] = useState(getStoredData(ACHIEVEMENTS_KEY));
  const [birthdays, setBirthdays] = useState(getStoredData(BIRTHDAYS_KEY));
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const today = new Date().toISOString().split('T')[0];
      const storedDate = getStoredDate();

      if (storedDate === today) {
        return; // Data is up-to-date
      }

      try {
        const [newsRes, achievementsRes, birthdaysRes] = await Promise.all([
          fetch('https://dbs-api-3h4s.onrender.com/notices'),
          fetch('https://dbs-api-3h4s.onrender.com/competitionResults'),
          fetch('https://dbs-api-3h4s.onrender.com/birthdays'),
        ]);

        if (!newsRes.ok || !achievementsRes.ok || !birthdaysRes.ok) {
          throw new Error('Failed to fetch data');
        }

        const newsData = await newsRes.json();
        const achievementsData = await achievementsRes.json();
        const birthdaysData = await birthdaysRes.json();

        setNews(newsData.notices || []);
        setAchievements(achievementsData.competitionResults || []);
        setBirthdays(birthdaysData.birthdays || []);

        storeData(NEWS_KEY, newsData.notices || []);
        storeData(ACHIEVEMENTS_KEY, achievementsData.competitionResults || []);
        storeDateAndBirthdays(today, birthdaysData.birthdays || []);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(true);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#0C0C0C] py-8">
      <div className="max-w-7xl mx-auto px-4">
        {error && <p className="text-red-500 text-center">Data not received</p>}

        <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">News and Birthdays</h2>
      
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[400px] sm:min-h-[400px] md:min-h-full">
          {/* News Section */}
          <div className="min-h-[400px] overflow-auto">
            <MarqueeSection title="Latest News" bgColor="bg-gradient-to-b from-[#2D1B69] to-[#4B0082]">
              <motion.div
                animate={{ y: [-400, 0] }}
                transition={{
                  y: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 20,
                    ease: "linear",
                  },
                }}
                className="space-y-4 pt-2"
              >
                {news.length > 0 ? (
                  news.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white/5 rounded-lg backdrop-blur-sm cursor-pointer"
                      onClick={() => window.open(item.url, '_blank')}
                    >
                      <div className="flex items-start gap-3">
                        <Newspaper className="w-5 h-5 text-purple-300 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-white font-semibold">{item.title}</h3>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-300 text-center">No News Available</p>
                )}
              </motion.div>
            </MarqueeSection>
          </div>

          {/* Achievements Section */}
          <div className="min-h-[400px] overflow-auto">
            <MarqueeSection title="Competition Results" bgColor="bg-gradient-to-b from-[#4B0082] to-[#2D1B69]">
              <motion.div
                animate={{ y: [-400, 0] }}
                transition={{
                  y: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 20,
                    ease: "linear",
                  },
                }}
                className="space-y-4 pt-2"
              >
                {achievements.length > 0 ? (
                  achievements.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white/5 rounded-lg backdrop-blur-sm cursor-pointer"
                      onClick={() => window.open(item.url, '_blank')}
                    >
                      <div className="flex items-start gap-3">
                        <Trophy className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-white font-semibold">{item.title}</h3>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-300 text-center">No Achievements Available</p>
                )}
              </motion.div>
            </MarqueeSection>
          </div>

          {/* Birthdays Section */}
          <div className="min-h-[400px] overflow-auto">
            <MarqueeSection title="Today's Birthdays" bgColor="bg-gradient-to-b from-[#2D1B69] to-[#4B0082]">
              <motion.div
                animate={{ y: [-400, 0] }}
                transition={{
                  y: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 10,
                    ease: "linear",
                  },
                }}
                className="space-y-4 pt-2"
              >
                {birthdays.length > 0 ? (
                  birthdays.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white/5 rounded-lg backdrop-blur-sm"
                    >
                      <div className="flex items-start gap-3">
                        <Cake className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-white font-semibold">{item[0]}</h3>
                          <p className="text-gray-300 text-sm mt-1">Class {item[1]}-{item[2]}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-300 text-center">No Birthdays Today!</p>
                )}
              </motion.div>
            </MarqueeSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsMarquee;
