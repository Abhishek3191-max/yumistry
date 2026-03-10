import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Bell, Moon, Globe, HelpCircle, Shield, Info, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext';
import BottomNav from '../components/BottomNav';

const Settings = () => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [notifications, setNotifications] = useState(() => {
    return localStorage.getItem('notifications') !== 'false';
  });
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'English';
  });
  const [showLanguageModal, setShowLanguageModal] = useState(false);

  const languages = ['English', 'हिंदी', 'বাংলা', 'தமிழ்', 'తెలుగు', 'ગુજરાતી'];

  const handleNotificationToggle = () => {
    const newValue = !notifications;
    setNotifications(newValue);
    localStorage.setItem('notifications', newValue.toString());
    
    if (newValue) {
      if ('Notification' in window) {
        Notification.requestPermission();
      }
    }
  };

  const handleDarkModeToggle = () => {
    toggleDarkMode();
  };

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    localStorage.setItem('language', selectedLanguage);
    setShowLanguageModal(false);
  };

  const settingsSections = [
    {
      title: 'Preferences',
      items: [
        { icon: Bell, label: 'Notifications', hasToggle: true, value: notifications, onChange: handleNotificationToggle },
        { icon: Moon, label: 'Dark Mode', hasToggle: true, value: darkMode, onChange: handleDarkModeToggle },
        { icon: Globe, label: 'Language', value: language, hasArrow: true, onClick: () => setShowLanguageModal(true) }
      ]
    },
    {
      title: 'Support',
      items: [
        { icon: HelpCircle, label: 'Help & Support', hasArrow: true, onClick: () => alert('Help & Support') },
        { icon: Shield, label: 'Privacy Policy', hasArrow: true, onClick: () => alert('Privacy Policy') },
        { icon: Info, label: 'About Us', hasArrow: true, onClick: () => alert('About Yumistry v1.0.0') }
      ]
    }
  ];

  return (
    <div className={`min-h-screen pb-20 transition-colors ${
      darkMode 
        ? 'bg-gray-900' 
        : 'bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfccb]'
    }`}>
      {/* Header */}
      <div className={`backdrop-blur-xl border-b sticky top-0 z-10 transition-colors ${
        darkMode 
          ? 'bg-gray-800/90 border-gray-700' 
          : 'bg-white/90 border-fresh-green/10'
      }`}>
        <div className="p-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className={`p-2 rounded-lg transition-colors ${
            darkMode ? 'hover:bg-gray-700' : 'hover:bg-fresh-green/10'
          }`}>
            <ArrowLeft size={22} className={darkMode ? 'text-white' : 'text-fresh-green'} />
          </button>
          <h1 className={`text-xl font-black ${
            darkMode ? 'text-white' : 'text-fresh-green'
          }`}>Settings</h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {settingsSections.map((section, sectionIndex) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: sectionIndex * 0.1 }}
          >
            <h3 className="text-sm font-black text-fresh-green/60 mb-3 px-2">{section.title}</h3>
            <div className={`rounded-2xl shadow-sm border overflow-hidden ${
              darkMode 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-white border-fresh-green/10'
            }`}>
              {section.items.map((item, index) => (
                <button
                  key={index}
                  onClick={() => item.onClick ? item.onClick() : null}
                  className={`w-full flex items-center justify-between p-4 transition-colors border-b last:border-b-0 ${
                    darkMode 
                      ? 'hover:bg-gray-700 border-gray-700' 
                      : 'hover:bg-gray-50 border-fresh-green/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      darkMode ? 'bg-gray-700' : 'bg-leaf/10'
                    }`}>
                      <item.icon size={20} className={darkMode ? 'text-green-400' : 'text-leaf'} />
                    </div>
                    <div className="text-left">
                      <p className={`font-bold ${
                        darkMode ? 'text-white' : 'text-fresh-green'
                      }`}>{item.label}</p>
                      {item.value && !item.hasToggle && (
                        <p className={`text-xs ${
                          darkMode ? 'text-gray-400' : 'text-fresh-green/60'
                        }`}>{item.value}</p>
                      )}
                    </div>
                  </div>

                  {item.hasToggle ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        item.onChange();
                      }}
                      className={`relative w-12 h-6 rounded-full transition-colors ${
                        item.value ? 'bg-leaf' : (darkMode ? 'bg-gray-600' : 'bg-gray-300')
                      }`}
                    >
                      <div
                        className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                          item.value ? 'translate-x-7' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  ) : item.hasArrow ? (
                    <ChevronRight size={20} className={darkMode ? 'text-gray-400' : 'text-fresh-green/40'} />
                  ) : null}
                </button>
              ))}
            </div>
          </motion.div>
        ))}

        {/* App Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-leaf/10 rounded-2xl p-4 border border-leaf/20 text-center"
        >
          <p className="font-black text-fresh-green mb-1">Yumistry</p>
          <p className="text-xs text-fresh-green/60">Version 1.0.0</p>
          <p className="text-xs text-fresh-green/60 mt-2">Chemistry of Freshness</p>
        </motion.div>

        {/* Logout Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          onClick={() => {
            localStorage.clear();
            navigate('/login');
          }}
          className="w-full py-4 bg-white border-2 border-red-500 text-red-500 rounded-xl font-bold hover:bg-red-50 transition-all"
        >
          Logout
        </motion.button>
      </div>

      <BottomNav />
      
      {/* Language Modal */}
      {showLanguageModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            className={`w-full rounded-t-3xl p-6 max-h-[60vh] overflow-y-auto ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-xl font-black ${
                darkMode ? 'text-white' : 'text-fresh-green'
              }`}>Select Language</h3>
              <button
                onClick={() => setShowLanguageModal(false)}
                className={`p-2 rounded-lg ${
                  darkMode ? 'hover:bg-gray-700 text-white' : 'hover:bg-gray-100 text-gray-600'
                }`}
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-2">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLanguageChange(lang)}
                  className={`w-full text-left p-4 rounded-xl transition-all ${
                    language === lang
                      ? (darkMode ? 'bg-green-900 border-green-600' : 'bg-leaf/10 border-leaf')
                      : (darkMode ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' : 'bg-gray-50 border-gray-200 hover:bg-gray-100')
                  } border-2`}
                >
                  <span className={`font-bold ${
                    language === lang
                      ? (darkMode ? 'text-green-400' : 'text-leaf')
                      : (darkMode ? 'text-white' : 'text-fresh-green')
                  }`}>{lang}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Settings;
