import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, ShoppingCart, User, Leaf, Star, Zap, MapPin, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import CartStrip from '../components/CartStrip';
import BottomNav from '../components/BottomNav';
import WhatsAppCTA from '../components/WhatsAppCTA';

const Home = () => {
  const navigate = useNavigate();
  const { getTotalItems } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Detecting location...');
  const [customAddress, setCustomAddress] = useState('');
  const [isDetecting, setIsDetecting] = useState(false);

  // Auto-detect location on mount
  useEffect(() => {
    const savedLocation = localStorage.getItem('userLocation');
    if (savedLocation) {
      setSelectedLocation(savedLocation);
    } else {
      detectLocation();
    }
  }, []);

  const detectLocation = () => {
    setIsDetecting(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Mock reverse geocoding - in real app use Google Maps API
          const location = 'Home - New Delhi';
          setSelectedLocation(location);
          localStorage.setItem('userLocation', location);
          setIsDetecting(false);
        },
        (error) => {
          setSelectedLocation('Home - New Delhi');
          setIsDetecting(false);
        }
      );
    } else {
      setSelectedLocation('Home - New Delhi');
      setIsDetecting(false);
    }
  };

  // Filter products based on category and search
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfccb] pb-20 relative overflow-hidden">
      
      {/* Background Blobs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-leaf/20 to-[#22c55e]/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tl from-[#fef08a]/20 to-[#84cc16]/10 rounded-full blur-3xl"
      />

      {/* Header */}
      <div className="relative z-10 bg-white/90 backdrop-blur-xl border-b border-fresh-green/10 sticky top-0">
        <div className="p-4">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Leaf className="text-leaf" size={26} fill="#84cc16" />
              <h1 className="text-xl font-black tracking-tight text-fresh-green">Yumistry</h1>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => navigate('/cart')}
                className="relative hover:scale-110 transition-transform"
              >
                <ShoppingCart size={22} className="text-fresh-green" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-leaf text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {getTotalItems()}
                  </span>
                )}
              </button>
              <button 
                onClick={() => navigate('/account')}
                className="hover:scale-110 transition-transform"
              >
                <User size={22} className="text-fresh-green" />
              </button>
            </div>
          </div>

          {/* Location */}
          <button 
            onClick={() => setShowLocationModal(true)}
            className="flex items-center gap-2 text-sm hover:bg-fresh-green/5 px-2 py-1 rounded-lg transition-colors -ml-2"
          >
            <MapPin size={16} className="text-leaf" />
            <span className="font-bold text-fresh-green">Delivery in 8 mins</span>
            <span className="text-fresh-green/60">{selectedLocation}</span>
            <ChevronDown size={16} className="text-fresh-green/60" />
          </button>
        </div>
      </div>

      <div className="relative z-10 px-4 py-4">
        {/* Search Bar */}
        <div className="relative mb-5">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-fresh-green/40" size={20} />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for vegetables, fruits, dairy..." 
            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white border-2 border-fresh-green/10 outline-none focus:border-leaf transition-all placeholder:text-fresh-green/30 font-medium text-sm shadow-sm"
          />
        </div>

        {/* Offer Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-fresh-green to-leaf rounded-2xl p-5 text-white mb-6 shadow-lg relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-1">
              <Zap size={18} className="text-yellow-300" fill="#fef08a" />
              <h2 className="text-lg font-black tracking-tight">FLAT 20% OFF</h2>
            </div>
            <p className="text-sm opacity-90 font-semibold">On orders above ₹500</p>
            <p className="text-xs opacity-75 mt-1">Use code: YUMISTRY20</p>
          </div>
          <div className="absolute right-3 top-3 opacity-10">
            <Star size={70} className="text-white" fill="white" />
          </div>
        </motion.div>

        {/* Categories */}
        <div className="mb-6">
          <h3 className="text-base font-black text-fresh-green mb-3">Shop by Category</h3>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <motion.button
              onClick={() => setSelectedCategory('All')}
              className={`flex flex-col items-center gap-2 p-3 rounded-2xl min-w-[80px] transition-all ${
                selectedCategory === 'All'
                  ? 'bg-leaf text-white shadow-lg scale-105'
                  : 'bg-white border-2 border-fresh-green/10 text-fresh-green hover:border-leaf/30'
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
                className="flex flex-col items-center gap-2 p-3 rounded-2xl min-w-[80px] transition-all bg-white border-2 border-fresh-green/10 text-fresh-green hover:border-leaf/30 hover:scale-105"
              >
                <span className="text-2xl">{cat.icon}</span>
                <span className="text-xs font-bold whitespace-nowrap">{cat.name}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Products Section */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-base font-black text-fresh-green">
              {selectedCategory === 'All' ? 'All Products' : selectedCategory}
            </h3>
            <p className="text-xs font-semibold text-fresh-green/60">
              {filteredProducts.length} items
            </p>
          </div>
        </div>

        {/* Product Grid */}
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
            <p className="text-fresh-green/60 font-semibold">No products found</p>
          </div>
        )}

        {/* WhatsApp CTA */}
        <WhatsAppCTA />
      </div>

      {/* Cart Strip */}
      <CartStrip />

      {/* Bottom Navigation */}
      <BottomNav />

      {/* Location Modal */}
      {showLocationModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            className="bg-white w-full rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-black text-fresh-green">Select Location</h3>
              <button
                onClick={() => setShowLocationModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                ✕
              </button>
            </div>

            {/* Detect Location Button */}
            <button
              onClick={() => {
                detectLocation();
                setShowLocationModal(false);
              }}
              disabled={isDetecting}
              className="w-full mb-4 p-4 bg-gradient-to-r from-fresh-green to-leaf text-white rounded-xl font-bold flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <MapPin size={20} />
              {isDetecting ? 'Detecting...' : 'Use Current Location'}
            </button>

            {/* Custom Address Input */}
            <div className="mb-4">
              <input
                type="text"
                value={customAddress}
                onChange={(e) => setCustomAddress(e.target.value)}
                placeholder="Enter your address"
                className="w-full p-4 border-2 border-fresh-green/10 rounded-xl outline-none focus:border-leaf font-medium"
              />
              <button
                onClick={() => {
                  if (customAddress.trim()) {
                    setSelectedLocation(customAddress);
                    localStorage.setItem('userLocation', customAddress);
                    setCustomAddress('');
                    setShowLocationModal(false);
                  }
                }}
                className="w-full mt-2 p-3 bg-leaf text-white rounded-xl font-bold"
              >
                Save Address
              </button>
            </div>

            {/* Saved Locations */}
            <div className="space-y-2">
              <p className="text-sm font-bold text-fresh-green/60 mb-2">Saved Addresses</p>
              {['Home - New Delhi', 'Office - Gurgaon', 'Other - Noida'].map((loc) => (
                <button
                  key={loc}
                  onClick={() => {
                    setSelectedLocation(loc);
                    localStorage.setItem('userLocation', loc);
                    setShowLocationModal(false);
                  }}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                    selectedLocation === loc
                      ? 'border-leaf bg-leaf/5'
                      : 'border-fresh-green/10 hover:border-leaf/30'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <MapPin size={20} className="text-leaf" />
                    <span className="font-bold text-fresh-green">{loc}</span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Home;