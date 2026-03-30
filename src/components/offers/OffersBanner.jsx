import { motion } from 'framer-motion';
import { Zap, Gift } from 'lucide-react';

const OffersBanner = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 }}
    className="bg-gradient-to-r from-[#7f1d1d] to-[#f52d05] rounded-2xl p-5 text-white shadow-lg relative overflow-hidden mb-5"
  >
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      className="absolute -right-10 -top-10 opacity-10"
    >
      <Gift size={120} />
    </motion.div>
    <div className="relative z-10">
      <div className="flex items-center gap-2 mb-1">
        <Zap size={22} className="text-yellow-300" fill="#fef08a" />
        <h2 className="text-xl font-black">Special Deals</h2>
      </div>
      <p className="text-sm opacity-80">Save more with exclusive offers just for you</p>
    </div>
  </motion.div>
);

export default OffersBanner;
