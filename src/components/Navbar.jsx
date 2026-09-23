import { Link, useLocation } from 'react-router-dom';
import { FiSearch, FiUser, FiShoppingBag, FiHeart, FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const location = useLocation();

  // دالة لتحديد هل الرابط Active ولا لأ
  const isLinkActive = (path) => {
    const current = location.pathname + location.search;
    return current === path;
  };

  const navLinks = [
    { name: 'Men', path: '/shop?gender=men' },
    { name: 'Women', path: '/shop?gender=women' },
    { name: 'Essentials', path: '/shop' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="w-full bg-bn-black border-b-2 border-bn-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-xl text-bn-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Logo */}
        <Link
          to="/"
          className="font-playfair text-xl md:text-2xl font-bold tracking-wide text-bn-white"
        >
          BiancoNero
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-montserrat text-xs uppercase tracking-widest2 transition-colors duration-300 ${
                isLinkActive(link.path)
                  ? 'text-bn-taupe'
                  : 'text-bn-white hover:text-bn-taupe'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-5 text-base text-bn-white">
          <Link
            to="/search"
            aria-label="Search"
            className="hover:text-bn-taupe transition-colors"
          >
            <FiSearch />
          </Link>
          <button aria-label="Account" className="hover:text-bn-taupe transition-colors">
            <FiUser />
          </button>
          <Link
            to="/wishlist"
            aria-label="Wishlist"
            className="hover:text-bn-taupe transition-colors relative"
          >
            <FiHeart />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-bn-taupe text-bn-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-montserrat">
                {wishlistCount}
              </span>
            )}
          </Link>
          <Link
            to="/cart"
            aria-label="Cart"
            className="hover:text-bn-taupe transition-colors relative"
          >
            <FiShoppingBag />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-bn-white text-bn-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-montserrat">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-bn-black border-t border-bn-charcoal px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block py-3 font-montserrat text-sm uppercase tracking-widest ${
                isLinkActive(link.path)
                  ? 'text-bn-taupe'
                  : 'text-bn-white hover:text-bn-taupe'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;