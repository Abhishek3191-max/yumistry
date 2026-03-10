import { Phone } from 'lucide-react';

const WhatsAppCTA = () => {
  const handleChat = () => {
    const msg = "Please call me we can deliver any thing related to grocery you want.";
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`);
  };

  return (
    <div className="mt-8 p-4 bg-terracotta/10 border-2 border-dashed border-terracotta rounded-2xl text-center">
      <p className="text-sm font-bold text-terracotta italic mb-4">"Call me back for daily rates!"</p>
      <button onClick={handleChat} className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg">
        <Phone size={20} /> CHAT ON WHATSAPP
      </button>
    </div>
  );
};
export default WhatsAppCTA;
