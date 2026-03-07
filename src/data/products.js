import { image } from "framer-motion/client";

export const products = [
  // Vegetables
  {
    id: 1,
    name: "Hybrid Tomato",
    weight: "500 g",
    price: 28,
    originalPrice: 35,
    image: "https://cdn.grofers.com/da/cms-assets/cms/product/27a22d9c-469e-483d-bebf-7a2b1e86a64c.png",
    category: "Vegetables",
    deliveryTime: "8 mins"
  },
  {
    id: 2,
    name: "Potato (Aalu)",
    weight: "1 kg",
    price: 38,
    originalPrice: 45,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/097061a9-9b7e-4d7e-88d1-4e3f58fc51e0.jpg",
    category: "Vegetables",
    deliveryTime: "10 mins"
  },
  {
    id: 3,
    name: "Onion (Pyaz)",
    weight: "1 kg",
    price: 35,
    originalPrice: 42,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/da/cms-assets/cms/product/1ec5d712-5139-43b6-b4c9-b0e2efeeeb2c.png",
    category: "Vegetables",
    deliveryTime: "8 mins"
  },
  {
    id: 4,
    name: "Capsicum (Shimla Mirch)",
    weight: "250 g",
    price: 22,
    originalPrice: 28,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/da/cms-assets/cms/product/0908a205-26bf-4135-969a-9002b302069c.png",
    category: "Vegetables",
    deliveryTime: "8 mins"
  },
  {
    id: 5,
    name: "Carrot (Gajar)",
    weight: "500 g",
    price: 25,
    originalPrice: 30,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/da/cms-assets/cms/product/3de12ff4-882f-40c0-98d8-ff082ecdcf58.png",
    category: "Vegetables",
    deliveryTime: "8 mins"
  },
  {
    id: 6,
    name: "Cauliflower (Phool Gobhi)",
    weight: "1 pc",
    price: 32,
    originalPrice: 40,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/da/cms-assets/cms/product/fb9365d2-03b3-4ca6-8ae9-4ed9f18d9ac4.png",
    category: "Vegetables",
    deliveryTime: "10 mins"
  },

  // Fruits
  {
    id: 7,
    name: "Banana (Kela)",
    weight: "6 units",
    price: 42,
    originalPrice: 50,
    image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/da/cms-assets/cms/product/b89fe4bd-2018-4502-a80e-d8dc274955b8.png",
    category: "Fruits",
    deliveryTime: "7 mins"
  },
  {
    id: 8,
    name: "Apple (Seb)",
    weight: "4 units",
    price: 85,
    originalPrice: 95,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/1f27f2b9-7899-4127-879c-e784b44274bb.png",
    category: "Fruits",
    deliveryTime: "8 mins"
  },
  {
    id: 9,
    name: "Orange (Santra)",
    weight: "1 kg",
    price: 68,
    originalPrice: 80,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/fruits/10000204.jpg",
    category: "Fruits",
    deliveryTime: "8 mins"
  },
  {
    id: 10,
    name: "Mango (Aam)",
    weight: "1 kg",
    price: 120,
    originalPrice: 140,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/fruits/40058534.jpg",
    category: "Fruits",
    deliveryTime: "10 mins"
  },
  {
    id: 11,
    name: "Grapes (Angoor)",
    weight: "500 g",
    price: 55,
    originalPrice: 65,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/fruits/40016977.jpg",
    category: "Fruits",
    deliveryTime: "8 mins"
  },
  {
    id: 12,
    name: "Watermelon (Tarbooz)",
    weight: "1 pc",
    price: 45,
    originalPrice: 55,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/fruits/40016518.jpg",
    category: "Fruits",
    deliveryTime: "12 mins"
  },

  // Dairy & Milk
  {
    id: 13,
    name: "Amul Taaza Milk",
    weight: "500 ml",
    price: 27,
    originalPrice: 27,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg",
    category: "Dairy",
    deliveryTime: "9 mins"
  },
  {
    id: 14,
    name: "Amul Gold Milk",
    weight: "500 ml",
    price: 32,
    originalPrice: 32,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/30506a.jpg",
    category: "Dairy",
    deliveryTime: "9 mins"
  },
  {
    id: 15,
    name: "Amul Butter",
    weight: "100 g",
    price: 52,
    originalPrice: 56,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/10491a.jpg",
    category: "Dairy",
    deliveryTime: "8 mins"
  },
  {
    id: 16,
    name: "Mother Dairy Curd",
    weight: "400 g",
    price: 35,
    originalPrice: 38,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/478a.jpg",
    category: "Dairy",
    deliveryTime: "9 mins"
  },
  {
    id: 17,
    name: "Amul Cheese Slices",
    weight: "200 g",
    price: 125,
    originalPrice: 135,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/10772a.jpg",
    category: "Dairy",
    deliveryTime: "8 mins"
  },
  {
    id: 18,
    name: "Britannia Paneer",
    weight: "200 g",
    price: 85,
    originalPrice: 92,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/40083059a.jpg",
    category: "Dairy",
    deliveryTime: "10 mins"
  },

  // Snacks & Munchies
  {
    id: 19,
    name: "Lays Classic Salted",
    weight: "52 g",
    price: 20,
    originalPrice: 20,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/483161a.jpg",
    category: "Munchies",
    deliveryTime: "8 mins"
  },
  {
    id: 20,
    name: "Kurkure Masala Munch",
    weight: "95 g",
    price: 20,
    originalPrice: 20,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/40011993a.jpg",
    category: "Munchies",
    deliveryTime: "8 mins"
  },
  {
    id: 21,
    name: "Haldiram Bhujia",
    weight: "200 g",
    price: 45,
    originalPrice: 50,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/40011873a.jpg",
    category: "Munchies",
    deliveryTime: "9 mins"
  },
  {
    id: 22,
    name: "Parle-G Biscuits",
    weight: "376 g",
    price: 35,
    originalPrice: 40,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/40011993a.jpg",
    category: "Munchies",
    deliveryTime: "8 mins"
  },
  {
    id: 23,
    name: "Britannia Good Day",
    weight: "216 g",
    price: 40,
    originalPrice: 45,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/40011873a.jpg",
    category: "Munchies",
    deliveryTime: "8 mins"
  },
  {
    id: 24,
    name: "Maggi Noodles",
    weight: "280 g",
    price: 48,
    originalPrice: 52,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/483161a.jpg",
    category: "Munchies",
    deliveryTime: "9 mins"
  },

  // Beverages
  {
    id: 25,
    name: "Coca Cola",
    weight: "750 ml",
    price: 35,
    originalPrice: 40,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/387942a.jpg",
    category: "Beverages",
    deliveryTime: "8 mins"
  },
  {
    id: 26,
    name: "Pepsi",
    weight: "750 ml",
    price: 35,
    originalPrice: 40,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/387943a.jpg",
    category: "Beverages",
    deliveryTime: "8 mins"
  },
  {
    id: 27,
    name: "Tropicana Orange Juice",
    weight: "1 L",
    price: 95,
    originalPrice: 105,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/40058534a.jpg",
    category: "Beverages",
    deliveryTime: "10 mins"
  },
  {
    id: 28,
    name: "Red Bull Energy Drink",
    weight: "250 ml",
    price: 115,
    originalPrice: 125,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/40011873a.jpg",
    category: "Beverages",
    deliveryTime: "8 mins"
  },
  {
    id: 29,
    name: "Bisleri Water",
    weight: "1 L",
    price: 20,
    originalPrice: 20,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/40011993a.jpg",
    category: "Beverages",
    deliveryTime: "7 mins"
  },
  {
    id: 30,
    name: "Nescafe Coffee",
    weight: "50 g",
    price: 145,
    originalPrice: 160,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/483161a.jpg",
    category: "Beverages",
    deliveryTime: "9 mins"
  },

  // Bakery
  {
    id: 31,
    name: "Britannia Bread",
    weight: "400 g",
    price: 35,
    originalPrice: 38,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/40011873a.jpg",
    category: "Bakery",
    deliveryTime: "10 mins"
  },
  {
    id: 32,
    name: "Harvest Gold Bread",
    weight: "400 g",
    price: 38,
    originalPrice: 42,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/40011993a.jpg",
    category: "Bakery",
    deliveryTime: "10 mins"
  },
  {
    id: 33,
    name: "Britannia Cake",
    weight: "250 g",
    price: 55,
    originalPrice: 60,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/483161a.jpg",
    category: "Bakery",
    deliveryTime: "9 mins"
  },
  {
    id: 34,
    name: "Milk Bun",
    weight: "4 pcs",
    price: 25,
    originalPrice: 28,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/40011873a.jpg",
    category: "Bakery",
    deliveryTime: "10 mins"
  },
  {
    id: 35,
    name: "Cream Roll",
    weight: "6 pcs",
    price: 40,
    originalPrice: 45,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/40011993a.jpg",
    category: "Bakery",
    deliveryTime: "10 mins"
  },
  {
    id: 36,
    name: "Cookies Assorted",
    weight: "300 g",
    price: 65,
    originalPrice: 72,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/483161a.jpg",
    category: "Bakery",
    deliveryTime: "9 mins"
  }
];

export const categories = [
  { id: 101, name: "Vegetables", icon: "🥦", color: "#22c55e" },
  { id: 102, name: "Fruits", icon: "🍎", color: "#ef4444" },
  { id: 103, name: "Dairy", icon: "🥛", color: "#3b82f6" },
  { id: 104, name: "Munchies", icon: "🍟", color: "#f59e0b" },
  { id: 105, name: "Beverages", icon: "🥤", color: "#8b5cf6" },
  { id: 106, name: "Bakery", icon: "🍞", color: "#ec4899" }
];
