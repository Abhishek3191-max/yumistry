import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { categoryData } from '../data/categories';
import { useDarkMode } from '../context/DarkModeContext';

const SubcategoryCard = ({ item, index }) => {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileTap={{ scale: 0.93 }}
      onClick={() => navigate(`/subcategory/${encodeURIComponent(item.name)}`)}
      className="flex flex-col items-center cursor-pointer min-w-[100px]"
    >
      <div
        className="w-24 h-24 rounded-2xl overflow-hidden shadow-sm mb-2"
        style={{ backgroundColor: item.bg }}
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      </div>
      <span className={`text-[11px] font-semibold text-center leading-tight max-w-[96px] ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        {item.name}
      </span>
    </motion.div>
  );
};

const CategoryRow = ({ category, index }) => {
  const { darkMode } = useDarkMode();
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className="mb-4"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${category.bg} flex items-center justify-center text-base`}>
            {category.emoji}
          </div>
          <span className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            {category.name}
          </span>
        </div>
        <button className="flex items-center gap-0.5 text-[11px] font-semibold text-[#f52d05]">
          See all <ChevronRight size={13} />
        </button>
      </div>

      {/* Subcategory Cards */}
      <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1">
        {category.subcategories.map((item, i) => (
          <SubcategoryCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </motion.div>
  );
};

const CategorySection = () => {
  return (
    <div className="mt-4">
      {categoryData.map((category, index) => (
        <CategoryRow key={category.id} category={category} index={index} />
      ))}
    </div>
  );
};

export default CategorySection;
