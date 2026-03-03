import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Phone, MapPin, Leaf, Store, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    userType: 'Retailer'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.address) {
      localStorage.setItem('userData', JSON.stringify(formData));
      navigate('/home');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfccb] flex items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      
      {/* Background Blobs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-10 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-leaf/20 to-[#22c55e]/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-10 left-10 w-56 h-56 sm:w-80 sm:h-80 bg-gradient-to-tl from-[#fef08a]/30 to-[#84cc16]/10 rounded-full blur-3xl"
      />

      {/* Form Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-sm bg-white/80 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-xl border border-white relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Leaf className="text-leaf" size={24} strokeWidth={2.5} fill="#84cc16" />
            <h1 className="text-2xl font-black tracking-tight text-fresh-green">Yumistry</h1>
          </div>
          <p className="text-xs font-semibold text-earth/70 tracking-[0.2em] uppercase mb-4">Chemistry of Freshness</p>
          <h2 className="text-lg font-bold text-fresh-green/80">Create Account</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-fresh-green/40" size={18} />
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name" 
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-white border-2 border-fresh-green/10 outline-none focus:border-leaf/40 transition-all placeholder:text-fresh-green/30 font-medium text-sm"
            />
          </div>

          {/* Phone Input */}
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-fresh-green/40" size={18} />
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="WhatsApp Number" 
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-white border-2 border-fresh-green/10 outline-none focus:border-leaf/40 transition-all placeholder:text-fresh-green/30 font-medium text-sm"
            />
          </div>

          {/* Address Input */}
          <div className="relative">
            <MapPin className="absolute left-3 top-4 text-fresh-green/40" size={18} />
            <textarea 
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Delivery Address" 
              required
              rows="2"
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-white border-2 border-fresh-green/10 outline-none focus:border-leaf/40 transition-all placeholder:text-fresh-green/30 font-medium text-sm resize-none"
            />
          </div>

          {/* User Type Selection */}
          <div>
            <label className="block text-xs font-bold text-fresh-green/70 mb-2">Account Type</label>
            <div className="grid grid-cols-2 gap-2">
              <motion.button
                type="button"
                whileTap={{ scale: 0.95 }}
                onClick={() => setFormData({ ...formData, userType: 'Retailer' })}
                className={`p-2 rounded-lg border-2 transition-all ${
                  formData.userType === 'Retailer'
                    ? 'bg-gradient-to-br from-fresh-green to-leaf text-white border-leaf shadow-md'
                    : 'bg-white border-fresh-green/20 text-fresh-green hover:border-leaf/40'
                }`}
              >
                <Store size={16} className="mx-auto mb-1" />
                <p className="text-xs font-bold">Retailer</p>
              </motion.button>

              <motion.button
                type="button"
                whileTap={{ scale: 0.95 }}
                onClick={() => setFormData({ ...formData, userType: 'Wholesaler' })}
                className={`p-2 rounded-lg border-2 transition-all ${
                  formData.userType === 'Wholesaler'
                    ? 'bg-gradient-to-br from-fresh-green to-leaf text-white border-leaf shadow-md'
                    : 'bg-white border-fresh-green/20 text-fresh-green hover:border-leaf/40'
                }`}
              >
                <Building2 size={16} className="mx-auto mb-1" />
                <p className="text-xs font-bold">Wholesaler</p>
              </motion.button>
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-fresh-green to-leaf text-white py-3 rounded-lg font-bold text-sm shadow-lg hover:shadow-xl transition-all mt-6"
          >
            Create Account
          </motion.button>

          {/* Login Link */}
          <p className="text-center text-xs text-fresh-green/60 font-medium mt-4">
            Already have an account?{' '}
            <button
              type="button"
              onClick={() => navigate('/login')}
              className="text-leaf font-bold hover:underline"
            >
              Login
            </button>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default Register;