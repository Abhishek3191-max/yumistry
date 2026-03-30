import { useState, useEffect } from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import HomeHeader from '../components/HomeHeader';
import WholesaleTopBanner from '../components/wholesale/WholesaleTopBanner';
import WholesaleCategoryCards from '../components/wholesale/WholesaleCategoryCards';
import WholesaleHero from '../components/wholesale/WholesaleHero';
import WholesaleContact from '../components/wholesale/WholesaleContact';
import WholesaleGuide from '../components/wholesale/WholesaleGuide';
import BottomNav from '../components/BottomNav';
import LocationModal from '../components/LocationModal';

const Wholesale = () => {
  const { darkMode } = useDarkMode();
  const [selectedLocation, setSelectedLocation] = useState('Home - New Delhi');
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [customAddress, setCustomAddress] = useState('');
  const [isDetecting, setIsDetecting] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('userLocation');
    if (saved) setSelectedLocation(saved);
  }, []);

  const detectLocation = () => {
    setIsDetecting(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => { setSelectedLocation('Home - New Delhi'); localStorage.setItem('userLocation', 'Home - New Delhi'); setIsDetecting(false); },
        () => { setSelectedLocation('Home - New Delhi'); setIsDetecting(false); }
      );
    } else {
      setSelectedLocation('Home - New Delhi');
      setIsDetecting(false);
    }
  };

  return (
    <div className={`min-h-screen pb-24 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>

      {/* Fixed Header */}
      <div className={`fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-112.5 z-50 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}>
        <HomeHeader
          selectedLocation={selectedLocation}
          onLocationClick={() => setShowLocationModal(true)}
        />
      </div>

      {/* Content — pt to offset fixed header */}
      <div className="px-4 pt-24">
        <WholesaleTopBanner />
        <WholesaleCategoryCards />
        <WholesaleGuide />
        <WholesaleHero />
        <WholesaleContact />
      </div>

      <BottomNav />
      <LocationModal
        showLocationModal={showLocationModal}
        setShowLocationModal={setShowLocationModal}
        detectLocation={detectLocation}
        isDetecting={isDetecting}
        customAddress={customAddress}
        setCustomAddress={setCustomAddress}
        setSelectedLocation={setSelectedLocation}
        selectedLocation={selectedLocation}
      />
    </div>
  );
};

export default Wholesale;
