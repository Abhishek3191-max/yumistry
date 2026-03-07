import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Home, Briefcase, Plus, Edit2, Trash2, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import BottomNav from '../components/BottomNav';

const Addresses = () => {
  const navigate = useNavigate();
  const [addresses, setAddresses] = useState([
    { id: 1, type: 'Home', address: 'A-123, Sector 15, New Delhi - 110001', isDefault: true },
    { id: 2, type: 'Office', address: 'Tower B, DLF Cyber City, Gurgaon - 122002', isDefault: false },
    { id: 3, type: 'Other', address: 'C-45, Noida Sector 62, Noida - 201301', isDefault: false }
  ]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newAddress, setNewAddress] = useState({ type: 'Home', address: '' });

  const handleAddAddress = () => {
    if (newAddress.address.trim()) {
      setAddresses([...addresses, { id: Date.now(), ...newAddress, isDefault: false }]);
      setNewAddress({ type: 'Home', address: '' });
      setShowAddModal(false);
    }
  };

  const handleDelete = (id) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
  };

  const handleSetDefault = (id) => {
    setAddresses(addresses.map(addr => ({ ...addr, isDefault: addr.id === id })));
  };

  const getIcon = (type) => {
    switch (type) {
      case 'Home': return Home;
      case 'Office': return Briefcase;
      default: return MapPin;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfccb] pb-20">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-xl border-b border-fresh-green/10 sticky top-0 z-10">
        <div className="p-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-fresh-green/10 rounded-lg">
            <ArrowLeft size={22} className="text-fresh-green" />
          </button>
          <div>
            <h1 className="text-xl font-black text-fresh-green">Saved Addresses</h1>
            <p className="text-xs text-fresh-green/60">{addresses.length} addresses</p>
          </div>
        </div>
      </div>

      <div className="p-4">
        {/* Add Address Button */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => setShowAddModal(true)}
          className="w-full mb-4 p-4 bg-gradient-to-r from-fresh-green to-leaf text-white rounded-xl font-bold flex items-center justify-center gap-2"
        >
          <Plus size={20} />
          Add New Address
        </motion.button>

        {/* Addresses List */}
        <div className="space-y-3">
          {addresses.map((addr, index) => {
            const Icon = getIcon(addr.type);
            return (
              <motion.div
                key={addr.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-4 shadow-sm border border-fresh-green/10"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-leaf/10 rounded-lg">
                    <Icon size={20} className="text-leaf" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-black text-fresh-green">{addr.type}</h3>
                      {addr.isDefault && (
                        <span className="text-xs bg-leaf text-white px-2 py-0.5 rounded-full font-bold">
                          Default
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-fresh-green/60">{addr.address}</p>
                  </div>
                </div>

                <div className="flex gap-2 mt-3">
                  {!addr.isDefault && (
                    <button
                      onClick={() => handleSetDefault(addr.id)}
                      className="flex-1 py-2 border-2 border-leaf text-leaf rounded-lg font-bold text-sm"
                    >
                      Set Default
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(addr.id)}
                    className="p-2 border-2 border-red-500 text-red-500 rounded-lg"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Add Address Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            className="bg-white w-full rounded-t-3xl p-6"
          >
            <h3 className="text-xl font-black text-fresh-green mb-4">Add New Address</h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm font-bold text-fresh-green mb-2 block">Address Type</label>
                <div className="flex gap-2">
                  {['Home', 'Office', 'Other'].map(type => (
                    <button
                      key={type}
                      onClick={() => setNewAddress({ ...newAddress, type })}
                      className={`flex-1 py-2 rounded-lg font-bold ${
                        newAddress.type === type
                          ? 'bg-leaf text-white'
                          : 'bg-gray-100 text-fresh-green'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-bold text-fresh-green mb-2 block">Full Address</label>
                <textarea
                  value={newAddress.address}
                  onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })}
                  placeholder="Enter complete address"
                  rows={3}
                  className="w-full p-3 border-2 border-fresh-green/10 rounded-xl outline-none focus:border-leaf"
                />
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 py-3 border-2 border-fresh-green/20 text-fresh-green rounded-xl font-bold"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddAddress}
                  className="flex-1 py-3 bg-leaf text-white rounded-xl font-bold"
                >
                  Save Address
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

export default Addresses;
