const ProductCard = ({ product }) => (
  <div className="bg-white border border-sand p-3 rounded-2xl shadow-sm">
    <img src={product.img} className="w-full h-32 object-cover rounded-xl mb-3" alt={product.name} />
    <h4 className="font-bold text-sm">{product.name}</h4>
    <p className="text-[10px] text-terracotta uppercase font-bold">{product.unit}</p>
    <div className="flex justify-between items-center mt-2">
      <span className="font-bold text-sage">₹{product.price}</span>
      <button className="bg-sage text-white px-3 py-1 rounded-lg text-xs font-bold">ADD</button>
    </div>
  </div>
);
export default ProductCard;