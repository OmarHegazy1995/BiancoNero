import { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState(() => {
    const saved = localStorage.getItem('bianconero_wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  // حفظ في localStorage
  useEffect(() => {
    localStorage.setItem('bianconero_wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  // إضافة / إزالة
  const toggleWishlist = (product) => {
    setWishlistItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          oldPrice: product.oldPrice,
          image: product.image,
          category: product.category,
          colors: product.colors,
        },
      ];
    });
  };

  // إزالة
  const removeFromWishlist = (id) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  // التحقق
  const isInWishlist = (id) => {
    return wishlistItems.some((item) => item.id === id);
  };

  // تفريغ
  const clearWishlist = () => {
    setWishlistItems([]);
  };

  const wishlistCount = wishlistItems.length;

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        toggleWishlist,
        removeFromWishlist,
        isInWishlist,
        clearWishlist,
        wishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};