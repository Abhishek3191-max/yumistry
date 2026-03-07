import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Bell, Moon, Globe, HelpCircle, Shield, Info, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import BottomNav from '../components/BottomNav';

const Settings = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const settingsSections = [
    {
      title: 'Preferences',
      items: [
        { icon: Bell, label: 'Notifications', hasToggle: true, value: notifications, onChange: setNotifications },
        { icon: Moon, label: 'Dark Mode', hasToggle: true, value: darkMode, onChange: setDarkMode },
        { icon: Globe, label: 'Language', value: 'English', hasArrow: true }
      ]
    },
    {
      title: 'Support',
      items: [
        { icon: HelpCircle, label: 'Help & Support', hasArrow: true },
        { icon: Shield, label: 'Privacy Policy', hasArrow: true },
        { icon: Info, label: 'About Us', hasArrow: true }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfccb] pb-20">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-xl border-b border-fresh-green/10 sticky top-0 z-10">
        <div className="p-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-fresh-green/10 rounded-lg">
            <ArrowLeft size={22} className="text-fresh-green" />
          </button>
          <h1 className="text-xl font-black text-fresh-green">Settings</h1>
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
            <div className="bg-white rounded-2xl shadow-sm border border-fresh-green/10 overflow-hidden">
              {section.items.map((item, index) => (
                <button
                  key={index}
                  onClick={() => !item.hasToggle && alert(`${item.label} clicked`)}
                  className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-b border-fresh-green/10 last:border-b-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-leaf/10 rounded-lg">
                      <item.icon size={20} className="text-leaf" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-fresh-green">{item.label}</p>
                      {item.value && !item.hasToggle && (
                        <p className="text-xs text-fresh-green/60">{item.value}</p>
                      )}
                    </div>
                  </div>

                  {item.hasToggle ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        item.onChange(!item.value);
                      }}
                      className={`relative w-12 h-6 rounded-full transition-colors ${
                        item.value ? 'bg-leaf' : 'bg-gray-300'
                      }`}
                    >
                      <div
                        className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                          item.value ? 'translate-x-7' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  ) : item.hasArrow ? (
                    <ChevronRight size={20} className="text-fresh-green/40" />
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
    </div>
  );
};

export default Settings;
