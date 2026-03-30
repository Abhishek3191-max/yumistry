import { useCart } from '../context/CartContext';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';

const CartStrip = () => {
  const { cart, getTotalItems, getSubtotal } = useCart();
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();

  if (cart.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed bottom-20 left-0 right-0 z-50 px-4 pointer-events-none"
      >
        <div className="max-w-[450px] mx-auto pointer-events-auto">
          <motion.div
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/cart')}
            className="bg-gradient-to-r from-[#7f1d1d] to-[#f52d05] rounded-2xl shadow-xl px-4 py-2.5 cursor-pointer flex items-center justify-between"
          >
            {/* Left - Items & Total */}
            <div className="flex items-center gap-2.5">
              <div className="bg-white/20 rounded-xl p-1.5">
                <ShoppingBag size={18} className="text-white" strokeWidth={2.5} />
              </div>
              <div className="text-white">
                <p className="text-sm font-black leading-tight">
                  {getTotalItems()} {getTotalItems() === 1 ? 'Item' : 'Items'} · ₹{getSubtotal()}
                </p>
                <p className="text-[10px] opacity-80 font-medium">Plus taxes</p>
              </div>
            </div>

            {/* Right - View Cart */}
            <div className="flex items-center gap-1 bg-white/20 rounded-xl px-3 py-1.5">
              <span className="text-white font-bold text-xs">View Cart</span>
              <ArrowRight size={14} className="text-white" strokeWidth={3} />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CartStrip;
