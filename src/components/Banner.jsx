import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const bannerImages = [
  "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg",
  "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2026-01/pet_crystal_WEB-1.png",
  "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2026-01/baby_crystal_WEB-1.png",
];

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % bannerImages.length);
    }, 3000);
    return () => clearInterval(timerRef.current);
  }, []);

  const goTo = (index) => {
    setCurrent(index);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % bannerImages.length);
    }, 3000);
  };

  return (
    <div className="w-full mb-4 rounded-2xl overflow-hidden relative">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {bannerImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`banner-${i}`}
            className="min-w-full object-contain"
            onError={(e) => { e.target.parentElement.style.display = 'none'; }}
          />
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        {bannerImages.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => goTo(i)}
            animate={{ width: current === i ? 16 : 6 }}
            className={`h-1.5 rounded-full transition-colors ${
              current === i ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
