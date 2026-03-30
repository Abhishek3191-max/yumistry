import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext';
import { products, categories } from '../data/products';
import HomeHeader from '../components/HomeHeader';
import SearchBar from '../components/SearchBar';
import OfferBanner from '../components/OfferBanner';
import Categories from '../components/Categories';
import ProductGrid from '../components/ProductGrid';
import CartStrip from '../components/CartStrip';
import BottomNav from '../components/BottomNav';
import CategorySection from '../components/CategorySection';
import TopCategories from '../components/TopCategories';
import WhatsAppCTA from '../components/WhatsAppCTA';
import Banner from '../components/Banner';
import LocationModal from '../components/LocationModal';

const Home = () => {
  const { darkMode } = useDarkMode();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Detecting location...');
  const [customAddress, setCustomAddress] = useState('');
  const [isDetecting, setIsDetecting] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = false;
      recognitionInstance.lang = 'en-IN';
      recognitionInstance.onresult = (event) => {
        const transcript = event.results[0][0].transcript.replace(/[.!?]/g, '').trim();
        setSearchQuery(transcript);
        setIsListening(false);
      };
      recognitionInstance.onerror = () => setIsListening(false);
      recognitionInstance.onend = () => setIsListening(false);
      setRecognition(recognitionInstance);
    }
  }, []);

  const startVoiceSearch = () => {
    if (recognition) {
      setIsListening(true);
      recognition.start();
    }
  };

  const stopVoiceSearch = () => {
    if (recognition) {
      recognition.stop();
      setIsListening(false);
    }
  };

  useEffect(() => {
    const savedLocation = localStorage.getItem('userLocation');
    if (savedLocation) {
      setSelectedLocation(savedLocation);
    } else {
      detectLocation();
    }
  }, []);

  const detectLocation = () => {
    setIsDetecting(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = 'Home - New Delhi';
          setSelectedLocation(location);
          localStorage.setItem('userLocation', location);
          setIsDetecting(false);
        },
        (error) => {
          setSelectedLocation('Home - New Delhi');
          setIsDetecting(false);
        }
      );
    } else {
      setSelectedLocation('Home - New Delhi');
      setIsDetecting(false);
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={`min-h-screen pb-20 relative overflow-hidden transition-colors ${
      darkMode ? 'bg-gray-900' : ''
    }`}>
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-[#7f1d1d]/20 to-[#f52d05]/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-linear-to-tl from-[#ff6b9d]/20 to-[#7f1d1d]/10 rounded-full blur-3xl"
      />

      {/* Fixed Header + SearchBar */}
      <div className={`fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-112.5 z-50 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}>
        <HomeHeader selectedLocation={selectedLocation} onLocationClick={() => setShowLocationModal(true)} />
        <div className="px-4 mb-2 ">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            isListening={isListening}
            startVoiceSearch={startVoiceSearch}
            stopVoiceSearch={stopVoiceSearch}
          />
        </div>
      </div>

      {/* Scrollable Content — top padding to offset fixed header */}
      <div className="relative z-10 px-4 pt-42 pb-4">
        <Banner />
        <TopCategories />
        <CategorySection />
        <ProductGrid filteredProducts={filteredProducts} selectedCategory={selectedCategory} />
        <WhatsAppCTA />
      </div>

      <CartStrip />
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

export default Home;
