import { useState, useEffect } from 'react';

const CACHE_KEY = 'galleryData';
const CACHE_TIMESTAMP_KEY = 'galleryDataTimestamp';
const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

interface EventLink {
  title: string;
  url: string;
  images?: string[];
}

export const useGalleryData = () => {
  const [events, setEvents] = useState<EventLink[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check cache
        const cachedTimestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);
        const now = Date.now();

        if (cachedTimestamp && now - parseInt(cachedTimestamp) < CACHE_DURATION) {
          const cachedData = localStorage.getItem(CACHE_KEY);
          if (cachedData) {
            setEvents(JSON.parse(cachedData));
            setLoading(false);
            return;
          }
        }

        // Fetch thumbnails
        const response = await fetch('https://dbs-api-3h4s.onrender.com/eventLinks');
        const data = await response.json();
        
        // Fetch images for each event
        const eventsWithImages = await Promise.all(
          data.events.map(async (event: EventLink) => {
            const imagesResponse = await fetch(`https://dbs-api-3h4s.onrender.com/eventImages?url=${event.url}`);
            const imagesData = await imagesResponse.json();
            return { ...event, images: imagesData.images };
          })
        );

        // Update cache
        localStorage.setItem(CACHE_KEY, JSON.stringify(eventsWithImages));
        localStorage.setItem(CACHE_TIMESTAMP_KEY, now.toString());

        setEvents(eventsWithImages);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching gallery data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { events, loading };
};