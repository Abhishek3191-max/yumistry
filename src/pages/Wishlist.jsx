import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import BottomNav from '../components/BottomNav';

const Wishlist = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  // Mock wishlist with some products
  const [wishlist, setWishlist] = useState([
    products[0], // Tomato
    products[6], // Banana
    products[12], // Milk
    products[18] // Lays
  ]);

  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter(item => item.id !== productId));
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfccb] pb-20">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-xl border-b border-fresh-green/10 sticky top-0 z-10">
        <div className="p-4">
          <h1 className="text-2xl font-black text-fresh-green">My Wishlist</h1>
          <p className="text-sm text-fresh-green/60 font-medium">{wishlist.length} items</p>
        </div>
      </div>

      <div className="p-4">
        {wishlist.length > 0 ? (
          <div className="grid grid-cols-2 gap-3">
            {wishlist.map((product, index) => {
              const discount = product.originalPrice > product.price
                ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
                : 0;

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-fresh-green/10 rounded-2xl p-3 shadow-sm relative"
                >
                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors z-10"
                  >
                    <Trash2 size={14} className="text-red-500" />
                  </button>

                  {/* Discount Badge */}
                  {discount > 0 && (
                    <div className="absolute top-2 left-2 bg-leaf text-white text-[10px] font-bold px-2 py-0.5 rounded-md z-10">
                      {discount}% OFF
                    </div>
                  )}

                  {/* Product Image */}
                  <div
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="w-full h-32 flex items-center justify-center mb-3 rounded-xl overflow-hidden bg-gray-50 cursor-pointer"
                  >
                    <img
                      src={product.image}
                      className="w-full h-full object-contain"
                      alt={product.name}
                    />
                  </div>

                  {/* Product Info */}
                  <div
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="space-y-1 cursor-pointer mb-3"
                  >
                    <h4 className="font-bold text-sm text-fresh-green line-clamp-2 leading-tight">
                      {product.name}
                    </h4>
                    <p className="text-[11px] text-fresh-green/50 font-semibold">
                      {product.weight}
                    </p>

                    {/* Price */}
                    <div className="flex items-center gap-2 pt-1">
                      <span className="font-bold text-base text-fresh-green">₹{product.price}</span>
                      {discount > 0 && (
                        <span className="text-xs text-gray-400 line-through">₹{product.originalPrice}</span>
                      )}
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-gradient-to-r from-fresh-green to-leaf text-white font-bold text-sm py-2 rounded-lg flex items-center justify-center gap-2"
                  >
                    <ShoppingBag size={16} />
                    Add to Cart
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="bg-fresh-green/10 rounded-full p-8 mb-6">
              <Heart size={64} className="text-fresh-green/40" />
            </div>
            <h2 className="text-2xl font-black text-fresh-green mb-2">Your wishlist is empty</h2>
            <p className="text-fresh-green/60 text-center mb-6">Add items you love to your wishlist</p>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/home')}
              className="bg-gradient-to-r from-fresh-green to-leaf text-white px-8 py-3 rounded-xl font-bold shadow-lg"
            >
              Start Shopping
            </motion.button>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default Wishlist;
