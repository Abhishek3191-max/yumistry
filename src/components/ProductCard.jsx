import { useCart } from '../context/CartContext';
import { Plus, Minus, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart, removeFromCart, getItemQuantity } = useCart();
  const quantity = getItemQuantity(product.id);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const discount = product.originalPrice > product.price 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const toggleWishlist = (e) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="bg-white border border-[#7f1d1d]/10 rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all relative"
    >
      {/* Discount Badge */}
      {discount > 0 && (
        <div className="absolute top-2 left-2 bg-gradient-to-r from-[#7f1d1d] to-[#f52d05] text-white text-[10px] font-bold px-2 py-0.5 rounded-md z-10">
          {discount}% OFF
        </div>
      )}

      {/* Wishlist Heart Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={toggleWishlist}
        className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-md hover:scale-110 transition-transform z-10"
      >
        <Heart
          size={16}
          className={isWishlisted ? 'text-red-500 fill-red-500' : 'text-[#7f1d1d]/60'}
          strokeWidth={2.5}
        />
      </motion.button>

      {/* Product Image */}
      <div 
        onClick={() => navigate(`/product/${product.id}`)}
        className="w-full aspect-square flex items-center justify-center mb-3 rounded-xl overflow-hidden bg-white cursor-pointer"
      >
        <img 
          src={product.image} 
          className="w-full h-full object-contain" 
          alt={product.name}
          loading="lazy"
        />
      </div>

      {/* Product Info */}
      <div 
        onClick={() => navigate(`/product/${product.id}`)}
        className="space-y-1 cursor-pointer"
      >
        <h4 className="font-bold text-sm text-[#7f1d1d] line-clamp-2 leading-tight">
          {product.name}
        </h4>
        <p className="text-[11px] text-[#7f1d1d]/50 font-semibold">
          {product.weight}
        </p>

        {/* Price Section */}
        <div className="flex items-center gap-2 pt-1">
          <span className="font-bold text-base text-[#7f1d1d]">₹{product.price}</span>
          {discount > 0 && (
            <span className="text-xs text-gray-400 line-through">₹{product.originalPrice}</span>
          )}
        </div>
      </div>

      {/* Add to Cart Button */}
      <div className="mt-3">
        {quantity === 0 ? (
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => addToCart(product)}
            className="w-full bg-white border-2 border-[#f52d05] text-[#f52d05] font-bold text-sm py-2 rounded-lg hover:bg-gradient-to-r hover:from-[#7f1d1d] hover:to-[#f52d05] hover:text-white transition-all"
          >
            ADD
          </motion.button>
        ) : (
          <div className="flex items-center justify-between bg-gradient-to-r from-[#7f1d1d] to-[#f52d05] rounded-lg p-1">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => removeFromCart(product.id)}
              className="bg-white text-[#f52d05] rounded-md p-1.5 hover:bg-[#7f1d1d]/10 transition-colors"
            >
              <Minus size={14} strokeWidth={3} />
            </motion.button>
            <span className="text-white font-bold text-sm px-3">{quantity}</span>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => addToCart(product)}
              className="bg-white text-[#f52d05] rounded-md p-1.5 hover:bg-[#7f1d1d]/10 transition-colors"
            >
              <Plus size={14} strokeWidth={3} />
            </motion.button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProductCard;
