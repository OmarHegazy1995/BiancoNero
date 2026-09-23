import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FiHeart, FiMinus, FiPlus, FiChevronRight, FiTruck, FiRefreshCw, FiShield } from 'react-icons/fi';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-bn-white px-6">
        <h1 className="font-playfair text-4xl text-bn-black mb-4">
          Product Not Found
        </h1>
        <Link
          to="/shop"
          className="font-montserrat text-xs uppercase tracking-widest2 text-bn-taupe underline"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  const selectedColorHex = product.colors[selectedColor];
  const productImages = product.imagesByColor && product.imagesByColor[selectedColorHex]
    ? product.imagesByColor[selectedColorHex]
    : (product.images && product.images.length > 0 ? product.images : [product.image]);

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const sizes = ['S', 'M', 'L', 'XL', '2XL'];
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, product.colors[selectedColor], quantity);
    navigate('/cart');
  };

  const handleColorChange = (index) => {
    setSelectedColor(index);
    setSelectedImage(0);
  };

  return (
    <div className="bg-bn-white min-h-screen">
      
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-6 py-3">
        <div className="flex items-center gap-2 font-montserrat text-[10px] text-bn-charcoal flex-wrap">
          <Link to="/" className="hover:text-bn-taupe">Home</Link>
          <FiChevronRight size={10} />
          <Link to="/shop" className="hover:text-bn-taupe">Shop</Link>
          <FiChevronRight size={10} />
          <span className="text-bn-black">{product.name}</span>
        </div>
      </div>

      {/* Product Main */}
      <div className="max-w-4xl mx-auto px-6 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
          
          {/* Images Gallery - أصغر */}
          <div className="space-y-3 w-full max-w-xs mx-auto md:mx-0">
            {/* Main Image */}
            <div className="bg-bn-light-gray aspect-[4/5] overflow-hidden">
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            {productImages.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {productImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`aspect-[4/5] bg-bn-light-gray overflow-hidden border-2 transition-all ${
                      selectedImage === i
                        ? 'border-bn-black'
                        : 'border-transparent hover:border-bn-taupe'
                    }`}
                    aria-label={`View image ${i + 1}`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            
            {/* Badges */}
            <div className="flex gap-2 mb-3">
              {product.isNew && (
                <span className="bg-bn-black text-bn-white text-[9px] font-montserrat uppercase tracking-widest px-2 py-1">
                  New
                </span>
              )}
              {product.isBestSeller && (
                <span className="bg-bn-taupe text-bn-black text-[9px] font-montserrat uppercase tracking-widest px-2 py-1">
                  Best Seller
                </span>
              )}
            </div>

            {/* Name */}
            <h1 className="font-playfair text-2xl md:text-3xl font-bold text-bn-black mb-2">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-center gap-3 mb-4">
              {product.oldPrice && (
                <span className="font-montserrat text-base text-bn-charcoal line-through">
                  LE {product.oldPrice}
                </span>
              )}
              <span className="font-montserrat text-xl font-semibold text-bn-black">
                LE {product.price}
              </span>
            </div>

            <div className="w-12 h-[1px] bg-bn-taupe mb-4"></div>

            {/* Description */}
            <p className="font-montserrat text-xs text-bn-charcoal leading-relaxed mb-5">
              {product.description || 'Timeless essential designed for a better everyday.'}
            </p>

            {/* Color */}
            <div className="mb-4">
              <p className="font-montserrat text-[10px] uppercase tracking-widest2 text-bn-black mb-2">
                Color
              </p>
              <div className="flex gap-2">
                {product.colors.map((color, i) => (
                  <button
                    key={i}
                    onClick={() => handleColorChange(i)}
                    className={`w-7 h-7 rounded-full border-2 transition-all ${
                      selectedColor === i ? 'border-bn-black scale-110' : 'border-bn-light-gray'
                    }`}
                    style={{ backgroundColor: color }}
                    aria-label={`Color ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mb-4">
              <p className="font-montserrat text-[10px] uppercase tracking-widest2 text-bn-black mb-2">
                Size
              </p>
              <div className="flex gap-2 flex-wrap">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 font-montserrat text-[10px] border transition-all ${
                      selectedSize === size
                        ? 'bg-bn-black text-bn-white border-bn-black'
                        : 'bg-bn-white text-bn-black border-bn-light-gray hover:border-bn-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex gap-3 mb-4">
              <div className="flex items-center border border-bn-light-gray">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-bn-black hover:bg-bn-light-gray transition-colors"
                  aria-label="Decrease"
                >
                  <FiMinus size={12} />
                </button>
                <span className="w-10 text-center font-montserrat text-xs">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-bn-black hover:bg-bn-light-gray transition-colors"
                  aria-label="Increase"
                >
                  <FiPlus size={12} />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 bg-bn-black text-bn-white font-montserrat text-[10px] uppercase tracking-widest2 py-3 hover:bg-bn-taupe transition-colors duration-300"
              >
                Add to Cart
              </button>

              <button
                onClick={() => toggleWishlist(product)}
                aria-label="Wishlist"
                className={`w-11 h-11 border flex items-center justify-center transition-colors ${
                  inWishlist
                    ? 'bg-bn-taupe text-bn-white border-bn-taupe'
                    : 'border-bn-light-gray text-bn-black hover:bg-bn-taupe hover:text-bn-white hover:border-bn-taupe'
                }`}
              >
                <FiHeart size={16} fill={inWishlist ? 'currentColor' : 'none'} />
              </button>
            </div>

            {/* Features */}
            <div className="border-t border-bn-light-gray pt-4 space-y-2">
              <div className="flex items-center gap-2 font-montserrat text-[10px] text-bn-charcoal">
                <FiTruck className="text-bn-taupe" size={12} />
                <span>Free shipping on orders over LE 1500</span>
              </div>
              <div className="flex items-center gap-2 font-montserrat text-[10px] text-bn-charcoal">
                <FiRefreshCw className="text-bn-taupe" size={12} />
                <span>14 days easy returns</span>
              </div>
              <div className="flex items-center gap-2 font-montserrat text-[10px] text-bn-charcoal">
                <FiShield className="text-bn-taupe" size={12} />
                <span>Premium quality guaranteed</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="bg-bn-light-gray py-10 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <p className="font-montserrat text-[10px] uppercase tracking-widest2 text-bn-taupe mb-2">
                You May Also Like
              </p>
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-bn-black">
                Related Products
              </h2>
              <div className="w-12 h-[1px] bg-bn-taupe mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;