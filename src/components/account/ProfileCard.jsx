import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, Mail, Edit3 } from 'lucide-react';
import { useDarkMode } from '../../context/DarkModeContext';

const ProfileCard = ({ userData, onUpdate }) => {
  const { darkMode } = useDarkMode();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({});

  const handleEdit = () => { setEditData(userData); setIsEditing(true); };
  const handleSave = () => {
    localStorage.setItem('userData', JSON.stringify(editData));
    onUpdate(editData);
    setIsEditing(false);
  };

  const fields = [
    { icon: User, key: 'name', label: 'Name', type: 'text' },
    { icon: Phone, key: 'phone', label: 'Phone', type: 'tel' },
    { icon: Mail, key: 'email', label: 'Email', type: 'email' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-2xl p-4 shadow-sm border mb-4 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className={`font-black ${darkMode ? 'text-white' : 'text-gray-900'}`}>Profile Details</h3>
        <button
          onClick={isEditing ? handleSave : handleEdit}
          className={`px-3 py-1 rounded-lg text-sm font-bold flex items-center gap-1 ${
            isEditing ? 'bg-[#f52d05] text-white' : 'bg-[#f52d05]/10 text-[#f52d05]'
          }`}
        >
          <Edit3 size={14} />
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>

      <div className="space-y-2">
        {fields.map(({ icon: Icon, key, label, type }) => (
          <div key={key} className={`flex items-center gap-3 p-3 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <Icon size={18} className="text-[#f52d05]/60" />
            <div className="flex-1">
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-400'}`}>{label}</p>
              {isEditing ? (
                <input
                  type={type}
                  value={editData[key] || ''}
                  onChange={(e) => setEditData({ ...editData, [key]: e.target.value })}
                  className={`font-bold text-sm bg-transparent border-b focus:outline-none w-full ${
                    darkMode ? 'text-white border-gray-500 focus:border-[#f52d05]' : 'text-gray-900 border-gray-300 focus:border-[#f52d05]'
                  }`}
                />
              ) : (
                <p className={`font-bold text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {userData[key] || 'Not provided'}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProfileCard;
