import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';
import { products } from '../data/products';
import ProductDetailHeader from '../components/product/ProductDetailHeader';
import ProductImageSection from '../components/product/ProductImageSection';
import ProductInfoSection from '../components/product/ProductInfoSection';
import ProductMetaSection from '../components/product/ProductMetaSection';
import BottomNav from '../components/BottomNav';

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const [liked, setLiked] = useState(false);

  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-black text-gray-800 mb-2">Product not found</h2>
          <button onClick={() => navigate('/home')} className="text-[#f52d05] font-bold hover:underline">
            Go back to home
          </button>
        </div>
      </div>
    );
  }

  const discount = product.originalPrice > product.price
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className={`min-h-screen flex flex-col transition-colors ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <ProductDetailHeader product={product} liked={liked} setLiked={setLiked} />
      <div className="flex-1 overflow-y-auto pb-20">
        <ProductImageSection product={product} discount={discount} />
        <div className="px-4 space-y-4">
          <ProductMetaSection product={product} />
        </div>
      </div>
      <ProductInfoSection product={product} />
    </div>
  );
};

export default ProductDetails;
