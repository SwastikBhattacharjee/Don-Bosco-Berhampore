import React, { useEffect, useState } from 'react';

const LOCAL_STORAGE_KEY = 'galleryData';

const FullGallery = () => {
  const [galleryData, setGalleryData] = useState<
    Array<{ title: string; images: string[] }>
  >([]);

  useEffect(() => {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedData) {
      setGalleryData(JSON.parse(storedData));
    }
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-[#0C0C0C] to-[#2D1B69]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Gallery</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryData.map((item, index) => (
            <div key={index} className="relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <img
                  src={item.images[0]} // Display the first image as the thumbnail
                  alt={item.title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FullGallery;
