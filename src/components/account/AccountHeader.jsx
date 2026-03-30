import { User } from 'lucide-react';
import { useDarkMode } from '../../context/DarkModeContext';

const AccountHeader = ({ userData }) => {
  const { darkMode } = useDarkMode();
  return (
    <div className={`p-6 pb-10 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-[#7f1d1d] to-[#f52d05]'}`}>
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
          <User size={40} className="text-[#f52d05]" />
        </div>
        <div className="flex-1 text-white">
          <h1 className="text-2xl font-black">{userData.name || 'Guest User'}</h1>
          <p className="text-sm opacity-80">{userData.phone || 'Not logged in'}</p>
        </div>
      </div>
    </div>
  );
};

export default AccountHeader;
