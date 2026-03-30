import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Sparkles, Gift } from 'lucide-react';

const spinPrizes = ['10% OFF', '₹50 OFF', 'FREE DELIVERY', '₹100 OFF', '20% OFF', 'TRY AGAIN'];

const LuckySpin = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [showPrize, setShowPrize] = useState(false);
  const [prize, setPrize] = useState('');

  const handleSpin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setShowPrize(false);
    setTimeout(() => {
      setPrize(spinPrizes[Math.floor(Math.random() * spinPrizes.length)]);
      setIsSpinning(false);
      setShowPrize(true);
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500 rounded-3xl p-6 overflow-hidden shadow-2xl mb-5"
    >
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ scale: [0, 1, 0], opacity: [0, 1, 0], x: Math.random() * 300 - 150, y: Math.random() * 200 - 100 }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
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
        <p className="text-center text-white/90 text-sm font-bold mb-6">Spin the wheel & win exciting prizes!</p>

        <div className="relative w-48 h-48 mx-auto mb-6">
          <motion.div
            animate={isSpinning ? { rotate: 360 * 5 } : {}}
            transition={{ duration: 3, ease: 'easeOut' }}
            className="w-full h-full rounded-full bg-white shadow-2xl relative overflow-hidden"
          >
            {spinPrizes.map((item, index) => (
              <div
                key={index}
                className="absolute w-full h-full"
                style={{ transform: `rotate(${(360 / spinPrizes.length) * index}deg)`, transformOrigin: 'center' }}
              >
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 flex items-start justify-center pt-4 ${index % 2 === 0 ? 'text-[#f52d05]' : 'text-orange-500'}`}>
                  <span className="text-xs font-black">{item}</span>
                </div>
              </div>
            ))}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-[#7f1d1d] to-[#f52d05] rounded-full shadow-lg flex items-center justify-center">
              <Gift className="text-white" size={24} />
            </div>
          </motion.div>
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-red-500 z-20" />
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleSpin}
          disabled={isSpinning}
          className="w-full bg-white text-orange-500 py-4 rounded-2xl font-black text-lg shadow-xl disabled:opacity-50"
        >
          {isSpinning ? <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 0.8, repeat: Infinity }}>SPINNING...</motion.span> : 'SPIN NOW!'}
        </motion.button>

        <AnimatePresence>
          {showPrize && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-3xl flex items-center justify-center"
            >
              <div className="text-center">
                <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 0.5, repeat: 3 }}>
                  <Trophy className="text-yellow-400 mx-auto mb-4" size={64} />
                </motion.div>
                <h3 className="text-3xl font-black text-white mb-2">YOU WON!</h3>
                <p className="text-4xl font-black text-yellow-400 mb-4">{prize}</p>
                <button onClick={() => setShowPrize(false)} className="bg-white text-orange-500 px-8 py-3 rounded-xl font-bold">
                  Claim Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default LuckySpin;
