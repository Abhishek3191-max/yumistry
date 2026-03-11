import { motion } from 'framer-motion';
import { Zap, Star } from 'lucide-react';

const OfferBanner = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-[#7f1d1d] to-[#f52d05] rounded-2xl p-5 text-white mb-6 shadow-lg relative overflow-hidden"
    >
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-1">
          <Zap size={18} className="text-yellow-300" fill="#fef08a" />
          <h2 className="text-lg font-black tracking-tight">FLAT 20% OFF</h2>
        </div>
        <p className="text-sm opacity-90 font-semibold">On orders above ₹500</p>
        <p className="text-xs opacity-75 mt-1">Use code: YUMISTRY20</p>
      </div>
      <div className="absolute right-3 top-3 opacity-10">
        <Star size={70} className="text-white" fill="white" />
      </div>
    </motion.div>
  );
};

export default OfferBanner;
