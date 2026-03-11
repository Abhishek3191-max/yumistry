import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2, Leaf, CreditCard, Shield, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext';

const PaymentWaiting = () => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();

  useEffect(() => {
    // Simulate payment processing
    const timer = setTimeout(() => {
      navigate('/order-success');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfccb]'}`}>
      {/* Background Blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-leaf/20 to-[#22c55e]/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tl from-[#fef08a]/30 to-[#84cc16]/10 rounded-full blur-3xl"
      />

      {/* Main Content */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`relative z-10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border max-w-md w-full text-center ${darkMode ? 'bg-gray-800/90 border-gray-700' : 'bg-white/90 border-white'}`}
      >
        {/* Animated Loader */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-24 h-24 mx-auto mb-6 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-fresh-green to-leaf rounded-full opacity-20 blur-xl"></div>
          <Loader2 size={96} className="text-leaf relative z-10" strokeWidth={2} />
        </motion.div>

        {/* Processing Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className={`text-2xl font-black mb-2 ${darkMode ? 'text-white' : 'text-fresh-green'}`}>Processing Payment</h1>
          <p className={`font-medium mb-6 ${darkMode ? 'text-gray-400' : 'text-fresh-green/60'}`}>
            Please wait while we process your payment
          </p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-3 mb-6"
        >
          {[
            { icon: CreditCard, text: 'Verifying payment details', delay: 0 },
            { icon: Shield, text: 'Securing transaction', delay: 1 },
            { icon: CheckCircle, text: 'Confirming order', delay: 2 }
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: step.delay }}
              className={`flex items-center gap-3 p-3 rounded-xl ${darkMode ? 'bg-leaf/30' : 'bg-leaf/5'}`}
            >
              <div className={`rounded-lg p-2 ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                <step.icon size={20} className="text-leaf" />
              </div>
              <span className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-fresh-green'}`}>{step.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Yumistry Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className={`flex items-center justify-center gap-2 pt-4 border-t ${darkMode ? 'border-gray-600' : 'border-fresh-green/10'}`}
        >
          <Leaf className="text-leaf" size={20} fill="#84cc16" />
          <span className={`text-sm font-bold ${darkMode ? 'text-gray-400' : 'text-fresh-green/60'}`}>
            Secured by Yumistry
          </span>
        </motion.div>

        {/* Animated Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-2 mt-4"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
              className="w-2 h-2 bg-leaf rounded-full"
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className={`relative z-10 text-center text-sm font-medium mt-6 ${darkMode ? 'text-gray-500' : 'text-fresh-green/50'}`}
      >
        Do not press back or refresh
      </motion.p>
    </div>
  );
};

export default PaymentWaiting;
