import { Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useDarkMode } from '../context/DarkModeContext';

const WhatsAppCTA = () => {
  const { cart } = useCart();
  const { darkMode } = useDarkMode();
  const hasCartItems = cart.length > 0;

  const handleChat = () => {
    const msg = "Please call me we can deliver any thing related to grocery you want.";
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`);
  };

  return (
    <div className={`mt-8 p-4 border-2 border-dashed rounded-2xl text-center transition-all duration-300 ${
      hasCartItems ? 'mb-20' : 'mb-4'
    } ${
      darkMode 
        ? 'bg-orange-900/20 border-orange-400' 
        : 'bg-terracotta/10 border-terracotta'
    }`}>
      <p className={`text-sm font-bold italic mb-4 ${
        darkMode ? 'text-orange-400' : 'text-terracotta'
      }`}>"Call me back for daily rates!"</p>
      <button 
        onClick={handleChat} 
        className="w-full bg-[#25D366] hover:bg-[#20B858] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg transition-colors"
      >
        <Phone size={20} /> CHAT ON WHATSAPP
      </button>
    </div>
  );
};

export default WhatsAppCTA;
