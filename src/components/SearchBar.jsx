import { Search, Mic, MicOff } from 'lucide-react';
import { useDarkMode } from '../context/DarkModeContext';

const SearchBar = ({ searchQuery, setSearchQuery, isListening, startVoiceSearch, stopVoiceSearch }) => {
  const { darkMode } = useDarkMode();

  return (
    <div className="relative mb-5">
      <Search className={`absolute left-4 top-1/2 -translate-y-1/2 ${
        darkMode ? 'text-gray-400' : 'text-[#f99e61]/40'
      }`} size={20} />
      <input 
        type="text" 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for vegetables, fruits, dairy..." 
        className={`w-full pl-12 pr-16 py-3.5 rounded-xl border-2 outline-none transition-all font-medium text-sm shadow-sm ${
          darkMode 
            ? 'bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-green-500'
            : 'bg-white border-[#f99e61]/10 text-black placeholder:text-[#f99e61]/30 focus:border-[#f52d05]'
        }`}
      />
      <button
        onClick={isListening ? stopVoiceSearch : startVoiceSearch}
        className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all ${
          isListening 
            ? 'bg-red-500 text-white animate-pulse' 
            : (darkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-[#f99e61]/10 text-[#f99e61]/60')
        }`}
      >
        {isListening ? <MicOff size={18} /> : <Mic size={18} />}
      </button>
    </div>
  );
};

export default SearchBar;
