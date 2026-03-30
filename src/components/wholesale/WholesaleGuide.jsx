import { motion } from 'framer-motion';
import { useDarkMode } from '../../context/DarkModeContext';

const steps = [
  {
    number: 1,
    tag: 'PEHLA KAAM',
    tagColor: 'text-blue-500',
    borderColor: 'border-blue-200',
    numBg: 'bg-blue-50',
    numColor: 'text-blue-500',
    title: 'Parcha Banwao',
    desc: 'Apni zarurat ki list ya shadi ka parcha hamare paas lekar aaiye — grocery ya bartan, jo bhi chahiye.',
    badge: null,
  },
  {
    number: 2,
    tag: 'DOOSRA KAAM',
    tagColor: 'text-orange-500',
    borderColor: 'border-orange-200',
    numBg: 'bg-orange-50',
    numColor: 'text-orange-500',
    title: 'Payment Karo',
    desc: 'Quote confirm ho jaane ke baad secure payment karo — UPI, bank transfer ya cash, sab chalega.',
    badge: null,
  },
  {
    number: 3,
    tag: 'BONUS STEP',
    tagColor: 'text-green-500',
    borderColor: 'border-green-200',
    numBg: 'bg-green-50',
    numColor: 'text-green-500',
    title: 'App Pe Parcha Lagao',
    desc: 'Hamare app pe apna parcha upload karo aur pao extra special discount — sirf app users ke liye!',
    badge: '● Extra Discount Milega',
  },
];

const WholesaleGuide = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={`mb-5 p-4 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      {/* Header */}
      <p className={`text-[10px] font-black tracking-widest uppercase mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-400'}`}>
        Wholesale Guide
      </p>
      <h2 className={`text-lg font-black mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        Order Kaise <span className="text-[#f52d05]">Karein?</span>
      </h2>

      {/* Steps label */}
      <p className={`text-[10px] font-black tracking-widest uppercase mb-3 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
        3 Aasan Steps
      </p>

      {/* Steps */}
      <div className="flex flex-col gap-3">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`flex gap-3 p-3 rounded-2xl border ${
              darkMode ? 'bg-gray-700 border-gray-600' : `bg-white border-gray-100`
            } shadow-sm`}
          >
            {/* Number + line */}
            <div className="flex flex-col items-center">
              <div className={`w-9 h-9 rounded-full border-2 ${step.borderColor} ${step.numBg} flex items-center justify-center flex-shrink-0`}>
                <span className={`text-sm font-black ${step.numColor}`}>{step.number}</span>
              </div>
              {i < steps.length - 1 && (
                <div className="w-px flex-1 bg-gray-200 mt-1" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pb-1">
              <p className={`text-[10px] font-black tracking-widest uppercase mb-0.5 ${step.tagColor}`}>
                {step.tag}
              </p>
              <h3 className={`text-sm font-black mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {step.title}
              </h3>
              <p className={`text-xs leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {step.desc}
              </p>
              {step.badge && (
                <div className="mt-2 inline-flex items-center bg-[#f52d05] text-white text-[11px] font-bold px-3 py-1 rounded-full">
                  {step.badge}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WholesaleGuide;
