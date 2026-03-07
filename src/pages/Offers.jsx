import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tag, Copy, Check, Zap, Gift, Percent, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import BottomNav from '../components/BottomNav';

const Offers = () => {
  const navigate = useNavigate();
  const [copiedCode, setCopiedCode] = useState('');

  const offers = [
    {
      id: 1,
      code: 'YUMISTRY20',
      title: 'Flat 20% Off',
      description: 'On orders above ₹500',
      discount: '20%',
      minOrder: 500,
      validTill: '31 Jan 2024',
      color: 'from-fresh-green to-leaf'
    },
    {
      id: 2,
      code: 'FIRST50',
      title: 'First Order Special',
      description: 'Get ₹50 off on first order',
      discount: '₹50',
      minOrder: 200,
      validTill: '28 Feb 2024',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 3,
      code: 'FREEDEL',
      title: 'Free Delivery',
      description: 'No delivery charges',
      discount: 'FREE',
      minOrder: 0,
      validTill: '15 Feb 2024',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 4,
      code: 'SAVE100',
      title: 'Save ₹100',
      description: 'On orders above ₹1000',
      discount: '₹100',
      minOrder: 1000,
      validTill: '20 Feb 2024',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfccb] pb-20">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-xl border-b border-fresh-green/10 sticky top-0 z-10">
        <div className="p-4">
          <h1 className="text-2xl font-black text-fresh-green">Offers & Deals</h1>
          <p className="text-sm text-fresh-green/60 font-medium">{offers.length} offers available</p>
        </div>
      </div>

      {/* Banner */}
      <div className="p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-fresh-green to-leaf rounded-2xl p-6 text-white mb-6 shadow-lg relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Zap size={24} className="text-yellow-300" fill="#fef08a" />
              <h2 className="text-2xl font-black">Special Deals</h2>
            </div>
            <p className="text-sm opacity-90">Save more with exclusive offers</p>
          </div>
          <div className="absolute right-4 top-4 opacity-10">
            <Gift size={80} className="text-white" />
          </div>
        </motion.div>

        {/* Offers List */}
        <div className="space-y-4">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-fresh-green/10 overflow-hidden"
            >
              {/* Offer Header */}
              <div className={`bg-gradient-to-r ${offer.color} p-4 text-white`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Tag size={18} />
                      <h3 className="text-lg font-black">{offer.title}</h3>
                    </div>
                    <p className="text-sm opacity-90">{offer.description}</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                    <p className="text-lg font-black">{offer.discount}</p>
                  </div>
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
                  <div className="flex-1 bg-gray-50 border-2 border-dashed border-fresh-green/20 rounded-lg p-3 flex items-center justify-between">
                    <span className="font-black text-fresh-green tracking-wider">{offer.code}</span>
                    <button
                      onClick={() => handleCopy(offer.code)}
                      className="flex items-center gap-1 text-leaf font-bold text-sm"
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
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 bg-leaf/10 rounded-2xl p-4 border border-leaf/20"
        >
          <div className="flex items-start gap-3">
            <Percent size={20} className="text-leaf flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-fresh-green text-sm mb-1">How to use coupons?</p>
              <p className="text-xs text-fresh-green/60">
                Copy the coupon code and apply it at checkout to get instant discounts on your order.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Offers;
