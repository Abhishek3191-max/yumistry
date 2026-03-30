import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { DarkModeProvider } from './context/DarkModeContext';
import { WishlistProvider } from './context/WishlistContext';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <DarkModeProvider>
      <CartProvider>
        <WishlistProvider>
          <Router>
            <div className="flex justify-center bg-sand min-h-screen">
              <div className="mobile-container w-full max-w-112.5 bg-white shadow-2xl min-h-screen relative overflow-x-hidden">
                <AppRoutes />
              </div>
            </div>
          </Router>
        </WishlistProvider>
      </CartProvider>
    </DarkModeProvider>
  );
}

export default App;
