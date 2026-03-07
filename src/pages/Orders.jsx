import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, Clock, CheckCircle, ChevronRight, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import BottomNav from '../components/BottomNav';

const Orders = () => {
  const navigate = useNavigate();
  
  // Mock orders data
  const [orders] = useState([
    {
      id: 'ORD001',
      date: '2024-01-15',
      items: 5,
      total: 450,
      status: 'delivered',
      deliveryTime: '8 mins'
    },
    {
      id: 'ORD002',
      date: '2024-01-14',
      items: 3,
      total: 280,
      status: 'delivered',
      deliveryTime: '10 mins'
    },
    {
      id: 'ORD003',
      date: '2024-01-12',
      items: 7,
      total: 620,
      status: 'delivered',
      deliveryTime: '9 mins'
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered': return 'text-leaf bg-leaf/10';
      case 'processing': return 'text-blue-600 bg-blue-50';
      case 'cancelled': return 'text-red-600 bg-red-50';
      default: return 'text-fresh-green/60 bg-fresh-green/10';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered': return CheckCircle;
      case 'processing': return Clock;
      default: return Package;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfccb] pb-20">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-xl border-b border-fresh-green/10 sticky top-0 z-10">
        <div className="p-4">
          <h1 className="text-2xl font-black text-fresh-green">My Orders</h1>
          <p className="text-sm text-fresh-green/60 font-medium">{orders.length} orders</p>
        </div>
      </div>

      <div className="p-4">
        {orders.length > 0 ? (
          <div className="space-y-3">
            {orders.map((order, index) => {
              const StatusIcon = getStatusIcon(order.status);
              return (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => navigate(`/order/${order.id}`)}
                  className="bg-white rounded-2xl p-4 shadow-sm border border-fresh-green/10 cursor-pointer hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-black text-fresh-green">Order #{order.id}</p>
                      <p className="text-xs text-fresh-green/60 font-medium">{order.date}</p>
                    </div>
                    <div className={`flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold ${getStatusColor(order.status)}`}>
                      <StatusIcon size={14} />
                      <span className="capitalize">{order.status}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-3 border-t border-fresh-green/10">
                    <div className="flex items-center gap-4 text-sm">
                      <div>
                        <p className="text-fresh-green/60 text-xs">Items</p>
                        <p className="font-bold text-fresh-green">{order.items}</p>
                      </div>
                      <div>
                        <p className="text-fresh-green/60 text-xs">Total</p>
                        <p className="font-bold text-fresh-green">₹{order.total}</p>
                      </div>
                      <div>
                        <p className="text-fresh-green/60 text-xs">Delivered in</p>
                        <p className="font-bold text-leaf">{order.deliveryTime}</p>
                      </div>
                    </div>
                    <ChevronRight size={20} className="text-fresh-green/40" />
                  </div>

                  <button className="w-full mt-3 py-2 border-2 border-leaf text-leaf rounded-xl font-bold text-sm hover:bg-leaf/5 transition-all">
                    Reorder
                  </button>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="bg-fresh-green/10 rounded-full p-8 mb-6">
              <Package size={64} className="text-fresh-green/40" />
            </div>
            <h2 className="text-2xl font-black text-fresh-green mb-2">No orders yet</h2>
            <p className="text-fresh-green/60 text-center mb-6">Start shopping to see your orders here</p>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/home')}
              className="bg-gradient-to-r from-fresh-green to-leaf text-white px-8 py-3 rounded-xl font-bold shadow-lg"
            >
              Start Shopping
            </motion.button>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default Orders;
