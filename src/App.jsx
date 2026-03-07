import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import SplashScreen from './pages/SplashScreen';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import PaymentWaiting from './pages/PaymentWaiting';
import CategoryPage from './pages/CategoryPage';
import OrderSuccess from './pages/OrderSuccess';
import ProductDetails from './pages/ProductDetails';
import Search from './pages/Search';
import Orders from './pages/Orders';
import Account from './pages/Account';
import Offers from './pages/Offers';
import Wishlist from './pages/Wishlist';
import Addresses from './pages/Addresses';
import Wallet from './pages/Wallet';
import Settings from './pages/Settings';

function App() {
  return (
    <CartProvider>
      <Router>
        {/* Laptop view ko mobile frame dene ke liye centered container */}
        <div className="flex justify-center bg-sand min-h-screen">
          <div className="w-full max-w-[450px] bg-white shadow-2xl min-h-screen relative overflow-x-hidden">
            <Routes>
              <Route path="/" element={<SplashScreen />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/payment-waiting" element={<PaymentWaiting />} />
              <Route path="/category/:categoryName" element={<CategoryPage />} />
              <Route path="/product/:productId" element={<ProductDetails />} />
              <Route path="/order-success" element={<OrderSuccess />} />
              <Route path="/search" element={<Search />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/account" element={<Account />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/addresses" element={<Addresses />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/settings" element={<Settings />} />
              
              {/* Agar koi galat path dale to home pe bhej do */}
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
