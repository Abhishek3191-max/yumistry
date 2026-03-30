import { motion } from 'framer-motion';
import { ShoppingBasket, UtensilsCrossed } from 'lucide-react';

const WholesaleCategoryCards = () => (
  <div className="mb-5">
    <h2 className="text-base font-black text-gray-900 mb-3">Hamaari Categories</h2>

    <div className="flex flex-col gap-3">

      {/* Grocery Card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="rounded-2xl p-4 bg-[#1a5c3a]"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="bg-white/20 p-1.5 rounded-lg">
            <ShoppingBasket size={18} className="text-white" />
          </div>
          <span className="text-white font-black text-base">Grocery Wholesale</span>
        </div>
        <p className="text-white/70 text-xs leading-relaxed mb-3">
          Dal, chawal, aata, masale, tel — sab kuch bulk mein. Freshness guaranteed.
        </p>
        <div className="flex flex-wrap gap-1.5">
          {['Dal & Chawal', 'Masale', 'Tel & Ghee', 'Aata'].map(tag => (
            <span key={tag} className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/15 text-white border border-white/20">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Bartan Card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="rounded-2xl p-4 bg-[#1e1b4b]"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="bg-white/20 p-1.5 rounded-lg">
            <UtensilsCrossed size={18} className="text-white" />
          </div>
          <span className="text-white font-black text-base">Bartan Wholesale</span>
        </div>
        <p className="text-white/70 text-xs leading-relaxed mb-3">
          Steel, aluminium, non-stick — restaurants aur families ke liye best rates.
        </p>
        <div className="flex flex-wrap gap-1.5">
          {['Steel Bartan', 'Non-Stick', 'Brass Items', 'Thali Sets'].map(tag => (
            <span key={tag} className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/15 text-white border border-white/20">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Shadi Parcha Card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="rounded-2xl p-4 bg-[#7f2a0e] relative overflow-hidden"
      >
        {/* Big 40% watermark */}
        <span className="absolute right-[-10px] bottom-[-10px] text-[80px] font-black text-white/10 leading-none select-none">
          40%
        </span>

        {/* Special offer badge */}
        <div className="inline-flex items-center gap-1 bg-white/20 px-2.5 py-1 rounded-full mb-3">
          <span className="text-[10px]">🎊</span>
          <span className="text-[10px] font-black text-white tracking-widest uppercase">Special Offer</span>
        </div>

        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-white font-black text-base leading-tight">Shadi-Viyah Lagan</h3>
            <h3 className="text-[#f97316] font-black text-base leading-tight">Parcha Discount</h3>
          </div>
          {/* Discount box */}
          <div className="bg-[#f97316] rounded-xl px-3 py-2 flex flex-col items-center min-w-[64px]">
            <span className="text-white font-black text-[11px]">Upto</span>
            <span className="text-white font-black text-2xl leading-none">40%</span>
            <span className="text-white/80 font-bold text-[10px]">OFF</span>
          </div>
        </div>

        <p className="text-white/70 text-xs leading-relaxed mb-3">
          Parcha dikhao aur dono categories mein special wholesale rate pao.
        </p>

        <div className="flex flex-wrap gap-1.5">
          {[
            { label: 'Grocery Parcha', emoji: '🛒' },
            { label: 'Bartan Parcha', emoji: '🍳' },
            { label: 'Free Delivery*', emoji: '🚚' },
          ].map(tag => (
            <span key={tag.label} className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/15 text-white border border-white/20 flex items-center gap-1">
              <span>{tag.emoji}</span> {tag.label}
            </span>
          ))}
        </div>
      </motion.div>

    </div>
  </div>
);

export default WholesaleCategoryCards;
