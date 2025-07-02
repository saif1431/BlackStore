import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from '/img1.jpg';
import img2 from '/img2.jpg';
import img3 from '/img3.jpg';
import img4 from '/img4.jpg';

const images = [img1, img2, img3, img4];

function Section2() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);

  useEffect(() => {
    // Preload all images
    images.forEach(img => {
      const image = new Image();
      image.src = img;
    });

    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % images.length);
      setNextImageIndex(prev => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Stack */}
      <div className="absolute inset-0">
        {/* Current Image */}
        <motion.img
          key={`current-${currentImageIndex}`}
          src={images[currentImageIndex]}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        />

        {/* Next Image (already loaded and waiting underneath) */}
        <motion.img
          key={`next-${nextImageIndex}`}
          src={images[nextImageIndex]}
          alt="Next Background"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </div>

      {/* Dark Overlay (constant) */}
      <div className="absolute inset-0 bg-black/80 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl forum-regular md:text-7xl font-bold text-[#ECD9B0] mb-6">
          The Revolution is Premium
        </h1>
      </div>
    </div>
  );
}

export default Section2;