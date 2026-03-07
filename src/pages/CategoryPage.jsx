import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, SlidersHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import CartStrip from '../components/CartStrip';
import BottomNav from '../components/BottomNav';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');

  // Get category info
  const category = categories.find(cat => cat.name === categoryName);
  
  // Filter products by category
  let filteredProducts = products.filter(product => product.category === categoryName);

  // Apply search filter
  if (searchQuery) {
    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Apply sorting
  if (sortBy === 'priceLow') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'priceHigh') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'discount') {
    filteredProducts.sort((a, b) => {
      const discountA = ((a.originalPrice - a.price) / a.originalPrice) * 100;
      const discountB = ((b.originalPrice - b.price) / b.originalPrice) * 100;
      return discountB - discountA;
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfccb] pb-20">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-xl border-b border-fresh-green/10 sticky top-0 z-10">
        <div className="p-4">
          {/* Top Bar */}
          <div className="flex items-center gap-3 mb-3">
            <button 
              onClick={() => navigate('/home')} 
              className="p-2 hover:bg-fresh-green/10 rounded-lg transition-colors"
            >
              <ArrowLeft size={22} className="text-fresh-green" />
            </button>
            <div className="flex items-center gap-2">
              <span className="text-2xl">{category?.icon}</span>
              <div>
                <h1 className="text-xl font-black text-fresh-green">{categoryName}</h1>
                <p className="text-xs text-fresh-green/60 font-medium">
                  {filteredProducts.length} products
                </p>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-3">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-fresh-green/40" size={18} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search in ${categoryName}...`}
              className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-white border-2 border-fresh-green/10 outline-none focus:border-leaf transition-all placeholder:text-fresh-green/30 font-medium text-sm"
            />
          </div>

          {/* Sort Options */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <SlidersHorizontal size={16} className="text-fresh-green/60 flex-shrink-0" />
            {[
              { value: 'default', label: 'Default' },
              { value: 'priceLow', label: 'Price: Low to High' },
              { value: 'priceHigh', label: 'Price: High to Low' },
              { value: 'discount', label: 'Discount' }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setSortBy(option.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  sortBy === option.value
                    ? 'bg-leaf text-white'
                    : 'bg-white border border-fresh-green/20 text-fresh-green hover:border-leaf'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="p-4">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-3">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-fresh-green/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Search size={32} className="text-fresh-green/40" />
            </div>
            <h3 className="text-lg font-bold text-fresh-green mb-2">No products found</h3>
            <p className="text-sm text-fresh-green/60">Try adjusting your search</p>
          </div>
        )}
      </div>

      <CartStrip />
      <BottomNav />
    </div>
  );
};

export default CategoryPage;
