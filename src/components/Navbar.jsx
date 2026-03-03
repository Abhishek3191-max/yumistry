// Navbar.jsx
import { ShoppingCart, Menu } from 'lucide-react';
const Navbar = () => (
  <nav className="p-4 flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur-md z-50">
    <h1 className="text-xl font-black italic text-sage">Yumistry</h1>
    <div className="flex gap-4"><ShoppingCart size={22} /><Menu size={22} /></div>
  </nav>
);
export default Navbar;