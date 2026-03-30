import { motion } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext';
import { products } from '../data/products';
import { subCategoryMap } from '../data/categories';
import ProductCard from './ProductCard';
import SubCategoryHeader from './SubCategoryHeader';

const SubCategoryContent = ({ subCategoryName }) => {
  const { darkMode } = useDarkMode();

  const decoded = decodeURIComponent(subCategoryName);
  const mappedCategory = subCategoryMap[decoded];

  const filtered = mappedCategory
    ? products.filter(p => p.category === mappedCategory)
    : products.filter(p => p.name.toLowerCase().includes(decoded.toLowerCase()));

  return (
    <div className={`min-h-screen pb-24 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <SubCategoryHeader title={decoded} itemCount={filtered.length} />

      {/* Product Grid */}
      <div className="px-4 pt-20">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-3 gap-x-2 gap-y-6">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 gap-3">
            <p className="text-4xl">🛒</p>
            <p className={`text-sm font-bold ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              No products found
            </p>
            <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              Try ordering via WhatsApp
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubCategoryContent;
