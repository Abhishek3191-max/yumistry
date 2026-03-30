import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Lock, Leaf, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Phone, 2: OTP, 3: New Password
  const [formData, setFormData] = useState({
    phone: '',
    otp: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone) {
      setErrors({ phone: 'Phone number required' });
      return;
    } else if (!phoneRegex.test(formData.phone)) {
      setErrors({ phone: 'Enter valid 10-digit number' });
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
    }, 800);
  };

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    
    if (!formData.otp || formData.otp.length !== 6) {
      setErrors({ otp: 'Enter valid 6-digit OTP' });
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(3);
    }, 800);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    const newErrors = {};

    if (!formData.newPassword) {
      newErrors.newPassword = 'Password required';
    } else if (formData.newPassword.length < 6) {
      newErrors.newPassword = 'Min 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm password';
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      alert('Password reset successful!');
      navigate('/login');
    }, 800);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff5f7] via-white to-[#ffe4e6] flex items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      
      {/* Background Blobs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-10 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-primary/20 to-[#f52d05]/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-10 left-10 w-56 h-56 sm:w-80 sm:h-80 bg-gradient-to-tl from-[#ffd6d6]/30 to-[#f52d05]/10 rounded-full blur-3xl"
      />

      {/* Form Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/50 relative z-10"
      >
        {/* Back Button */}
        <button
          onClick={() => step === 1 ? navigate('/login') : setStep(step - 1)}
          className="absolute top-6 left-6 p-2 hover:bg-primary/10 rounded-lg transition-colors"
        >
          <ArrowLeft size={20} className="text-primary" />
        </button>

        {/* Header */}
        <div className="text-center mb-8 mt-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Leaf className="text-primary" size={28} strokeWidth={2.5} fill="#f52d05" />
            <h1 className="text-3xl font-black tracking-tight text-primary">Yumistry</h1>
          </div>
          <p className="text-sm text-primary/60 font-medium">
            {step === 1 && 'Reset your password'}
            {step === 2 && 'Verify OTP'}
            {step === 3 && 'Create new password'}
          </p>
        </div>
        
        {/* Step 1: Phone Number */}
        {step === 1 && (
          <form onSubmit={handlePhoneSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-primary/70 mb-2">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={20} />
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter 10-digit number" 
                  maxLength="10"
                  disabled={isLoading}
                  className={`w-full pl-12 pr-4 py-3.5 rounded-xl bg-white border-2 outline-none transition-all placeholder:text-primary/30 font-medium text-sm disabled:opacity-50 ${
                    errors.phone ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-primary'
                  }`}
                />
              </div>
              {errors.phone && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.phone}</p>}
            </div>

            <motion.button
              type="submit"
              disabled={isLoading}
              whileTap={{ scale: isLoading ? 1 : 0.97 }}
              className="w-full bg-gradient-to-r from-primary to-[#f52d05] text-white py-4 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all disabled:opacity-70"
            >
              {isLoading ? 'Sending OTP...' : 'Send OTP'}
            </motion.button>
          </form>
        )}

        {/* Step 2: OTP Verification */}
        {step === 2 && (
          <form onSubmit={handleOTPSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-primary/70 mb-2">Enter OTP</label>
              <input 
                type="text" 
                name="otp"
                value={formData.otp}
                onChange={handleChange}
                placeholder="Enter 6-digit OTP" 
                maxLength="6"
                disabled={isLoading}
                className={`w-full px-4 py-3.5 rounded-xl bg-white border-2 outline-none transition-all placeholder:text-primary/30 font-medium text-sm text-center tracking-widest disabled:opacity-50 ${
                  errors.otp ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-primary'
                }`}
              />
              {errors.otp && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.otp}</p>}
              <p className="text-xs text-primary/60 mt-2 text-center">
                OTP sent to {formData.phone}
              </p>
            </div>

            <motion.button
              type="submit"
              disabled={isLoading}
              whileTap={{ scale: isLoading ? 1 : 0.97 }}
              className="w-full bg-gradient-to-r from-primary to-[#f52d05] text-white py-4 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all disabled:opacity-70"
            >
              {isLoading ? 'Verifying...' : 'Verify OTP'}
            </motion.button>
          </form>
        )}

        {/* Step 3: New Password */}
        {step === 3 && (
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-primary/70 mb-2">New Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={20} />
                <input 
                  type={showPassword ? 'text' : 'password'}
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  placeholder="Enter new password"
                  disabled={isLoading}
                  className={`w-full pl-12 pr-12 py-3.5 rounded-xl bg-white border-2 outline-none transition-all placeholder:text-primary/30 font-medium text-sm disabled:opacity-50 ${
                    errors.newPassword ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-primary'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-primary/40 hover:text-primary"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.newPassword && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.newPassword}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-primary/70 mb-2">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={20} />
                <input 
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm new password"
                  disabled={isLoading}
                  className={`w-full pl-12 pr-12 py-3.5 rounded-xl bg-white border-2 outline-none transition-all placeholder:text-primary/30 font-medium text-sm disabled:opacity-50 ${
                    errors.confirmPassword ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-primary'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-primary/40 hover:text-primary"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.confirmPassword && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.confirmPassword}</p>}
            </div>

            <motion.button
              type="submit"
              disabled={isLoading}
              whileTap={{ scale: isLoading ? 1 : 0.97 }}
              className="w-full bg-gradient-to-r from-primary to-[#f52d05] text-white py-4 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all disabled:opacity-70"
            >
              {isLoading ? 'Resetting...' : 'Reset Password'}
            </motion.button>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
