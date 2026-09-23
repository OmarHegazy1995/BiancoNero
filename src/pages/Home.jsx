import HeroSection from '../components/HeroSection';
import FeaturesBar from '../components/FeaturesBar';
import CategorySection from '../components/CategorySection';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Link } from 'react-router-dom';

const Home = () => {
  const newArrivals = products.filter((p) => p.isNew).slice(0, 4);
  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 4);

  return (
    <div>
      <HeroSection />
      <FeaturesBar />
      <CategorySection />

      {/* New Arrivals */}
      <section className="py-20 px-6 bg-bn-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-montserrat text-xs uppercase tracking-widest2 text-bn-taupe mb-3">
              Fresh Drops
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-bn-black">
              New Arrivals
            </h2>
            <div className="w-16 h-[1px] bg-bn-taupe mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-block border border-bn-black text-bn-black font-montserrat text-xs uppercase tracking-widest2 px-10 py-4 hover:bg-bn-black hover:text-bn-white transition-colors duration-300"
            >
              View All
            </Link>
          </div>
        </div>
      </section>

      {/* Banner - Minimal Looks. Maximum Impact. */}
      <section className="relative h-[70vh] bg-bn-light-gray overflow-hidden">
        {/* Background Image */}
        <img
  src={`${import.meta.env.BASE_URL}cover2.jpg`}
  alt="BiancoNero Collection"
  className="absolute inset-0 w-full h-full object-cover"
/>

        {/* Content - Left Aligned */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 flex items-center">
          <div className="max-w-lg">
            
            {/* Subtitle */}
            <p className="font-montserrat text-[10px] md:text-xs uppercase tracking-widest2 text-bn-black mb-5">
              Timeless Essentials
            </p>

            {/* Title */}
            <h2 className="font-playfair text-4xl md:text-6xl font-semibold text-bn-black mb-5 leading-[1.1]">
              Minimal Looks.<br />Maximum Impact.
            </h2>

            {/* Divider */}
            <div className="w-12 h-[1px] bg-bn-black mb-5"></div>

            {/* Description */}
            <p className="font-montserrat text-sm text-bn-charcoal leading-relaxed mb-8 max-w-xs">
              Premium basics designed for<br />a modern life.
            </p>

            {/* CTA Button */}
            <Link
              to="/shop"
              className="inline-block bg-bn-black text-bn-white font-montserrat text-[10px] uppercase tracking-widest2 px-8 py-3 hover:bg-bn-taupe transition-colors duration-300"
            >
              Shop Now →
            </Link>
          </div>
        </div>

        {/* Right Side - Tagline */}
        <div className="absolute top-1/2 -translate-y-1/2 right-6 md:right-12 z-10 hidden md:block text-right">
          <p className="font-montserrat text-[10px] uppercase tracking-widest2 text-bn-white leading-loose">
            Simple<br />Bolder<br />Real
          </p>
          <div className="w-8 h-[1px] bg-bn-white ml-auto mt-3"></div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 px-6 bg-bn-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-montserrat text-xs uppercase tracking-widest2 text-bn-taupe mb-3">
              Loved by Many
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-bn-black">
              Best Sellers
            </h2>
            <div className="w-16 h-[1px] bg-bn-taupe mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;