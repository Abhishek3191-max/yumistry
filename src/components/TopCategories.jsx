import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';

const topCategoryData = [
  {
    id: 1,
    section: "Grocery & Kitchen",
    // row1: index 0 (big), 1, 2 | row2: index 3,4,5,6
    items: [
      { id: 101, name: "Vegetables & Fruits", image: "https://cdn.grofers.com/app/images/collections/asset_Vegetables_&_Fruits_312x360_1765863495231", bg: "#e8f4f0" },
      { id: 102, name: "Atta, Rice & Dal", image: "https://cdn.grofers.com/app/images/collections/asset_atta,_rice_&_dal_1697023078302", bg: "#fdf3e3" },
      { id: 103, name: "Oil, Ghee & Masala", image: "https://cdn.grofers.com/app/images/collections/asset_Oil,_ghee_&_masala_1697023177309", bg: "#fef9e7" },
      { id: 104, name: "Dairy, Bread & Eggs", image: "https://cdn.grofers.com/app/images/collections/asset_Dairy,_bread_&_eggs_1697439479199", bg: "#eaf4fb" },
      { id: 105, name: "Bakery & Biscuits", image: "https://cdn.grofers.com/app/images/collections/asset_Biscuits_&_bakery_1697023878012", bg: "#f5eef8" },
      { id: 106, name: "Dry Fruits & Cereals", image: "https://cdn.grofers.com/app/images/collections/asset_Dry_Fruits_&_Cereals_(1)_1727547591238", bg: "#fdf3e3" },
      { id: 107, name: "Kitchenware", image: "https://cdn.grofers.com/app/images/collections/asset_Kitchen_Utensils_&_1697802997422", bg: "#eaf4fb" },
    ]
  },
  {
    id: 2,
    section: "Snacks & Drinks",
    items: [
      { id: 201, name: "Chips & Namkeen", image: "https://cdn.grofers.com/app/images/collections/asset_Chips_&_namkeen_1697025537433", bg: "#fef9e7" },
      { id: 202, name: "Sweets & Chocolates", image: "https://cdn.grofers.com/app/images/collections/asset_Sweets_&_chocolates_1697025717829", bg: "#fce4ec" },
      { id: 203, name: "Drinks & Juices", image: "https://cdn.grofers.com/app/images/collections/asset_V7_312x360_(2)_1774455548692", bg: "#eaf4fb" },
      { id: 204, name: "Tea, Coffee & Milk", image: "https://cdn.grofers.com/app/images/collections/asset_L0_v1_0_1746557294148", bg: "#f5eef8" },
      { id: 205, name: "Instant Food", image: "https://cdn.grofers.com/app/images/collections/asset_Instant_Food_(2)_1766127254031", bg: "#fdf3e3" },
      { id: 206, name: "Sauces & Spreads", image: "https://cdn.grofers.com/app/images/collections/asset_sauces_&_spreads_1697025783179", bg: "#e8f4f0" },
      { id: 207, name: "Paan Corner", image: "https://cdn.grofers.com/app/images/collections/asset_312x360_(1)_1750440200815", bg: "#e8f5e9" },
      { id: 208, name: "Ice Creams & More", image: "https://cdn.grofers.com/app/images/collections/asset_V7_312x360_(1)_1763118369111", bg: "#fce4ec" },
    ]
  },
];

const SmallCard = ({ item, index }) => {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.04 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate(`/subcategory/${encodeURIComponent(item.name)}`)}
      className="flex flex-col items-center cursor-pointer"
    >
      <div className="w-full aspect-square rounded-2xl overflow-hidden mb-1.5" style={{ backgroundColor: item.bg }}>
        <img src={item.image} alt={item.name} className="w-full h-full object-cover"
          onError={(e) => { e.target.src = `https://placehold.co/200x200/f0f0f0/999?text=${item.name.split(' ')[0]}`; }} />
      </div>
      <span className={`text-[11px] font-semibold text-center leading-tight ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        {item.name}
      </span>
    </motion.div>
  );
};

const GrocerySection = ({ section, darkMode }) => {
  const navigate = useNavigate();
  const row1Big = section.items[0];
  const row1Small = section.items.slice(1, 3);   // 2 small cards
  const row2 = section.items.slice(3, 7);         // 4 small cards

  return (
    <div className="mb-6">
      <h2 className={`text-[17px] font-black mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        {section.section}
      </h2>

      {/* Row 1: 1 big (2 col) + 2 small */}
      <div className="grid grid-cols-4 gap-2.5 mb-2.5 items-start">
        {/* Big card — spans 2 cols */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(`/subcategory/${encodeURIComponent(row1Big.name)}`)}
          className="col-span-2 flex flex-col items-center cursor-pointer"
        >
          <div className="w-full rounded-2xl overflow-hidden mb-1.5 " style={{ backgroundColor: row1Big.bg, aspectRatio: '2/1' }}>
            <img src={row1Big.image} alt={row1Big.name} className="w-full h-full object-contain"
              onError={(e) => { e.target.src = `https://placehold.co/300x300/e8f4f0/999?text=Vegetables`; }} />
          </div>
          <span className={`text-[12px] font-semibold text-center leading-tight ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {row1Big.name}
          </span>
        </motion.div>

        {/* 2 small cards in col 3 & 4 */}
        <div className="col-span-2 grid grid-cols-2 gap-2.5 items-start">
          {row1Small.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.04 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(`/subcategory/${encodeURIComponent(item.name)}`)}
              className="flex flex-col items-center cursor-pointer"
            >
              <div className="w-full rounded-xl overflow-hidden mb-1 " style={{ backgroundColor: item.bg, aspectRatio: '1/1' }}>
                <img src={item.image} alt={item.name} className="w-full h-full object-contain"
                  onError={(e) => { e.target.src = `https://placehold.co/200x200/f0f0f0/999?text=${item.name.split(' ')[0]}`; }} />
              </div>
              <span className={`text-[10px] font-semibold text-center leading-tight ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Row 2: 4 equal cards */}
      <div className="grid grid-cols-4 gap-2.5">
        {row2.map((item, i) => (
          <SmallCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </div>
  );
};

const TopCategories = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className="mt-2 mb-4">
      {topCategoryData.map((section) => {
        if (section.id === 1) {
          return <GrocerySection key={section.id} section={section} darkMode={darkMode} />;
        }
        // Other sections — simple 4 col grid
        return (
          <div key={section.id} className="mb-6">
            <h2 className={`text-[17px] font-black mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {section.section}
            </h2>
            <div className="grid grid-cols-4 gap-2.5">
              {section.items.map((item, i) => (
                <SmallCard key={item.id} item={item} index={i} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TopCategories;
