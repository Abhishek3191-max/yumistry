import { motion } from 'framer-motion';
import { Sparkles, BadgePercent, Phone } from 'lucide-react';

const WeddingOffer = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="mb-6 relative rounded-3xl overflow-hidden"
  >
    {/* Gradient Background */}
    <div className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] p-5">
      <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full -translate-y-8 translate-x-8" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-400/10 rounded-full translate-y-6 -translate-x-4" />

      {/* Badge */}
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles size={20} className="text-yellow-400" />
          </motion.div>
          <span className="text-yellow-400 text-xs font-black tracking-widest uppercase">
            Special Event Offer
          </span>
        </div>

        {/* Main Offer */}
        <div className="flex items-start gap-4 mb-4">
          <div className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl p-3 flex flex-col items-center min-w-[72px]">
            <BadgePercent size={24} className="text-white mb-0.5" />
            <span className="text-white font-black text-2xl leading-none">40%</span>
            <span className="text-white/80 text-[10px] font-bold">OFF</span>
          </div>
          <div>
            <h3 className="text-white font-black text-lg leading-tight mb-1">
              Shadi, Viyah &{'\n'}Lagan Orders 🎊
            </h3>
            <p className="text-white/60 text-xs leading-relaxed">
              Upto <span className="text-yellow-400 font-black">40% discount</span> on bulk grocery & bartan orders for weddings and special occasions
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { emoji: '💍', label: 'Shadi' },
            { emoji: '🎉', label: 'Viyah' },
            { emoji: '🪔', label: 'Lagan' },
          ].map(item => (
            <div key={item.label} className="bg-white/10 rounded-xl py-2 flex flex-col items-center gap-1">
              <span className="text-lg">{item.emoji}</span>
              <span className="text-white/80 text-[10px] font-bold">{item.label}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => window.open(`https://wa.me/919876543210?text=${encodeURIComponent('Hi Yumistry! Mujhe shadi/event ke liye wholesale order karna hai. 40% discount ke baare mein baat karni hai.')}`, '_blank')}
          className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-black py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg"
        >
          <Phone size={16} />
          Book Event Order on WhatsApp
        </motion.button>
      </div>
    </div>
  </motion.div>
);

export default WeddingOffer;
