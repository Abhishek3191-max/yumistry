import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Add item to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      return prevCart.filter((item) => item.id !== productId);
    });
  };

  // Delete item completely from cart
  const deleteFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Clear entire cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  // Get item quantity
  const getItemQuantity = (productId) => {
    const item = cart.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  };

  // Calculate total items
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Calculate subtotal
  const getSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Calculate total savings
  const getTotalSavings = () => {
    return cart.reduce(
      (total, item) =>
        total + (item.originalPrice - item.price) * item.quantity,
      0
    );
  };

  // Delivery fee logic (free above ₹200)
  const getDeliveryFee = () => {
    const subtotal = getSubtotal();
    return subtotal >= 200 ? 0 : 25;
  };

  // Calculate grand total
  const getTotal = () => {
    return getSubtotal() + getDeliveryFee();
  };

  const value = {
    cart,
    cartItems: cart, // Alias for cart
    addToCart,
    removeFromCart,
    deleteFromCart,
    clearCart,
    getItemQuantity,
    getTotalItems,
    getSubtotal,
    getTotalSavings,
    getDeliveryFee,
    getTotal,
    totalPrice: getTotal, // Alias for total price
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
