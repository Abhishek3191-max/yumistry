import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useDarkMode } from '../../context/DarkModeContext';

const ProductImageSection = ({ product, discount }) => {
  const { darkMode } = useDarkMode();
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div className={`p-8 mb-4 transition-colors relative ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <img src={product.image} alt={product.name} className="w-full h-80 object-contain" />
        {discount > 0 && (
          <div className="absolute top-0 left-0 bg-[#f52d05] text-white text-xs font-bold px-3 py-1 rounded-lg">
            {discount}% OFF
          </div>
        )}
        {/* Wishlist button — top right of image */}
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => setWishlisted(!wishlisted)}
          className="absolute top-0 right-0 w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center"
        >
          <Heart
            size={18}
            className={wishlisted ? 'text-red-500 fill-red-500' : 'text-gray-400'}
            strokeWidth={2.5}
          />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ProductImageSection;
