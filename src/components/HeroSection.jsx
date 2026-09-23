import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-bn-black flex items-center overflow-hidden">
      
      {/* Background Image */}
      <img
        src="hero-image.jpg"
        alt="BiancoNero Collection"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-bn-black/80 via-bn-black/70 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-lg">
          
          {/* Subtitle */}
          <p className="font-montserrat text-[10px] md:text-xs uppercase tracking-widest2 text-bn-taupe mb-6">
            New Collection
          </p>

          {/* Title */}
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-bn-white mb-6 leading-[1.1]">
            Elevate<br />Your Everyday
          </h1>

          {/* Divider */}
          <div className="w-12 h-[1px] bg-bn-taupe mb-6"></div>

          {/* Description */}
          <p className="font-montserrat text-sm md:text-base text-bn-light-gray mb-10 max-w-sm leading-relaxed">
            Timeless essentials<br />for a modern life.
          </p>

          {/* CTA Button */}
          <Link
            to="/shop"
            className="inline-block bg-bn-white text-bn-black font-montserrat text-xs font-semibold uppercase tracking-widest2 px-10 py-4 hover:bg-bn-taupe hover:text-bn-white transition-colors duration-300"
          >
            Shop Now
          </Link>
        </div>
      </div>

     

      {/* Bottom Right - Tagline */}
      <div className="absolute bottom-10 right-6 md:right-12 z-10 hidden md:block text-right">
        <p className="font-montserrat text-xs uppercase tracking-widest2 text-bn-taupe leading-loose">
          Simple<br />Bolder<br />Real
        </p>
      </div>
    </section>
  );
};

export default HeroSection;