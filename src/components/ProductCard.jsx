import { useCart } from '../context/CartContext';
import { Plus, Minus, Heart, Star, Clock } from 'lucide-react';
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col cursor-pointer"
    >
      {/* Image Box */}
      <div className="relative w-full aspect-square rounded-2xl overflow-visible bg-[#f5f5f5] mb-5">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain rounded-2xl"
          loading="lazy"
          onClick={() => navigate(`/product/${product.id}`)}
        />

        {/* Wishlist */}
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={(e) => { e.stopPropagation(); setIsWishlisted(!isWishlisted); }}
          className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow"
        >
          <Heart
            size={14}
            className={isWishlisted ? 'text-red-500 fill-red-500' : 'text-gray-400'}
            strokeWidth={2.5}
          />
        </motion.button>

        {/* ADD / Quantity — half inside half outside image bottom right */}
        <div className="absolute -bottom-3 right-1.5 z-10">
          {quantity === 0 ? (
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => addToCart(product)}
              className="bg-white border-2 border-[#f52d05] text-[#f52d05] font-black text-[10px] px-3 py-0.5 rounded-lg shadow-md"
            >
              ADD
            </motion.button>
          ) : (
            <div className="flex items-center gap-1 bg-[#f52d05] rounded-lg px-1.5 py-0.5 shadow-md">
              <motion.button whileTap={{ scale: 0.9 }} onClick={() => removeFromCart(product.id)}>
                <Minus size={11} strokeWidth={3} className="text-white" />
              </motion.button>
              <span className="text-white font-black text-[11px] px-0.5">{quantity}</span>
              <motion.button whileTap={{ scale: 0.9 }} onClick={() => addToCart(product)}>
                <Plus size={11} strokeWidth={3} className="text-white" />
              </motion.button>
            </div>
          )}
        </div>
      </div>

      {/* Details */}
      <div onClick={() => navigate(`/product/${product.id}`)} className="px-0.5">
        {/* Weight + discount tag */}
        <p className="text-[10px] text-gray-400 font-semibold mb-0.5">{product.weight}</p>

        {/* Product Name */}
        <h4 className="font-bold text-[11px] text-gray-900 line-clamp-2 leading-tight mb-0.5">
          {product.name}
        </h4>

        {/* Stars + Delivery */}
        <div className="flex items-center gap-2 mb-1">
          <div className="flex items-center gap-0.5">
            {[1,2,3,4].map(s => (
              <Star key={s} size={10} className="text-yellow-400 fill-yellow-400" />
            ))}
            <Star size={10} className="text-gray-300 fill-gray-300" />
          </div>
          <div className="flex items-center gap-0.5 text-[10px] text-[#f52d05] font-semibold">
            <Clock size={10} />
            <span>{product.deliveryTime}</span>
          </div>
        </div>

        {/* Discount */}
        {discount > 0 && (
          <p className="text-[10px] font-bold text-[#f52d05] mb-0.5">{discount}% OFF</p>
        )}

        {/* Price */}
        <div className="flex items-center gap-1.5">
          <span className="font-black text-[12px] text-gray-900">₹{product.price}</span>
          {discount > 0 && (
            <span className="text-[10px] text-gray-400 line-through">₹{product.originalPrice}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
