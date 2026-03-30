import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';
import AccountHeader from '../components/account/AccountHeader';
import ProfileCard from '../components/account/ProfileCard';
import AccountMenu from '../components/account/AccountMenu';
import AccountBadge from '../components/account/AccountBadge';
import LogoutButton from '../components/account/LogoutButton';
import BottomNav from '../components/BottomNav';

const Account = () => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData') || '{}'));

  const handleLogout = () => {
    localStorage.removeItem('userData');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('cart');
    navigate('/login');
  };

  return (
    <div className={`min-h-screen pb-20 transition-colors ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <AccountHeader userData={userData} />
      <div className="px-4 -mt-4">
        <ProfileCard userData={userData} onUpdate={setUserData} />
        <AccountMenu />
        <AccountBadge />
        <LogoutButton onLogout={handleLogout} />
      </div>
      <BottomNav />
    </div>
  );
};

export default Account;
