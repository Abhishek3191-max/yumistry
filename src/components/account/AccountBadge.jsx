import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import { useDarkMode } from '../../context/DarkModeContext';

const AccountBadge = () => {
  const { darkMode } = useDarkMode();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className={`rounded-2xl p-4 border mb-4 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-[#f52d05]/5 border-[#f52d05]/20'}`}
    >
      <div className="flex items-center justify-center gap-2 mb-1">
        <Leaf className="text-[#f52d05]" size={18} fill="#f52d05" />
        <span className={`font-black text-sm ${darkMode ? 'text-white' : 'text-[#7f1d1d]'}`}>Yumistry</span>
      </div>
      <p className={`text-xs text-center font-medium ${darkMode ? 'text-gray-400' : 'text-[#7f1d1d]/60'}`}>
        Chemistry of Freshness
      </p>
    </motion.div>
  );
};

export default AccountBadge;
