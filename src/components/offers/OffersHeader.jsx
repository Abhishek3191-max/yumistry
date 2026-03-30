import { useDarkMode } from '../../context/DarkModeContext';

const OffersHeader = ({ count }) => {
  const { darkMode } = useDarkMode();
  return (
    <div className="mb-5 mt-2">
      <h2 className={`text-2xl font-black mb-0.5 ${darkMode ? 'text-white' : 'text-[#7f1d1d]'}`}>
        Offers & Deals
      </h2>
      <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-[#7f1d1d]/60'}`}>
        {count} offers available
      </p>
    </div>
  );
};

export default OffersHeader;
