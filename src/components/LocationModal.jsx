import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const LocationModal = ({ 
  showLocationModal, 
  setShowLocationModal, 
  detectLocation, 
  isDetecting,
  customAddress,
  setCustomAddress,
  setSelectedLocation,
  selectedLocation
}) => {
  if (!showLocationModal) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        className="bg-white w-full rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-black text-[#7f1d1d]">Select Location</h3>
          <button onClick={() => setShowLocationModal(false)} className="p-2 hover:bg-gray-100 rounded-lg">
            ✕
          </button>
        </div>

        <button
          onClick={() => {
            detectLocation();
            setShowLocationModal(false);
          }}
          disabled={isDetecting}
          className="w-full mb-4 p-4 bg-gradient-to-r from-[#7f1d1d] to-[#f52d05] text-white rounded-xl font-bold flex items-center justify-center gap-2 disabled:opacity-50"
        >
          <MapPin size={20} />
          {isDetecting ? 'Detecting...' : 'Use Current Location'}
        </button>

        <div className="mb-4">
          <input
            type="text"
            value={customAddress}
            onChange={(e) => setCustomAddress(e.target.value)}
            placeholder="Enter your address"
            className="w-full p-4 border-2 border-[#7f1d1d]/10 rounded-xl outline-none focus:border-[#f52d05] font-medium"
          />
          <button
            onClick={() => {
              if (customAddress.trim()) {
                setSelectedLocation(customAddress);
                localStorage.setItem('userLocation', customAddress);
                setCustomAddress('');
                setShowLocationModal(false);
              }
            }}
            className="w-full mt-2 p-3 bg-gradient-to-r from-[#7f1d1d] to-[#f52d05] text-white rounded-xl font-bold"
          >
            Save Address
          </button>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-bold text-[#7f1d1d]/60 mb-2">Saved Addresses</p>
          {['Home - New Delhi', 'Office - Gurgaon', 'Other - Noida'].map((loc) => (
            <button
              key={loc}
              onClick={() => {
                setSelectedLocation(loc);
                localStorage.setItem('userLocation', loc);
                setShowLocationModal(false);
              }}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                selectedLocation === loc
                  ? 'border-[#f52d05] bg-[#f52d05]/5'
                  : 'border-[#7f1d1d]/10 hover:border-[#f52d05]/30'
              }`}
            >
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-[#f52d05]" />
                <span className="font-bold text-[#7f1d1d]">{loc}</span>
              </div>
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default LocationModal;
