import { useCart } from '../context/CartContext';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CartStrip = () => {
  const { cart, getTotalItems, getSubtotal } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed bottom-16 left-0 right-0 z-40 px-4"
      >
        <div className="max-w-[450px] mx-auto">
          <motion.div
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/cart')}
            className="bg-gradient-to-r from-[#f99e61] to-[#f52d05] rounded-xl shadow-2xl p-4 cursor-pointer flex items-center justify-between"
          >
            {/* Left Section - Items & Total */}
            <div className="flex items-center gap-3">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                <ShoppingBag size={22} className="text-white" strokeWidth={2.5} />
              </div>
              <div className="text-white">
                <p className="text-base font-black">
                  {getTotalItems()} {getTotalItems() === 1 ? 'Item' : 'Items'} | ₹{getSubtotal()}
                </p>
                <p className="text-xs opacity-90 font-medium">Plus taxes</p>
              </div>
            </div>

            {/* Right Section - View Cart Button */}
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-white font-bold text-sm">View Cart</span>
              <ArrowRight size={18} className="text-white" strokeWidth={3} />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CartStrip;
