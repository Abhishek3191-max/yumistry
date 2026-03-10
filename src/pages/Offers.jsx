import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tag, Copy, Check, Zap, Gift, Percent, Clock, Star, Trophy, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

const Offers = () => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const [copiedCode, setCopiedCode] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);
  const [showPrize, setShowPrize] = useState(false);
  const [prize, setPrize] = useState('');

  const offers = [
    {
      id: 1,
      code: 'YUMISTRY20',
      title: 'Flat 20% Off',
      description: 'On orders above ₹500',
      discount: '20%',
      minOrder: 500,
      validTill: '31 Jan 2024',
      color: 'from-fresh-green to-leaf',
      icon: Percent
    },
    {
      id: 2,
      code: 'FIRST50',
      title: 'First Order Special',
      description: 'Get ₹50 off on first order',
      discount: '₹50',
      minOrder: 200,
      validTill: '28 Feb 2024',
      color: 'from-blue-500 to-blue-600',
      icon: Star
    },
    {
      id: 3,
      code: 'FREEDEL',
      title: 'Free Delivery',
      description: 'No delivery charges',
      discount: 'FREE',
      minOrder: 0,
      validTill: '15 Feb 2024',
      color: 'from-purple-500 to-purple-600',
      icon: Zap
    },
    {
      id: 4,
      code: 'SAVE100',
      title: 'Save ₹100',
      description: 'On orders above ₹1000',
      discount: '₹100',
      minOrder: 1000,
      validTill: '20 Feb 2024',
      color: 'from-orange-500 to-red-500',
      icon: Gift
    }
  ];

  const spinPrizes = ['10% OFF', '₹50 OFF', 'FREE DELIVERY', '₹100 OFF', '20% OFF', 'TRY AGAIN'];

  const handleSpin = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    setShowPrize(false);
    
    setTimeout(() => {
      const randomPrize = spinPrizes[Math.floor(Math.random() * spinPrizes.length)];
      setPrize(randomPrize);
      setIsSpinning(false);
      setShowPrize(true);
    }, 3000);
  };

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  return (
    <div className={`min-h-screen pb-20 transition-colors ${
      darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfccb]'
    }`}>
      <Header />
      
      <div className="p-4">
        <h2 className={`text-2xl font-black mb-1 ${
          darkMode ? 'text-white' : 'text-fresh-green'
        }`}>Offers & Deals</h2>
        <p className={`text-sm font-medium mb-6 ${
          darkMode ? 'text-gray-400' : 'text-fresh-green/60'
        }`}>{offers.length} offers available</p>

        <div className="space-y-6">
        {/* Lucky Spin Wheel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500 rounded-3xl p-6 overflow-hidden shadow-2xl"
        >
          {/* Animated Background Stars */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                x: Math.random() * 300 - 150,
                y: Math.random() * 200 - 100
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{ left: '50%', top: '50%' }}
            />
          ))}

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Trophy className="text-white" size={28} />
              <h2 className="text-2xl font-black text-white">Lucky Spin</h2>
              <Sparkles className="text-white" size={28} />
            </div>
            <p className="text-center text-white/90 text-sm font-bold mb-6">
              Spin the wheel & win exciting prizes!
            </p>

            {/* Spin Wheel */}
            <div className="relative w-48 h-48 mx-auto mb-6">
              <motion.div
                animate={isSpinning ? { rotate: 360 * 5 } : {}}
                transition={{ duration: 3, ease: "easeOut" }}
                className="w-full h-full rounded-full bg-white shadow-2xl relative overflow-hidden"
              >
                {spinPrizes.map((item, index) => (
                  <div
                    key={index}
                    className="absolute w-full h-full"
                    style={{
                      transform: `rotate(${(360 / spinPrizes.length) * index}deg)`,
                      transformOrigin: 'center'
                    }}
                  >
                    <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 flex items-start justify-center pt-4 ${
                      index % 2 === 0 ? 'text-leaf' : 'text-orange-500'
                    }`}>
                      <span className="text-xs font-black">{item}</span>
                    </div>
                  </div>
                ))}
                
                {/* Center Circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-leaf to-fresh-green rounded-full shadow-lg flex items-center justify-center">
                  <Gift className="text-white" size={24} />
                </div>
              </motion.div>

              {/* Pointer */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-red-500 z-20" />
            </div>

            {/* Spin Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleSpin}
              disabled={isSpinning}
              className="w-full bg-white text-orange-500 py-4 rounded-2xl font-black text-lg shadow-xl disabled:opacity-50 relative overflow-hidden"
            >
              {isSpinning ? (
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  SPINNING...
                </motion.span>
              ) : (
                'SPIN NOW!'
              )}
            </motion.button>

            {/* Prize Display */}
            <AnimatePresence>
              {showPrize && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-3xl flex items-center justify-center"
                >
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 0.5, repeat: 3 }}
                    >
                      <Trophy className="text-yellow-400 mx-auto mb-4" size={64} />
                    </motion.div>
                    <h3 className="text-3xl font-black text-white mb-2">YOU WON!</h3>
                    <p className="text-4xl font-black text-yellow-400 mb-4">{prize}</p>
                    <button
                      onClick={() => setShowPrize(false)}
                      className="bg-white text-orange-500 px-8 py-3 rounded-xl font-bold"
                    >
                      Claim Now
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Offers Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-fresh-green to-leaf rounded-2xl p-6 text-white shadow-lg relative overflow-hidden"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -right-10 -top-10 opacity-10"
          >
            <Gift size={120} />
          </motion.div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Zap size={24} className="text-yellow-300" fill="#fef08a" />
              <h2 className="text-2xl font-black">Special Deals</h2>
            </div>
            <p className="text-sm opacity-90">Save more with exclusive offers</p>
          </div>
        </motion.div>

        {/* Offers List */}
        <div className="space-y-4">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg border border-fresh-green/10 overflow-hidden"
              >
                {/* Offer Header */}
                <div className={`bg-gradient-to-r ${offer.color} p-4 text-white relative overflow-hidden`}>
                  <motion.div
                    animate={{ x: [0, 100, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-0 left-0 w-full h-full opacity-20"
                  >
                    <div className="w-20 h-20 bg-white rounded-full blur-xl" />
                  </motion.div>
                  
                  <div className="flex items-start justify-between relative z-10">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon size={20} />
                        <h3 className="text-lg font-black">{offer.title}</h3>
                      </div>
                      <p className="text-sm opacity-90">{offer.description}</p>
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1"
                    >
                      <p className="text-lg font-black">{offer.discount}</p>
                    </motion.div>
                  </div>
                </div>

                {/* Offer Details */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-4 text-sm">
                      <div>
                        <p className="text-fresh-green/60 text-xs">Min Order</p>
                        <p className="font-bold text-fresh-green">
                          {offer.minOrder > 0 ? `₹${offer.minOrder}` : 'No minimum'}
                        </p>
                      </div>
                      <div>
                        <p className="text-fresh-green/60 text-xs">Valid Till</p>
                        <p className="font-bold text-fresh-green">{offer.validTill}</p>
                      </div>
                    </div>
                  </div>

                  {/* Coupon Code */}
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gradient-to-r from-gray-50 to-leaf/5 border-2 border-dashed border-leaf/30 rounded-lg p-3 flex items-center justify-between">
                      <span className="font-black text-fresh-green tracking-wider">{offer.code}</span>
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleCopy(offer.code)}
                        className="flex items-center gap-1 text-leaf font-bold text-sm bg-white px-3 py-1 rounded-lg"
                      >
                        {copiedCode === offer.code ? (
                          <>
                            <Check size={16} />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy size={16} />
                            Copy
                          </>
                        )}
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-leaf/10 to-fresh-green/10 rounded-2xl p-4 border border-leaf/20"
        >
          <div className="flex items-start gap-3">
            <Sparkles size={20} className="text-leaf flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-fresh-green text-sm mb-1">How to use coupons?</p>
              <p className="text-xs text-fresh-green/60">
                Copy the coupon code and apply it at checkout to get instant discounts on your order. 
                Spin the wheel daily for bonus offers!
              </p>
            </div>
          </div>
        </motion.div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Offers;
