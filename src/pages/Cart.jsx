import { Link } from 'react-router-dom';
import { FiMinus, FiPlus, FiTrash2, FiArrowLeft, FiShoppingBag } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, cartCount, clearCart } = useCart();

  // لو السلة فاضية
  if (cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-bn-white px-6">
        <FiShoppingBag size={60} className="text-bn-taupe mb-6" />
        <h1 className="font-playfair text-3xl md:text-4xl font-bold text-bn-black mb-4">
          Your Cart is Empty
        </h1>
        <p className="font-montserrat text-sm text-bn-charcoal mb-8 text-center max-w-md">
          Looks like you haven't added anything yet. Start exploring our timeless essentials.
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

  const shipping = cartTotal > 1500 ? 0 : 50;

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
              Your Selection
            </p>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-bn-black">
              Shopping Cart
            </h1>
            <div className="w-16 h-[1px] bg-bn-taupe mx-auto mt-6"></div>
            <p className="font-montserrat text-xs text-bn-charcoal mt-4">
              {cartCount} {cartCount === 1 ? 'Item' : 'Items'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={`${item.id}-${item.size}-${item.color}`}
                className="flex gap-4 md:gap-6 border-b border-bn-light-gray pb-6"
              >
                {/* Image */}
                <Link
                  to={`/product/${item.id}`}
                  className="w-24 h-32 md:w-32 md:h-40 bg-bn-light-gray flex-shrink-0 overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </Link>

                {/* Info */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <Link
                        to={`/product/${item.id}`}
                        className="font-playfair text-lg md:text-xl font-bold text-bn-black hover:text-bn-taupe transition-colors"
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => removeFromCart(item.id, item.size, item.color)}
                        className="text-bn-charcoal hover:text-bn-black transition-colors p-1"
                        aria-label="Remove"
                      >
                        <FiTrash2 size={16} />
                      </button>
                    </div>

                    <div className="flex items-center gap-3 font-montserrat text-xs text-bn-charcoal mb-3">
                      <span className="flex items-center gap-2">
                        Size: <span className="text-bn-black font-medium">{item.size}</span>
                      </span>
                      <span>|</span>
                      <span className="flex items-center gap-2">
                        Color:
                        <span
                          className="w-3 h-3 rounded-full border border-bn-light-gray inline-block"
                          style={{ backgroundColor: item.color }}
                        />
                      </span>
                    </div>

                    <p className="font-montserrat text-sm font-semibold text-bn-black">
                      LE {item.price}
                    </p>
                  </div>

                  {/* Quantity + Total */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-bn-light-gray">
                      <button
                        onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
                        className="w-9 h-9 flex items-center justify-center hover:bg-bn-light-gray transition-colors"
                        aria-label="Decrease"
                      >
                        <FiMinus size={12} />
                      </button>
                      <span className="w-10 text-center font-montserrat text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                        className="w-9 h-9 flex items-center justify-center hover:bg-bn-light-gray transition-colors"
                        aria-label="Increase"
                      >
                        <FiPlus size={12} />
                      </button>
                    </div>

                    <p className="font-montserrat text-base font-bold text-bn-black">
                      LE {item.price * item.quantity}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Clear Cart */}
            <div className="flex justify-end pt-4">
              <button
                onClick={clearCart}
                className="font-montserrat text-xs uppercase tracking-widest2 text-bn-charcoal underline hover:text-bn-black transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-bn-light-gray p-6 md:p-8 sticky top-24">
              <h2 className="font-playfair text-2xl font-bold text-bn-black mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 font-montserrat text-sm mb-6">
                <div className="flex justify-between text-bn-charcoal">
                  <span>Subtotal</span>
                  <span>LE {cartTotal}</span>
                </div>
                <div className="flex justify-between text-bn-charcoal">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `LE ${shipping}`}</span>
                </div>
                {shipping > 0 && (
                  <p className="font-montserrat text-[10px] text-bn-taupe uppercase tracking-widest2">
                    Add LE {1500 - cartTotal} more for free shipping
                  </p>
                )}
              </div>

              <div className="border-t border-bn-taupe/40 pt-4 mb-6">
                <div className="flex justify-between font-montserrat text-base font-bold text-bn-black">
                  <span>Total</span>
                  <span>LE {cartTotal + shipping}</span>
                </div>
              </div>

              <Link
                to="/checkout"
                className="block text-center w-full bg-bn-black text-bn-white font-montserrat text-xs uppercase tracking-widest2 py-4 hover:bg-bn-taupe transition-colors duration-300 mb-3"
              >
                Proceed to Checkout
              </Link>

              <Link
                to="/shop"
                className="block text-center font-montserrat text-xs uppercase tracking-widest2 text-bn-charcoal underline hover:text-bn-black transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;