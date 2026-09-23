import { Link } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import { useWishlist } from '../context/WishlistContext';

const ProductCard = ({ product }) => {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  return (
    <Link to={`/product/${product.id}`} className="group cursor-pointer block">
      
      {/* Image */}
      <div className="relative overflow-hidden bg-bn-light-gray mb-4 aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
          {product.isNew && (
            <span className="bg-bn-black text-bn-white text-[10px] font-montserrat uppercase tracking-widest px-3 py-1">
              New
            </span>
          )}
          {product.oldPrice && (
            <span className="bg-bn-taupe text-bn-black text-[10px] font-montserrat uppercase tracking-widest px-3 py-1">
              Sale
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product);
          }}
          aria-label="Add to wishlist"
          className={`absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-colors z-10 ${
            inWishlist
              ? 'bg-bn-taupe text-bn-white'
              : 'bg-bn-white/80 backdrop-blur-sm text-bn-black hover:bg-bn-taupe hover:text-bn-white'
          }`}
        >
          <FiHeart size={16} fill={inWishlist ? 'currentColor' : 'none'} />
        </button>

        {/* Quick Add */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className="absolute bottom-0 left-0 w-full bg-bn-black text-bn-white py-4 font-montserrat text-xs uppercase tracking-widest2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          Quick Add
        </button>
      </div>

      {/* Details */}
      <div className="text-center font-montserrat">
        <h3 className="text-sm font-medium text-bn-black mb-1 tracking-wide">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-center gap-2">
          {product.oldPrice && (
            <span className="text-xs text-bn-charcoal line-through">
              LE {product.oldPrice}
            </span>
          )}
          <span className="text-sm text-bn-black font-semibold">
            LE {product.price}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;