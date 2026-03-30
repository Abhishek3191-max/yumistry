import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext';

const SubCategoryHeader = ({ title, itemCount }) => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();

  return (
    <div className={`fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-112.5 z-50 flex items-center gap-3 px-4 py-3 border-b ${
      darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-100'
    } shadow-sm`}>
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate(-1)}
        className={`p-2 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
      >
        <ArrowLeft size={20} className={darkMode ? 'text-white' : 'text-gray-800'} />
      </motion.button>
      <div>
        <h1 className={`text-base font-black ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h1>
        <p className="text-[11px] font-medium text-gray-400">{itemCount} items</p>
      </div>
    </div>
  );
};

export default SubCategoryHeader;
