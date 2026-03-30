import { Menu, Bell } from 'lucide-react';

const AdminHeader = ({ onMenuClick, title }) => {
  return (
    <header className="h-14 bg-white border-b border-gray-100 flex items-center justify-between px-4 sticky top-0 z-30 flex-shrink-0">
      {/* Left */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
        >
          <Menu size={20} className="text-gray-600" />
        </button>
        <h2 className="text-base font-black text-gray-800">{title}</h2>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        <button className="p-2 rounded-xl hover:bg-gray-100 transition-colors relative">
          <Bell size={20} className="text-gray-500" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#f52d05] rounded-full" />
        </button>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7f1d1d] to-[#f52d05] flex items-center justify-center">
          <span className="text-white text-xs font-black">A</span>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
