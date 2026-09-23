import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // استرجاع السلة من localStorage
    const savedCart = localStorage.getItem('bianconero_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // حفظ السلة في localStorage عند أي تغيير
  useEffect(() => {
    localStorage.setItem('bianconero_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // إضافة منتج
  const addToCart = (product, size, color, quantity = 1) => {
    setCartItems((prevItems) => {
      // البحث عن منتج بنفس الـ id + size + color
      const existingIndex = prevItems.findIndex(
        (item) =>
          item.id === product.id &&
          item.size === size &&
          item.color === color
      );

      if (existingIndex > -1) {
        // لو موجود، زوّد الكمية
        const updated = [...prevItems];
        updated[existingIndex].quantity += quantity;
        return updated;
      }

      // لو جديد، ضيفه
      return [
        ...prevItems,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          size,
          color,
          quantity,
        },
      ];
    });
  };

  // حذف منتج
  const removeFromCart = (id, size, color) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) => !(item.id === id && item.size === size && item.color === color)
      )
    );
  };

  // تعديل الكمية
  const updateQuantity = (id, size, color, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.size === size && item.color === color
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // تفريغ السلة
  const clearCart = () => {
    setCartItems([]);
  };

  // إجمالي عدد المنتجات
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // الإجمالي بالسعر
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook للاستخدام السهل
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};