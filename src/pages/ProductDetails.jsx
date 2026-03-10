import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Minus, Share2, Heart, Clock, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useDarkMode } from '../context/DarkModeContext';
import { products } from '../data/products';

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart, removeFromCart, getItemQuantity } = useCart();
  const { darkMode } = useDarkMode();
  const [liked, setLiked] = useState(false);

  const product = products.find(p => p.id === parseInt(productId));
  const quantity = getItemQuantity(product?.id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfccb] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-black text-fresh-green mb-2">Product not found</h2>
          <button
            onClick={() => navigate('/home')}
            className="text-leaf font-bold hover:underline"
          >
            Go back to home
          </button>
        </div>
      </div>
    );
  }

  const discount = product.originalPrice > product.price
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Check out ${product.name} on Yumistry!`,
        url: window.location.href,
      });
    }
  };

  return (
    <div className={`min-h-screen pb-24 transition-colors ${
      darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfccb]'
    }`}>
      {/* Header */}
      <div className={`backdrop-blur-xl border-b sticky top-0 z-10 transition-colors ${
        darkMode ? 'bg-gray-800/90 border-gray-700' : 'bg-white/90 border-fresh-green/10'
      }`}>
        <div className="flex items-center justify-between p-4">
          <button
            onClick={() => navigate(-1)}
            className={`p-2 rounded-lg transition-colors ${
              darkMode ? 'hover:bg-gray-700' : 'hover:bg-fresh-green/10'
            }`}
          >
            <ArrowLeft size={22} className={darkMode ? 'text-white' : 'text-fresh-green'} />
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className={`p-2 rounded-lg transition-colors ${
                darkMode ? 'hover:bg-gray-700' : 'hover:bg-fresh-green/10'
              }`}
            >
              <Share2 size={20} className={darkMode ? 'text-white' : 'text-fresh-green'} />
            </button>
            <button
              onClick={() => setLiked(!liked)}
              className={`p-2 rounded-lg transition-colors ${
                darkMode ? 'hover:bg-gray-700' : 'hover:bg-fresh-green/10'
              }`}
            >
              <Heart
                size={20}
                className={liked ? 'text-red-500 fill-red-500' : (darkMode ? 'text-white' : 'text-fresh-green')}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Product Image */}
      <div className={`p-8 mb-4 ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-contain"
          />
          {discount > 0 && (
            <div className="absolute top-0 left-0 bg-leaf text-white text-xs font-bold px-3 py-1 rounded-lg">
              {discount}% OFF
            </div>
          )}
        </motion.div>
      </div>

      {/* Product Info */}
      <div className="px-4 space-y-4">
        {/* Basic Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-4 shadow-sm border border-fresh-green/10"
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h1 className="text-xl font-black text-fresh-green mb-1">
                {product.name}
              </h1>
              <p className="text-sm text-fresh-green/60 font-semibold">
                {product.weight}
              </p>
            </div>
            <div className="flex items-center gap-2 bg-leaf/10 px-3 py-1 rounded-lg">
              <Clock size={14} className="text-leaf" />
              <span className="text-xs font-bold text-leaf">{product.deliveryTime}</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-black text-fresh-green">₹{product.price}</span>
            {discount > 0 && (
              <>
                <span className="text-lg text-gray-400 line-through">₹{product.originalPrice}</span>
                <span className="text-sm font-bold text-leaf bg-leaf/10 px-2 py-1 rounded">
                  Save ₹{product.originalPrice - product.price}
                </span>
              </>
            )}
          </div>

          {/* Add to Cart */}
          {quantity === 0 ? (
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => addToCart(product)}
              className="w-full bg-gradient-to-r from-fresh-green to-leaf text-white font-bold py-3 rounded-xl shadow-lg"
            >
              Add to Cart
            </motion.button>
          ) : (
            <div className="flex items-center justify-between bg-leaf rounded-xl p-2">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => removeFromCart(product.id)}
                className="bg-white text-leaf rounded-lg p-2 hover:bg-fresh-green/10 transition-colors"
              >
                <Minus size={20} strokeWidth={3} />
              </motion.button>
              <span className="text-white font-black text-lg px-4">{quantity}</span>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => addToCart(product)}
                className="bg-white text-leaf rounded-lg p-2 hover:bg-fresh-green/10 transition-colors"
              >
                <Plus size={20} strokeWidth={3} />
              </motion.button>
            </div>
          )}
        </motion.div>

        {/* Product Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-4 shadow-sm border border-fresh-green/10"
        >
          <h3 className="font-black text-fresh-green mb-3">Product Details</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-fresh-green/10">
              <span className="text-fresh-green/60">Category</span>
              <span className="font-bold text-fresh-green">{product.category}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-fresh-green/10">
              <span className="text-fresh-green/60">Weight/Quantity</span>
              <span className="font-bold text-fresh-green">{product.weight}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-fresh-green/10">
              <span className="text-fresh-green/60">Delivery Time</span>
              <span className="font-bold text-fresh-green">{product.deliveryTime}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-fresh-green/60">Price per unit</span>
              <span className="font-bold text-fresh-green">₹{product.price}</span>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-4 shadow-sm border border-fresh-green/10"
        >
          <h3 className="font-black text-fresh-green mb-3">Why Choose Yumistry?</h3>
          <div className="space-y-3">
            {[
              { icon: '🚀', title: 'Fast Delivery', desc: 'Get it in 8-10 minutes' },
              { icon: '🌿', title: 'Fresh Products', desc: 'Farm fresh quality guaranteed' },
              { icon: '💰', title: 'Best Prices', desc: 'Lowest prices in town' },
              { icon: '✅', title: 'Quality Check', desc: 'Every product is quality checked' }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="font-bold text-sm text-fresh-green">{item.title}</p>
                  <p className="text-xs text-fresh-green/60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Yumistry Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-2 py-4"
        >
          <Leaf className="text-leaf" size={20} fill="#84cc16" />
          <span className="text-sm font-bold text-fresh-green/60">
            Chemistry of Freshness
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetails;
