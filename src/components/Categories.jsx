import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Categories = ({ categories, selectedCategory, setSelectedCategory }) => {
  const navigate = useNavigate();

  return (
    <div className="mb-6">
      <h3 className="text-base font-black text-[#f99e61] mb-3">Shop by Category</h3>
      <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <style>{`
          .flex.gap-3.overflow-x-auto::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <motion.button
          onClick={() => setSelectedCategory('All')}
          className={`flex flex-col items-center gap-2 p-3 rounded-2xl min-w-[80px] transition-all ${
            selectedCategory === 'All'
              ? 'bg-gradient-to-r from-[#f99e61] to-[#f52d05] text-white shadow-lg scale-105'
              : 'bg-white border-2 border-[#f99e61]/10 text-[#f99e61] hover:border-[#f52d05]/30'
          }`}
        >
          <span className="text-2xl">🛒</span>
          <span className="text-xs font-bold">All</span>
        </motion.button>
        {categories.map((cat, i) => (
          <motion.button
            key={cat.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            onClick={() => navigate(`/category/${cat.name}`)}
            className="flex flex-col items-center gap-2 p-3 rounded-2xl min-w-[80px] transition-all bg-white border-2 border-[#f99e61]/10 text-[#f99e61] hover:border-[#f52d05]/30 hover:scale-105"
          >
            <span className="text-2xl">{cat.icon}</span>
            <span className="text-xs font-bold whitespace-nowrap">{cat.name}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
