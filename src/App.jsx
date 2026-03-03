import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SplashScreen from './pages/SplashScreen';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      {/* Laptop view ko mobile frame dene ke liye centered container */}
      <div className="flex justify-center bg-sand min-h-screen">
        <div className="w-full max-w-[450px] bg-white shadow-2xl min-h-screen relative overflow-x-hidden">
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            
            {/* Navigations links ke liye abhi Home par hi redirect kar rahe hain */}
            <Route path="/offers" element={<Home />} />
            <Route path="/orders" element={<Home />} />
            <Route path="/wholesale" element={<Home />} />
            <Route path="/search" element={<Home />} />
            
            {/* Agar koi galat path dale to splash pe bhej do */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
