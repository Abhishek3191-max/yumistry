import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const ProductGrid = ({ filteredProducts, selectedCategory }) => {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-base font-black text-[#f99e61]">
            {selectedCategory === 'All' ? 'All Products' : selectedCategory}
          </h3>
          <p className="text-xs font-semibold text-[#f99e61]/60">
            {filteredProducts.length} items
          </p>
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 gap-3 mb-8">
          {filteredProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-[#f99e61]/60 font-semibold">No products found</p>
        </div>
      )}
    </>
  );
};

export default ProductGrid;
