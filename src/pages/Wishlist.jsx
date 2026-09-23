import { Link } from 'react-router-dom';
import { FiHeart, FiShoppingBag, FiTrash2, FiArrowLeft } from 'react-icons/fi';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  // لو فاضية
  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-bn-white px-6">
        <FiHeart size={60} className="text-bn-taupe mb-6" />
        <h1 className="font-playfair text-3xl md:text-4xl font-bold text-bn-black mb-4">
          Your Wishlist is Empty
        </h1>
        <p className="font-montserrat text-sm text-bn-charcoal mb-8 text-center max-w-md">
          Save your favorite pieces here for later. Start exploring our collection.
        </p>
        <Link
          to="/shop"
          className="bg-bn-black text-bn-white font-montserrat text-xs uppercase tracking-widest2 px-10 py-4 hover:bg-bn-taupe transition-colors duration-300"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  const handleAddToCart = (item) => {
    // بنضيف المنتج بحجم افتراضي M ولون أول لون
    addToCart(
      { id: item.id, name: item.name, price: item.price, image: item.image },
      'M',
      item.colors[0],
      1
    );
  };

  return (
    <div className="bg-bn-white min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-10">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 font-montserrat text-xs uppercase tracking-widest2 text-bn-charcoal hover:text-bn-taupe transition-colors mb-6"
          >
            <FiArrowLeft size={14} />
            Continue Shopping
          </Link>
          <div className="text-center">
            <p className="font-montserrat text-xs uppercase tracking-widest2 text-bn-taupe mb-3">
              Saved for Later
            </p>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-bn-black">
              My Wishlist
            </h1>
            <div className="w-16 h-[1px] bg-bn-taupe mx-auto mt-6"></div>
            <p className="font-montserrat text-xs text-bn-charcoal mt-4">
              {wishlistItems.length} {wishlistItems.length === 1 ? 'Item' : 'Items'}
            </p>
          </div>
        </div>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {wishlistItems.map((item) => (
            <div key={item.id} className="relative group">
              <ProductCard product={item} />
              
              {/* Overlay Buttons */}
              <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    removeFromWishlist(item.id);
                  }}
                  className="bg-bn-white/90 backdrop-blur-sm w-9 h-9 rounded-full flex items-center justify-center text-bn-black hover:bg-bn-black hover:text-bn-white transition-colors"
                  aria-label="Remove"
                >
                  <FiTrash2 size={14} />
                </button>
              </div>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleAddToCart(item);
                }}
                className="absolute bottom-20 left-0 w-full bg-bn-black text-bn-white py-3 font-montserrat text-xs uppercase tracking-widest2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 z-10"
              >
                <FiShoppingBag size={14} />
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Clear */}
        <div className="flex justify-center">
          <button
            onClick={clearWishlist}
            className="font-montserrat text-xs uppercase tracking-widest2 text-bn-charcoal underline hover:text-bn-black transition-colors"
          >
            Clear Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;