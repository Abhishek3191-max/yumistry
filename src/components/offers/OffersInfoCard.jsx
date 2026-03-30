import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useDarkMode } from '../../context/DarkModeContext';

const OffersInfoCard = () => {
  const { darkMode } = useDarkMode();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className={`rounded-2xl p-4 border mb-5 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-[#f52d05]/5 border-[#f52d05]/20'}`}
    >
      <div className="flex items-start gap-3">
        <Sparkles size={18} className="text-[#f52d05] shrink-0 mt-0.5" />
        <div>
          <p className={`font-bold text-sm mb-1 ${darkMode ? 'text-white' : 'text-[#7f1d1d]'}`}>
            How to use coupons?
          </p>
          <p className={`text-xs leading-relaxed ${darkMode ? 'text-gray-400' : 'text-[#7f1d1d]/60'}`}>
            Copy the coupon code and apply it at checkout to get instant discounts. Spin the wheel daily for bonus offers!
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default OffersInfoCard;
