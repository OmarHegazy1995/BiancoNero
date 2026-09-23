import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiCheck, FiCreditCard, FiTruck, FiLock } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, cartTotal, clearCart } = useCart();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    notes: '',
    paymentMethod: 'cod',
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const shipping = cartTotal > 1500 ? 0 : 50;
  const total = cartTotal + shipping;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا ممكن تبعت البيانات لـ API
    setOrderPlaced(true);
    clearCart();
    setTimeout(() => {
      navigate('/');
    }, 5000);
  };

  // لو السلة فاضية ومفيش طلب
  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-bn-white px-6">
        <h1 className="font-playfair text-3xl text-bn-black mb-4">
          Your Cart is Empty
        </h1>
        <Link
          to="/shop"
          className="font-montserrat text-xs uppercase tracking-widest2 text-bn-taupe underline"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  // شاشة النجاح
  if (orderPlaced) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-bn-white px-6 py-20">
        <div className="w-20 h-20 rounded-full bg-bn-taupe flex items-center justify-center mb-8">
          <FiCheck size={40} className="text-bn-white" />
        </div>
        <p className="font-montserrat text-xs uppercase tracking-widest2 text-bn-taupe mb-3">
          Order Confirmed
        </p>
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-bn-black mb-6 text-center">
          Thank You for Your Order
        </h1>
        <p className="font-montserrat text-sm text-bn-charcoal mb-8 text-center max-w-md leading-relaxed">
          We've received your order and will contact you shortly to confirm delivery.
          You'll receive an email confirmation soon.
        </p>
        <div className="w-16 h-[1px] bg-bn-taupe mb-8"></div>
        <p className="font-montserrat text-xs text-bn-charcoal mb-8">
          Redirecting to home...
        </p>
        <Link
          to="/shop"
          className="bg-bn-black text-bn-white font-montserrat text-xs uppercase tracking-widest2 px-10 py-4 hover:bg-bn-taupe transition-colors duration-300"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-bn-white min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-10">
          <Link
            to="/cart"
            className="inline-flex items-center gap-2 font-montserrat text-xs uppercase tracking-widest2 text-bn-charcoal hover:text-bn-taupe transition-colors mb-6"
          >
            <FiArrowLeft size={14} />
            Back to Cart
          </Link>
          <div className="text-center">
            <p className="font-montserrat text-xs uppercase tracking-widest2 text-bn-taupe mb-3">
              Final Step
            </p>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-bn-black">
              Checkout
            </h1>
            <div className="w-16 h-[1px] bg-bn-taupe mx-auto mt-6"></div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* Form */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Contact Info */}
              <div className="border border-bn-light-gray p-6 md:p-8">
                <h2 className="font-playfair text-xl font-bold text-bn-black mb-6">
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="border border-bn-light-gray px-4 py-3 font-montserrat text-sm focus:outline-none focus:border-bn-black transition-colors"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="border border-bn-light-gray px-4 py-3 font-montserrat text-sm focus:outline-none focus:border-bn-black transition-colors"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="border border-bn-light-gray px-4 py-3 font-montserrat text-sm focus:outline-none focus:border-bn-black transition-colors"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="border border-bn-light-gray px-4 py-3 font-montserrat text-sm focus:outline-none focus:border-bn-black transition-colors"
                  />
                </div>
              </div>

              {/* Shipping Address */}
              <div className="border border-bn-light-gray p-6 md:p-8">
                <h2 className="font-playfair text-xl font-bold text-bn-black mb-6">
                  Shipping Address
                </h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="address"
                    placeholder="Street Address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full border border-bn-light-gray px-4 py-3 font-montserrat text-sm focus:outline-none focus:border-bn-black transition-colors"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="border border-bn-light-gray px-4 py-3 font-montserrat text-sm focus:outline-none focus:border-bn-black transition-colors"
                    />
                    <input
                      type="text"
                      name="postalCode"
                      placeholder="Postal Code"
                      value={formData.postalCode}
                      onChange={handleChange}
                      className="border border-bn-light-gray px-4 py-3 font-montserrat text-sm focus:outline-none focus:border-bn-black transition-colors"
                    />
                  </div>
                  <textarea
                    name="notes"
                    placeholder="Order Notes (Optional)"
                    rows="3"
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full border border-bn-light-gray px-4 py-3 font-montserrat text-sm focus:outline-none focus:border-bn-black transition-colors resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Payment */}
              <div className="border border-bn-light-gray p-6 md:p-8">
                <h2 className="font-playfair text-xl font-bold text-bn-black mb-6">
                  Payment Method
                </h2>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 border border-bn-light-gray p-4 cursor-pointer hover:border-bn-black transition-colors">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleChange}
                      className="accent-bn-black"
                    />
                    <FiTruck className="text-bn-taupe" />
                    <span className="font-montserrat text-sm text-bn-black">
                      Cash on Delivery
                    </span>
                  </label>
                  <label className="flex items-center gap-3 border border-bn-light-gray p-4 cursor-pointer hover:border-bn-black transition-colors">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleChange}
                      className="accent-bn-black"
                    />
                    <FiCreditCard className="text-bn-taupe" />
                    <span className="font-montserrat text-sm text-bn-black">
                      Credit / Debit Card
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-bn-light-gray p-6 md:p-8 sticky top-24">
                <h2 className="font-playfair text-2xl font-bold text-bn-black mb-6">
                  Your Order
                </h2>

                {/* Items */}
                <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                  {cartItems.map((item) => (
                    <div
                      key={`${item.id}-${item.size}-${item.color}`}
                      className="flex gap-3"
                    >
                      <div className="w-14 h-16 bg-bn-white flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 font-montserrat text-xs">
                        <p className="text-bn-black font-medium">{item.name}</p>
                        <p className="text-bn-charcoal">
                          {item.size} × {item.quantity}
                        </p>
                      </div>
                      <p className="font-montserrat text-xs font-semibold text-bn-black">
                        LE {item.price * item.quantity}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-bn-taupe/40 pt-4 space-y-3 font-montserrat text-sm mb-4">
                  <div className="flex justify-between text-bn-charcoal">
                    <span>Subtotal</span>
                    <span>LE {cartTotal}</span>
                  </div>
                  <div className="flex justify-between text-bn-charcoal">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `LE ${shipping}`}</span>
                  </div>
                </div>

                <div className="border-t border-bn-taupe/40 pt-4 mb-6">
                  <div className="flex justify-between font-montserrat text-base font-bold text-bn-black">
                    <span>Total</span>
                    <span>LE {total}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-bn-black text-bn-white font-montserrat text-xs uppercase tracking-widest2 py-4 hover:bg-bn-taupe transition-colors duration-300 flex items-center justify-center gap-2 mb-4"
                >
                  <FiLock size={14} />
                  Place Order
                </button>

                <p className="font-montserrat text-[10px] text-bn-charcoal text-center leading-relaxed">
                  By placing your order, you agree to our Terms & Conditions and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;