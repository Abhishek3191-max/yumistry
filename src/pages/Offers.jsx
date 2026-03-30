import { useDarkMode } from '../context/DarkModeContext';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import OffersHeader from '../components/offers/OffersHeader';
import OffersBanner from '../components/offers/OffersBanner';
import LuckySpin from '../components/offers/LuckySpin';
import CouponList from '../components/offers/CouponList';
import OffersInfoCard from '../components/offers/OffersInfoCard';

const Offers = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={`min-h-screen pb-20 transition-colors ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <Header />
      <div className="p-4 pt-20">
        <OffersHeader count={4} />
        {/* <LuckySpin /> */}
        <OffersBanner />
        <CouponList />
        <OffersInfoCard />
      </div>
      <BottomNav />
    </div>
  );
};

export default Offers;
