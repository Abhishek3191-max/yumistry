import { Search, Mic, MicOff } from 'lucide-react';
import { useDarkMode } from '../context/DarkModeContext';

const SearchBar = ({ searchQuery, setSearchQuery, isListening, startVoiceSearch, stopVoiceSearch }) => {
  const { darkMode } = useDarkMode();

  return (
    <div className="relative ">
      <Search className={`absolute left-4 top-1/2 -translate-y-1/2 ${
        darkMode ? 'text-gray-400' : 'text-[#7f1d1d]/40'
      }`} size={20} />
      <input 
        type="text" 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for vegetables, fruits, dairy..." 
        className={`w-full pl-12 pr-16 py-3.5 rounded-xl outline-none transition-all font-medium text-sm ${
          darkMode 
            ? 'bg-gray-800 border border-gray-700 text-white placeholder:text-gray-400 focus:border-green-500'
            : 'bg-gray-100 text-black placeholder:text-gray-400 focus:bg-white'
        }`}
      />
      <button
        onClick={isListening ? stopVoiceSearch : startVoiceSearch}
        className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all ${
          isListening 
            ? 'bg-red-500 text-white animate-pulse' 
            : (darkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-[#7f1d1d]/10 text-[#7f1d1d]/60')
        }`}
      >
        {isListening ? <MicOff size={18} /> : <Mic size={18} />}
      </button>
    </div>
  );
};

export default SearchBar;
