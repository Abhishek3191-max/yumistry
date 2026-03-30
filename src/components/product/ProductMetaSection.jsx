import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import { useDarkMode } from '../../context/DarkModeContext';

const ProductMetaSection = ({ product }) => {
  const { darkMode } = useDarkMode();

  const cardClass = `rounded-2xl p-4 shadow-sm border transition-colors ${
    darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
  }`;
  const titleClass = `font-black mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`;
  const labelClass = darkMode ? 'text-gray-400' : 'text-gray-400';
  const valueClass = `font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`;
  const borderClass = `border-b ${darkMode ? 'border-gray-600' : 'border-gray-100'}`;

  return (
    <>
      {/* Product Details */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className={cardClass}>
        <h3 className={titleClass}>Product Details</h3>
        <div className="space-y-0 text-sm">
          {[
            { label: 'Category', value: product.category },
            { label: 'Weight/Quantity', value: product.weight },
            { label: 'Delivery Time', value: product.deliveryTime },
            { label: 'Price per unit', value: `₹${product.price}` },
          ].map((row, i, arr) => (
            <div key={i} className={`flex justify-between py-2 ${i < arr.length - 1 ? borderClass : ''}`}>
              <span className={labelClass}>{row.label}</span>
              <span className={valueClass}>{row.value}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Why Choose Us */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className={cardClass}>
        <h3 className={titleClass}>Why Choose Yumistry?</h3>
        <div className="space-y-3">
          {[
            { icon: '🚀', title: 'Fast Delivery', desc: 'Get it in 8-10 minutes' },
            { icon: '🌿', title: 'Fresh Products', desc: 'Farm fresh quality guaranteed' },
            { icon: '💰', title: 'Best Prices', desc: 'Lowest prices in town' },
            { icon: '✅', title: 'Quality Check', desc: 'Every product is quality checked' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className={`font-bold text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.title}</p>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-400'}`}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Badge */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex items-center justify-center gap-2 py-6">
        <Leaf className="text-[#f52d05]" size={20} fill="#f52d05" />
        <span className={`text-sm font-bold ${darkMode ? 'text-gray-400' : 'text-gray-400'}`}>
          Chemistry of Freshness
        </span>
      </motion.div>
    </>
  );
};

export default ProductMetaSection;
