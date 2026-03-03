import React from 'react';
import { motion } from 'framer-motion';
import { Search, ShoppingCart, User, Leaf, Star, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import BottomNav from '../components/BottomNav';
import WhatsAppCTA from '../components/WhatsAppCTA';

const Home = () => {
  const products = [
    { id: 1, name: 'Desi Tamatar', price: 40, unit: '1kg', img: 'https://images.unsplash.com/photo-1546470427-227c7369a6d1?w=400' },
    { id: 2, name: 'Pahari Aloo', price: 30, unit: '1kg', img: 'https://images.unsplash.com/photo-1518977676601-b53f02ac6d31?w=400' },
    { id: 3, name: 'Fresh Onion', price: 35, unit: '1kg', img: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=400' },
    { id: 4, name: 'Green Chilli', price: 15, unit: '200g', img: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?w=400' },
    { id: 5, name: 'Fresh Apple', price: 140, unit: '1kg', img: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400' },
    { id: 6, name: 'Banana (Kela)', price: 60, unit: '1 Dozen', img: 'https://images.unsplash.com/photo-1571771894821-ad990241275d?w=400' },
    { id: 7, name: 'Cauliflower', price: 45, unit: '1 pc', img: 'https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=400' },
    { id: 8, name: 'Ginger (Adrak)', price: 25, unit: '250g', img: 'https://images.unsplash.com/photo-1615485290382-441e4d019cb0?w=400' },
  ];

  const categories = ['Vegetables', 'Fruits', 'Organic', 'Bulk Deals'];

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
      <div className="relative z-10 bg-white/80 backdrop-blur-xl border-b border-fresh-green/10">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <Leaf className="text-leaf" size={24} fill="#84cc16" />
            <h1 className="text-xl font-black tracking-tight text-fresh-green">Yumistry</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <ShoppingCart size={20} className="text-fresh-green" />
              <span className="absolute -top-2 -right-2 bg-leaf text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">3</span>
            </div>
            <User size={20} className="text-fresh-green" />
          </div>
        </div>
      </div>

      <div className="relative z-10 px-4 py-4">
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-fresh-green/40" size={18} />
          <input 
            type="text" 
            placeholder="Search fresh vegetables, fruits..." 
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/80 backdrop-blur-sm border-2 border-fresh-green/10 outline-none focus:border-leaf/40 transition-all placeholder:text-fresh-green/30 font-medium text-sm"
          />
        </div>

        {/* Offer Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-fresh-green to-leaf rounded-2xl p-6 text-white mb-6 shadow-lg relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Zap size={20} className="text-yellow-300" />
              <h2 className="text-xl font-black tracking-tight">FLAT 20% OFF</h2>
            </div>
            <p className="text-sm opacity-90 font-semibold">On First Wholesale Order</p>
            <p className="text-xs opacity-75 mt-1 tracking-[0.1em] uppercase">Chemistry of Freshness</p>
          </div>
          <div className="absolute right-4 top-4 opacity-20">
            <Star size={60} className="text-white" fill="white" />
          </div>
        </motion.div>

        {/* Categories */}
        <div className="mb-6">
          <h3 className="text-lg font-black text-fresh-green mb-3">Categories</h3>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((cat, i) => (
              <motion.button 
                key={cat}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="px-4 py-2 bg-white/80 backdrop-blur-sm border-2 border-fresh-green/20 rounded-xl text-sm font-bold text-fresh-green whitespace-nowrap hover:bg-leaf hover:text-white hover:border-leaf transition-all shadow-sm"
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Trending Section */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-lg font-black text-fresh-green">Trending Deals</h3>
            <p className="text-xs font-semibold text-earth/70 tracking-[0.1em] uppercase">Fresh & Popular</p>
          </div>
          <button className="text-sm font-bold text-leaf hover:underline">View All</button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {products.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <ProductCard product={item} />
            </motion.div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <WhatsAppCTA />
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Home;