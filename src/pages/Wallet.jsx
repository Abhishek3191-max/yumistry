import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wallet as WalletIcon, Plus, ArrowUpRight, ArrowDownLeft, ArrowLeft, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';
import BottomNav from '../components/BottomNav';

const Wallet = () => {
  const navigate = useNavigate();
  const [balance] = useState(1250);
  const [showAddMoney, setShowAddMoney] = useState(false);
  const [amount, setAmount] = useState('');

  const transactions = [
    { id: 1, type: 'credit', amount: 500, desc: 'Added to wallet', date: '2024-01-15', time: '10:30 AM' },
    { id: 2, type: 'debit', amount: 280, desc: 'Order #ORD002', date: '2024-01-14', time: '05:45 PM' },
    { id: 3, type: 'credit', amount: 100, desc: 'Cashback', date: '2024-01-14', time: '05:46 PM' },
    { id: 4, type: 'debit', amount: 450, desc: 'Order #ORD001', date: '2024-01-13', time: '02:20 PM' },
    { id: 5, type: 'credit', amount: 1000, desc: 'Added to wallet', date: '2024-01-12', time: '11:00 AM' }
  ];

  const quickAmounts = [100, 200, 500, 1000];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfccb] pb-20">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-xl border-b border-fresh-green/10 sticky top-0 z-10">
        <div className="p-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-fresh-green/10 rounded-lg">
            <ArrowLeft size={22} className="text-fresh-green" />
          </button>
          <h1 className="text-xl font-black text-fresh-green">My Wallet</h1>
        </div>
      </div>

      <div className="p-4">
        {/* Wallet Balance Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-fresh-green to-leaf rounded-2xl p-6 text-white mb-4 shadow-lg"
        >
          <div className="flex items-center gap-2 mb-2">
            <WalletIcon size={24} />
            <span className="text-sm opacity-90">Available Balance</span>
          </div>
          <h2 className="text-4xl font-black mb-4">₹{balance}</h2>
          <button
            onClick={() => setShowAddMoney(true)}
            className="w-full bg-white text-leaf py-3 rounded-xl font-bold flex items-center justify-center gap-2"
          >
            <Plus size={20} />
            Add Money
          </button>
        </motion.div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-4 rounded-xl border border-fresh-green/10 flex items-center gap-3"
          >
            <div className="p-2 bg-green-50 rounded-lg">
              <ArrowDownLeft size={20} className="text-green-600" />
            </div>
            <div className="text-left">
              <p className="text-xs text-fresh-green/60">Total Received</p>
              <p className="font-black text-fresh-green">₹1,600</p>
            </div>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-4 rounded-xl border border-fresh-green/10 flex items-center gap-3"
          >
            <div className="p-2 bg-red-50 rounded-lg">
              <ArrowUpRight size={20} className="text-red-600" />
            </div>
            <div className="text-left">
              <p className="text-xs text-fresh-green/60">Total Spent</p>
              <p className="font-black text-fresh-green">₹730</p>
            </div>
          </motion.button>
        </div>

        {/* Transactions */}
        <div>
          <h3 className="text-base font-black text-fresh-green mb-3">Recent Transactions</h3>
          <div className="space-y-2">
            {transactions.map((txn, index) => (
              <motion.div
                key={txn.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-4 border border-fresh-green/10"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      txn.type === 'credit' ? 'bg-green-50' : 'bg-red-50'
                    }`}>
                      {txn.type === 'credit' ? (
                        <ArrowDownLeft size={18} className="text-green-600" />
                      ) : (
                        <ArrowUpRight size={18} className="text-red-600" />
                      )}
                    </div>
                    <div>
                      <p className="font-bold text-sm text-fresh-green">{txn.desc}</p>
                      <p className="text-xs text-fresh-green/60">{txn.date} • {txn.time}</p>
                    </div>
                  </div>
                  <p className={`font-black ${
                    txn.type === 'credit' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {txn.type === 'credit' ? '+' : '-'}₹{txn.amount}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Money Modal */}
      {showAddMoney && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            className="bg-white w-full rounded-t-3xl p-6"
          >
            <h3 className="text-xl font-black text-fresh-green mb-4">Add Money to Wallet</h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm font-bold text-fresh-green mb-2 block">Enter Amount</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-fresh-green font-bold">₹</span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0"
                    className="w-full pl-8 pr-4 py-4 border-2 border-fresh-green/10 rounded-xl outline-none focus:border-leaf text-2xl font-black text-fresh-green"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-bold text-fresh-green mb-2 block">Quick Add</label>
                <div className="grid grid-cols-4 gap-2">
                  {quickAmounts.map(amt => (
                    <button
                      key={amt}
                      onClick={() => setAmount(amt.toString())}
                      className="py-3 bg-gray-100 rounded-lg font-bold text-fresh-green hover:bg-leaf hover:text-white transition-all"
                    >
                      ₹{amt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => setShowAddMoney(false)}
                  className="flex-1 py-3 border-2 border-fresh-green/20 text-fresh-green rounded-xl font-bold"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    if (amount) {
                      alert(`₹${amount} added to wallet!`);
                      setAmount('');
                      setShowAddMoney(false);
                    }
                  }}
                  className="flex-1 py-3 bg-leaf text-white rounded-xl font-bold flex items-center justify-center gap-2"
                >
                  <CreditCard size={20} />
                  Add Money
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <BottomNav />
    </div>
  );
};

export default Wallet;
