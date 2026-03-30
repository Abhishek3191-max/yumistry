import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useDarkMode } from '../../context/DarkModeContext';
import { useCart } from '../../context/CartContext';

const ProductInfoSection = ({ product }) => {
  const { darkMode } = useDarkMode();
  const { addToCart, removeFromCart, getItemQuantity } = useCart();
  const quantity = getItemQuantity(product.id);
  const discount = product.originalPrice > product.price
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-112.5 z-50 px-4 py-3 border-t flex items-center justify-between gap-4 ${
      darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-100'
    } shadow-[0_-4px_20px_rgba(0,0,0,0.08)]`}>

      {/* Left — price info */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className={`text-xl font-black ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            ₹{product.price}
          </span>
          {discount > 0 && (
            <span className="text-xs text-gray-400 line-through">MRP ₹{product.originalPrice}</span>
          )}
          {discount > 0 && (
            <span className="text-[11px] font-bold text-white bg-[#f52d05] px-1.5 py-0.5 rounded">
              {discount}% OFF
            </span>
          )}
        </div>
        <span className={`text-[10px] ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
          Incl. of all taxes · {product.weight}
        </span>
      </div>

      {/* Right — Add to Cart */}
      {quantity === 0 ? (
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => addToCart(product)}
          className="bg-linear-to-r from-[#7f1d1d] to-[#f52d05] text-white font-bold px-6 py-2.5 rounded-xl shadow-lg text-sm whitespace-nowrap"
        >
          Add to Cart
        </motion.button>
      ) : (
        <div className="flex items-center gap-2 bg-linear-to-r from-[#7f1d1d] to-[#f52d05] rounded-xl px-2 py-1.5">
          <motion.button whileTap={{ scale: 0.9 }} onClick={() => removeFromCart(product.id)} className="bg-white text-[#f52d05] rounded-lg p-1.5">
            <Minus size={16} strokeWidth={3} />
          </motion.button>
          <span className="text-white font-black text-sm px-2">{quantity}</span>
          <motion.button whileTap={{ scale: 0.9 }} onClick={() => addToCart(product)} className="bg-white text-[#f52d05] rounded-lg p-1.5">
            <Plus size={16} strokeWidth={3} />
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default ProductInfoSection;
