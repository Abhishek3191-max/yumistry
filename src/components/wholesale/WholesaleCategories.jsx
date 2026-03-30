import { motion } from 'framer-motion';
import { useDarkMode } from '../../context/DarkModeContext';

const categories = [
  {
    id: 1,
    emoji: '🛒',
    title: 'Grocery Wholesale',
    desc: 'Fresh vegetables, fruits, dairy, grains, spices & more — sourced directly for bulk supply',
    tags: ['Vegetables', 'Fruits', 'Dairy', 'Grains', 'Spices'],
    bg: 'from-orange-50 to-red-50',
    border: 'border-red-100',
    tagBg: 'bg-red-50 text-red-600',
  },
  {
    id: 2,
    emoji: '🍳',
    title: 'Bartan & Kitchenware',
    desc: 'Wholesale supply of utensils, cookware, steel & aluminium bartan for shops & businesses',
    tags: ['Steel Bartan', 'Cookware', 'Aluminium', 'Plastic Ware'],
    bg: 'from-blue-50 to-indigo-50',
    border: 'border-blue-100',
    tagBg: 'bg-blue-50 text-blue-600',
  },
];

const WholesaleCategories = () => {
  const { darkMode } = useDarkMode();
  return (
    <div className="mb-6">
      <h2 className={`text-base font-black mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        Our Wholesale Categories
      </h2>
      <div className="flex flex-col gap-3">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`rounded-2xl p-4 border ${
              darkMode ? 'bg-gray-800 border-gray-700' : `bg-gradient-to-br ${cat.bg} ${cat.border}`
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{cat.emoji}</span>
              <h3 className={`font-black text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {cat.title}
              </h3>
            </div>
            <p className={`text-xs mb-3 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {cat.desc}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {cat.tags.map(tag => (
                <span key={tag} className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  darkMode ? 'bg-gray-700 text-gray-300' : cat.tagBg
                }`}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WholesaleCategories;
