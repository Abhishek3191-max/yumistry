import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Phone, Leaf, Lock, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    const newErrors = {};

    // Validation
    if (!formData.name || formData.name.length < 3) {
      newErrors.name = 'Name must be at least 3 characters';
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone) {
      newErrors.phone = 'Phone number required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Enter valid 10-digit number';
    }

    if (!formData.password) {
      newErrors.password = 'Password required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Min 6 characters';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      localStorage.setItem('userData', JSON.stringify(formData));
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/home');
    }, 800);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff5f7] via-white to-[#ffe5ec] flex items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      
      {/* Background Blobs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-10 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-[#f99e61]/20 to-[#f52d05]/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-10 left-10 w-56 h-56 sm:w-80 sm:h-80 bg-gradient-to-tl from-[#ff6b9d]/30 to-[#f99e61]/10 rounded-full blur-3xl"
      />

      {/* Form Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/50 relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Leaf className="text-[#f52d05]" size={28} strokeWidth={2.5} fill="#f99e61" />
            <h1 className="text-3xl font-black tracking-tight text-[#f99e61]">Yumistry</h1>
          </div>
          <p className="text-sm text-[#f99e61]/60 font-medium">Create your account</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-semibold text-[#f99e61]/70 mb-2">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#f99e61]/40" size={20} />
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                disabled={isLoading}
                className={`w-full pl-12 pr-4 py-3.5 rounded-xl bg-white border-2 outline-none transition-all placeholder:text-[#f99e61]/30 font-medium text-sm disabled:opacity-50 ${
                  errors.name ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-[#f52d05]'
                }`}
              />
            </div>
            {errors.name && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.name}</p>}
          </div>

          {/* Phone Input */}
          <div>
            <label className="block text-sm font-semibold text-[#f99e61]/70 mb-2">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#f99e61]/40" size={20} />
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter 10-digit number"
                maxLength="10"
                disabled={isLoading}
                className={`w-full pl-12 pr-4 py-3.5 rounded-xl bg-white border-2 outline-none transition-all placeholder:text-[#f99e61]/30 font-medium text-sm disabled:opacity-50 ${
                  errors.phone ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-[#f52d05]'
                }`}
              />
            </div>
            {errors.phone && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.phone}</p>}
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-semibold text-[#f99e61]/70 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#f99e61]/40" size={20} />
              <input 
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create password"
                disabled={isLoading}
                className={`w-full pl-12 pr-12 py-3.5 rounded-xl bg-white border-2 outline-none transition-all placeholder:text-[#f99e61]/30 font-medium text-sm disabled:opacity-50 ${
                  errors.password ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-[#f52d05]'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isLoading}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#f99e61]/40 hover:text-[#f99e61] disabled:opacity-50"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.password}</p>}
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isLoading}
            whileTap={{ scale: isLoading ? 1 : 0.97 }}
            className="w-full bg-gradient-to-r from-[#f99e61] to-[#f52d05] text-white py-4 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
                Creating Account...
              </>
            ) : (
              'Create Account'
            )}
          </motion.button>

          {/* Login Link */}
          <p className="text-center text-sm text-[#f99e61]/60 font-medium mt-6">
            Already have an account?{' '}
            <button
              type="button"
              onClick={() => navigate('/login')}
              className="text-[#f52d05] font-bold hover:underline"
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
