import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const WholesaleTopBanner = () => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    className="p-5 mb-5 bg-white relative overflow-hidden -mx-4"
  >
    <div className="relative z-10">
      {/* Badge */}
      <div className="inline-flex items-center gap-1.5 bg-[#f52d05]/10 border border-[#f52d05]/20 px-3 py-1.5 rounded-full mb-4">
        <Zap size={11} className="text-[#f52d05]" fill="#f52d05" />
        <span className="text-[10px] font-black tracking-widest text-[#f52d05] uppercase">
          Wholesale Distributor
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-[26px] font-black leading-tight mb-3">
        <span className="text-gray-900">Bulk Kharido,{' '}</span>
        <span className="text-[#f52d05]">Zyada Bachao</span>
      </h1>

      {/* Subtext */}
      <p className="text-gray-500 text-sm leading-relaxed mb-5">
        Grocery aur bartan dono categories mein best wholesale rates. Direct manufacturer se maal.
      </p>

      {/* Stats */}
      <div className="flex items-center">
        {[
          { value: '500+', label: 'PRODUCTS' },
          { value: '15+', label: 'SAAL' },
          { value: '40%', label: 'DISCOUNT' },
        ].map((stat, i) => (
          <div key={i} className="flex-1 flex flex-col items-center relative">
            {i !== 0 && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-px bg-gray-200" />
            )}
            <span className="text-[#f52d05] text-xl font-black">{stat.value}</span>
            <span className="text-gray-400 text-[9px] font-bold tracking-widest mt-0.5">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default WholesaleTopBanner;
