import { Link } from 'react-router-dom';
import { FiInstagram, FiFacebook, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaTiktok, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-bn-black text-bn-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand */}
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">BiancoNero</h3>
            <p className="font-montserrat text-xs uppercase tracking-widest2 text-bn-taupe mb-6">
              For a Better Everyday
            </p>
            <p className="font-montserrat text-sm text-bn-light-gray leading-relaxed mb-6">
              A more conscious wardrobe for a brighter tomorrow.
            </p>
            <div className="flex gap-4 text-lg">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-bn-taupe transition-colors"
              >
                <FiInstagram />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-bn-taupe transition-colors"
              >
                <FiFacebook />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="hover:text-bn-taupe transition-colors"
              >
                <FaTiktok />
              </a>
              <a
                href="https://wa.me/201553009484"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:text-bn-taupe transition-colors"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-montserrat text-xs uppercase tracking-widest2 text-bn-taupe mb-5">
              Shop
            </h4>
            <ul className="space-y-3 font-montserrat text-sm text-bn-light-gray">
              <li><Link to="/shop" className="hover:text-bn-taupe transition-colors">All Products</Link></li>
              <li><Link to="/shop?category=t-shirts" className="hover:text-bn-taupe transition-colors">T-Shirts</Link></li>
              <li><Link to="/shop?category=hoodies" className="hover:text-bn-taupe transition-colors">Hoodies</Link></li>
              <li><Link to="/shop?category=pants" className="hover:text-bn-taupe transition-colors">Pants</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-montserrat text-xs uppercase tracking-widest2 text-bn-taupe mb-5">
              Help
            </h4>
            <ul className="space-y-3 font-montserrat text-sm text-bn-light-gray">
              <li><a href="#" className="hover:text-bn-taupe transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-bn-taupe transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-bn-taupe transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-bn-taupe transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-montserrat text-xs uppercase tracking-widest2 text-bn-taupe mb-5">
              Contact
            </h4>
            <ul className="space-y-3 font-montserrat text-sm text-bn-light-gray">
              <li className="flex items-center gap-2">
                <FiMail />
                <a href="mailto:info@bianco-nero.com" className="hover:text-bn-taupe transition-colors">
                  info@bianco-nero.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiPhone />
                <a href="tel:+201553009484" className="hover:text-bn-taupe transition-colors">
                  +20 1553009484
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiMapPin />
                <span>Cairo, Egypt</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-bn-charcoal pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-montserrat text-xs text-bn-light-gray">
            © 2025 BiancoNero. All rights reserved.
          </p>
          <p className="font-montserrat text-[10px] uppercase tracking-widest2 text-bn-taupe">
            Details Make a Stronger Story
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;