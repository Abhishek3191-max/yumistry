import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const WholesaleHero = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="relative rounded-3xl overflow-hidden mb-6 bg-gradient-to-br from-[#7f1d1d] to-[#f52d05] p-6"
  >
    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-10 translate-x-10" />
    <div className="absolute bottom-0 left-0 w-28 h-28 bg-white/10 rounded-full translate-y-10 -translate-x-6" />
    <div className="relative z-10">
      <div className="flex items-center gap-2 mb-3">
        <div className="bg-white/20 p-2 rounded-xl">
          <ShoppingBag size={22} className="text-white" />
        </div>
        <span className="text-white/80 text-sm font-semibold">Yumistry Wholesale</span>
      </div>
      <h1 className="text-2xl font-black text-white leading-tight mb-2">
        Bulk Orders,{' '}Better Prices 🏪
      </h1>
      <p className="text-white/70 text-sm font-medium">
        Premium wholesale supply for businesses, shops & events
      </p>
    </div>
  </motion.div>
);

export default WholesaleHero;
