import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Leaf, Sparkles, Apple, Carrot } from 'lucide-react';
import { useDarkMode } from '../context/DarkModeContext';

const SplashScreen = () => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();

  useEffect(() => {
    setTimeout(() => navigate('/register'), 3500);
  }, [navigate]);

  return (
    <div className={`h-screen flex flex-col items-center justify-center overflow-hidden relative ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfccb]'}`}>
      
      {/* Soft Background Blobs */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          x: [0, 30, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-leaf/20 to-[#22c55e]/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, -20, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tl from-[#fef08a]/30 to-[#84cc16]/10 rounded-full blur-3xl"
      />

      {/* Floating Elements */}
      <motion.div 
        animate={{ 
          y: [0, -25, 0],
          rotate: [0, 10, 0],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 left-12"
      >
        <Apple size={50} className="text-[#ef4444]/40" fill="#ef4444" />
      </motion.div>

      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -12, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-36 right-16"
      >
        <Carrot size={45} className="text-[#f97316]/40" />
      </motion.div>

      <motion.div 
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 15, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-36 left-16"
      >
        <Leaf size={40} className="text-leaf/40" fill="#84cc16" />
      </motion.div>

      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-28 right-20"
      >
        <Sparkles size={35} className="text-[#fbbf24]/50" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center px-6">
        
        {/* Logo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1, 
            ease: [0.34, 1.56, 0.64, 1],
            type: "spring"
          }}
          className="relative mb-8"
        >
          {/* Glow Effect */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.6, 0.4]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-leaf to-[#22c55e] blur-2xl rounded-full"
          />
          
          {/* Logo Circle */}
          <div className={`relative p-8 rounded-full shadow-xl border-4 ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600' : 'bg-gradient-to-br from-white to-[#f0fdf4] border-white'}`}>
            <motion.div
              animate={{ 
                rotate: [0, 360]
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              <Leaf size={70} strokeWidth={2} className="text-fresh-green" fill="#84cc16" />
            </motion.div>
          </div>
        </motion.div>

        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center">
            {['Y', 'u', 'm', 'i', 's', 't', 'r', 'y'].map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.08, duration: 0.5 }}
                className={`text-6xl font-black tracking-tight ${
                  i < 4 ? 'text-fresh-green' : 'text-leaf'
                } ${darkMode && i < 4 ? 'text-green-400' : ''} ${darkMode && i >= 4 ? 'text-green-300' : ''}`}
              >
                {letter}
              </motion.span>
            ))}
          </div>
          
          {/* Taglines */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="mt-4 flex flex-col items-center gap-2"
          >
            <p className={`text-sm font-bold tracking-wide ${darkMode ? 'text-green-400' : 'text-fresh-green/80'}`}>
              Real Freshness
            </p>
            
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="h-0.5 bg-leaf rounded-full"
            />
            
            <p className={`text-xs font-semibold tracking-[0.2em] uppercase mt-1 ${darkMode ? 'text-gray-400' : 'text-earth/70'}`}>
              Chemistry of Freshness
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Loading Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-16 flex gap-1.5"
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.4, 1, 0.4]
            }}
            transition={{ 
              duration: 1, 
              repeat: Infinity, 
              delay: i * 0.2,
              ease: "easeInOut"
            }}
            className="w-2 h-2 bg-fresh-green rounded-full"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default SplashScreen;
