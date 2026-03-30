import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Clock } from 'lucide-react';
import { useDarkMode } from '../../context/DarkModeContext';
import Swal from 'sweetalert2';

const coupons = [
  { id: 1, code: 'YUMI29', title: 'Save ₹29', desc: 'On orders above ₹1,000', saving: '₹29', validTill: '31 Dec 2025', tag: 'POPULAR', tagColor: 'bg-orange-500' },
  { id: 2, code: 'YUMI69', title: 'Save ₹69', desc: 'On orders above ₹5,000', saving: '₹69', validTill: '31 Dec 2025', tag: 'BEST VALUE', tagColor: 'bg-[#f52d05]' },
  { id: 3, code: 'FIRST50', title: 'Save ₹50', desc: 'First order special — min ₹200', saving: '₹50', validTill: '31 Dec 2025', tag: 'NEW USER', tagColor: 'bg-blue-500' },
  { id: 4, code: 'FREEDEL', title: 'Free Delivery', desc: 'No delivery charges on any order', saving: 'FREE', validTill: '31 Dec 2025', tag: 'LIMITED', tagColor: 'bg-purple-500' },
];

// Toast component removed — using Swal instead

const CouponCard = ({ coupon, index, onCopy }) => {
  const { darkMode } = useDarkMode();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(coupon.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);

    Swal.fire({
      toast: true,
      position: 'bottom',
      icon: 'success',
      title: `<span style="font-size:13px;font-weight:800;color:#1a1a1a">Coupon Copied!</span>`,
      html: `<span style="font-size:11px;color:#888">${coupon.code} — Apply at checkout 🎉</span>`,
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: true,
      iconColor: '#22c55e',
      background: '#ffffff',
      didOpen: (toast) => {
        toast.style.borderRadius = '16px';
        toast.style.boxShadow = '0 8px 32px rgba(0,0,0,0.18)';
        toast.style.padding = '10px 16px';
        toast.style.marginBottom = '80px';
      }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className={`rounded-2xl overflow-hidden border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} shadow-sm`}
    >
      <div className="flex">
        {/* Left */}
        <div className="bg-gradient-to-b from-[#7f1d1d] to-[#f52d05] flex flex-col items-center justify-center px-4 py-5 min-w-[80px]">
          <span className="text-white/70 text-[10px] font-bold uppercase tracking-wide">Save</span>
          <span className="text-white text-2xl font-black leading-tight">{coupon.saving}</span>
        </div>

        {/* Dashed divider */}
        <div className="relative flex flex-col items-center justify-between py-2">
          <div className={`w-px flex-1 border-l-2 border-dashed ${darkMode ? 'border-gray-600' : 'border-gray-200'}`} />
          <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} -mx-1.5 my-1`} />
          <div className={`w-px flex-1 border-l-2 border-dashed ${darkMode ? 'border-gray-600' : 'border-gray-200'}`} />
        </div>

        {/* Right */}
        <div className="flex-1 px-3 py-3">
          <div className="mb-1">
            <span className={`text-[9px] font-black px-1.5 py-0.5 rounded text-white ${coupon.tagColor}`}>
              {coupon.tag}
            </span>
            <h3 className={`text-sm font-black mt-0.5 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{coupon.title}</h3>
            <p className={`text-[11px] ${darkMode ? 'text-gray-400' : 'text-gray-400'}`}>{coupon.desc}</p>
          </div>

          <div className="flex items-center justify-between mt-2">
            <div className={`flex items-center px-2 py-1 rounded-lg border border-dashed ${darkMode ? 'border-gray-600 bg-gray-700' : 'border-[#f52d05]/30 bg-[#f52d05]/5'}`}>
              <span className={`text-xs font-black tracking-widest ${darkMode ? 'text-white' : 'text-[#7f1d1d]'}`}>
                {coupon.code}
              </span>
            </div>

            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={handleCopy}
              className={`flex items-center gap-1 text-[11px] font-black px-2.5 py-1.5 rounded-lg transition-all ${
                copied ? 'bg-green-500 text-white' : 'bg-gradient-to-r from-[#7f1d1d] to-[#f52d05] text-white'
              }`}
            >
              {copied ? <Check size={12} /> : <Copy size={12} />}
              {copied ? 'Copied!' : 'Copy'}
            </motion.button>
          </div>

          <div className="flex items-center gap-1 mt-1.5">
            <Clock size={10} className="text-gray-400" />
            <span className="text-[10px] text-gray-400">Valid till {coupon.validTill}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CouponList = () => {
  return (
    <div className="space-y-3 mb-5">
      <h3 className="text-sm font-black text-gray-900 mb-2">Available Coupons</h3>
      {coupons.map((coupon, i) => (
        <CouponCard key={coupon.id} coupon={coupon} index={i} onCopy={() => {}} />
      ))}
    </div>
  );
};

export default CouponList;
