import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Lock, Leaf, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phone: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    if (!formData.phone) newErrors.phone = 'Phone number required';
    if (!formData.password) newErrors.password = 'Password required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Check if user exists in localStorage
    const userData = localStorage.getItem('userData');
    if (userData) {
      navigate('/home');
    } else {
      setErrors({ general: 'Account not found. Please register first.' });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
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
          <h2 className="text-lg font-bold text-fresh-green/80">Welcome Back</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Error Message */}
          {errors.general && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-3 py-2 rounded-lg text-sm font-medium">
              {errors.general}
            </div>
          )}

          {/* Phone Input */}
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-fresh-green/40" size={18} />
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="WhatsApp Number" 
              className={`w-full pl-10 pr-4 py-3 rounded-lg bg-white border-2 outline-none transition-all placeholder:text-fresh-green/30 font-medium text-sm ${
                errors.phone ? 'border-red-300 focus:border-red-400' : 'border-fresh-green/10 focus:border-leaf/40'
              }`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          {/* Password Input */}
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-fresh-green/40" size={18} />
            <input 
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password" 
              className={`w-full pl-10 pr-12 py-3 rounded-lg bg-white border-2 outline-none transition-all placeholder:text-fresh-green/30 font-medium text-sm ${
                errors.password ? 'border-red-300 focus:border-red-400' : 'border-fresh-green/10 focus:border-leaf/40'
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-fresh-green/40 hover:text-fresh-green"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <button type="button" className="text-xs font-bold text-fresh-green/60 hover:text-leaf transition-colors">
              Forgot Password?
            </button>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-fresh-green to-leaf text-white py-3 rounded-lg font-bold text-sm shadow-lg hover:shadow-xl transition-all mt-6"
          >
            Login
          </motion.button>

          {/* Register Link */}
          <p className="text-center text-xs text-fresh-green/60 font-medium mt-4">
            Don't have an account?{' '}
            <button
              type="button"
              onClick={() => navigate('/register')}
              className="text-leaf font-bold hover:underline"
            >
              Sign Up
            </button>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;