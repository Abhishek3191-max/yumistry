import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search as SearchIcon, X, TrendingUp, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import CartStrip from '../components/CartStrip';
import BottomNav from '../components/BottomNav';

const Search = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Load search history from localStorage
  useEffect(() => {
    const history = localStorage.getItem('searchHistory');
    if (history) {
      setSearchHistory(JSON.parse(history));
    }
  }, []);

  // Search products with Hindi/English synonyms
  useEffect(() => {
    if (searchQuery.trim()) {
      setIsSearching(true);
      const query = searchQuery.toLowerCase();
      
      // Hindi to English mapping
      const synonyms = {
        'aloo': 'potato',
        'alloo': 'potato',
        'aalu': 'potato',
        'alu': 'potato',
        'aaloo': 'potato',
        'tamatar': 'tomato',
        'pyaz': 'onion',
        'pyaaz': 'onion',
        'kela': 'banana',
        'seb': 'apple',
        'santra': 'orange',
        'aam': 'mango',
        'angoor': 'grapes',
        'tarbooz': 'watermelon',
        'gajar': 'carrot',
        'gobhi': 'cauliflower',
        'phool gobhi': 'cauliflower',
        'shimla mirch': 'capsicum',
        'doodh': 'milk',
        'dudh': 'milk',
        'makhan': 'butter',
        'dahi': 'curd',
        'paneer': 'paneer',
        'bread': 'bread',
        'roti': 'bread'
      };
      
      // Get search term (check if it's a synonym)
      const searchTerm = synonyms[query] || query;
      
      const results = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(query)
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
      setIsSearching(false);
    }
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim()) {
      // Add to search history
      const newHistory = [query, ...searchHistory.filter(item => item !== query)].slice(0, 5);
      setSearchHistory(newHistory);
      localStorage.setItem('searchHistory', JSON.stringify(newHistory));
    }
  };

  const clearHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem('searchHistory');
  };

  const clearSearch = () => {
    setSearchQuery('');
    setFilteredProducts([]);
    setIsSearching(false);
  };

  const popularSearches = ['Tomato', 'Milk', 'Bread', 'Banana', 'Aalu', 'Pyaz'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfccb] pb-20">
      {/* Header with Search */}
      <div className="bg-white/90 backdrop-blur-xl border-b border-fresh-green/10 sticky top-0 z-10">
        <div className="p-4">
          {/* Search Bar */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-fresh-green/10 rounded-lg transition-colors flex-shrink-0"
            >
              <ArrowLeft size={22} className="text-fresh-green" />
            </button>
            <div className="relative flex-1">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-fresh-green/40" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search for products..."
                autoFocus
                className="w-full pl-12 pr-12 py-3.5 rounded-xl bg-white border-2 border-fresh-green/10 outline-none focus:border-leaf transition-all placeholder:text-fresh-green/30 font-medium text-sm"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-fresh-green/10 rounded-full transition-colors"
                >
                  <X size={18} className="text-fresh-green/60" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        {/* Search Results */}
        {isSearching && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="mb-4">
                <h3 className="text-base font-black text-fresh-green mb-1">
                  Search Results
                </h3>
                <p className="text-xs text-fresh-green/60 font-medium">
                  {filteredProducts.length} products found
                </p>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 gap-3 mb-8">
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
                <div className="text-center py-12">
                  <div className="bg-fresh-green/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <SearchIcon size={32} className="text-fresh-green/40" />
                  </div>
                  <h3 className="text-lg font-bold text-fresh-green mb-2">No products found</h3>
                  <p className="text-sm text-fresh-green/60">Try searching with different keywords</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        )}

        {/* Default View - No Search */}
        {!isSearching && (
          <>
            {/* Recent Searches */}
            {searchHistory.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-fresh-green/60" />
                    <h3 className="text-base font-black text-fresh-green">Recent Searches</h3>
                  </div>
                  <button
                    onClick={clearHistory}
                    className="text-xs font-bold text-leaf hover:underline"
                  >
                    Clear All
                  </button>
                </div>
                <div className="space-y-2">
                  {searchHistory.map((item, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleSearch(item)}
                      className="w-full flex items-center gap-3 p-3 bg-white rounded-xl border border-fresh-green/10 hover:border-leaf/30 transition-all text-left"
                    >
                      <Clock size={16} className="text-fresh-green/40 flex-shrink-0" />
                      <span className="text-sm font-medium text-fresh-green flex-1">{item}</span>
                      <ArrowLeft size={16} className="text-fresh-green/40 rotate-180" />
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Popular Searches */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp size={18} className="text-fresh-green/60" />
                <h3 className="text-base font-black text-fresh-green">Popular Searches</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((item, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleSearch(item)}
                    className="px-4 py-2 bg-white border-2 border-fresh-green/10 rounded-xl text-sm font-bold text-fresh-green hover:border-leaf hover:bg-leaf/5 transition-all"
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Browse by Category */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-base font-black text-fresh-green mb-3">Browse by Category</h3>
              <div className="grid grid-cols-3 gap-3">
                {categories.map((category, index) => (
                  <motion.button
                    key={category.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => navigate(`/category/${category.name}`)}
                    className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl border-2 border-fresh-green/10 hover:border-leaf/30 hover:scale-105 transition-all"
                  >
                    <span className="text-3xl">{category.icon}</span>
                    <span className="text-xs font-bold text-fresh-green text-center">
                      {category.name}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </div>

      <CartStrip />
      <BottomNav />
    </div>
  );
};

export default Search;
