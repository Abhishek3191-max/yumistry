import { motion } from 'framer-motion';
import { LogOut } from 'lucide-react';

const LogoutButton = ({ onLogout }) => (
  <motion.button
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    whileTap={{ scale: 0.97 }}
    onClick={onLogout}
    className="w-full bg-white border border-red-400 text-red-500 py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:bg-red-50 transition-all mb-4"
  >
    <LogOut size={18} />
    Logout
  </motion.button>
);

export default LogoutButton;
