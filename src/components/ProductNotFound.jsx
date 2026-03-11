import { Phone, MessageCircle, ShoppingBag, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext';

const ProductNotFound = ({ searchQuery }) => {
  const { darkMode } = useDarkMode();

  const handleWhatsApp = () => {
    const message = `Hi! I'm looking for "${searchQuery}" which is not available on the app. Can you help me get this product at the best price and quality?`;
    window.open(`https://wa.me/917905140270?text=${encodeURIComponent(message)}`);
  };

  const handleCall = () => {
    window.open('tel:+917905140270');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-2xl p-6 shadow-lg border-2 border-dashed transition-colors ${
        darkMode 
          ? 'bg-gray-800/50 border-green-400/50' 
          : 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-300'
      }`}
    >
      {/* Header Icon */}
      <div className="text-center mb-4">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-3 ${
          darkMode ? 'bg-green-500/20' : 'bg-green-100'
        }`}>
          <ShoppingBag size={32} className={darkMode ? 'text-green-400' : 'text-green-600'} />
        </div>
        <h3 className={`text-lg font-black mb-2 ${
          darkMode ? 'text-white' : 'text-gray-800'
        }`}>
          Product Not Available
        </h3>
      </div>

      {/* Main Message */}
      <div className={`text-center mb-6 p-4 rounded-xl ${
        darkMode ? 'bg-gray-700/50' : 'bg-white/70'
      }`}>
        <p className={`text-sm font-semibold mb-3 ${
          darkMode ? 'text-gray-200' : 'text-gray-700'
        }`}>
          हम यह प्रोडक्ट भी आपको डिलीवर कर सकते हैं सर्वोत्तम मूल्य और गुणवत्ता के साथ!
        </p>
        <p className={`text-xs leading-relaxed ${
          darkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          ऐसा कोई भी किराना उत्पाद जो अभी ऐप पर उपलब्ध नहीं है, उसे ऑर्डर करने के लिए नीचे दिए गए विकल्पों का उपयोग करें। हम आपको वह उत्पाद सर्वोत्तम मूल्य पर उपलब्ध कराने का प्रयास करेंगे।
        </p>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        {/* WhatsApp Button */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={handleWhatsApp}
          className="w-full bg-[#25D366] hover:bg-[#20B858] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg transition-colors"
        >
          <MessageCircle size={22} />
          <span>Chat on WhatsApp</span>
        </motion.button>

        {/* Call Button */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={handleCall}
          className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg transition-colors border-2 ${
            darkMode 
              ? 'bg-blue-600 hover:bg-blue-700 text-white border-blue-500' 
              : 'bg-blue-500 hover:bg-blue-600 text-white border-blue-400'
          }`}
        >
          <Phone size={22} />
          <span>Call: 7905140270</span>
        </motion.button>
      </div>

      {/* Features */}
      <div className={`mt-6 p-4 rounded-xl ${
        darkMode ? 'bg-gray-700/30' : 'bg-green-50'
      }`}>
        <div className="flex items-center justify-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <p className={`text-xs font-bold ${
              darkMode ? 'text-green-400' : 'text-green-600'
            }`}>
              ✅ Best Price
            </p>
            <p className={`text-xs ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Guaranteed
            </p>
          </div>
          <div>
            <p className={`text-xs font-bold ${
              darkMode ? 'text-green-400' : 'text-green-600'
            }`}>
              🚀 Fast Delivery
            </p>
            <p className={`text-xs ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Same Day
            </p>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <p className={`text-center text-xs mt-4 font-medium ${
        darkMode ? 'text-gray-500' : 'text-gray-500'
      }`}>
        🌿 Yumistry - Chemistry of Freshness
      </p>
    </motion.div>
  );
};

export default ProductNotFound;