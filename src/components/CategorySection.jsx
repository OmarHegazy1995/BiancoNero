import { Link } from 'react-router-dom';
import { categories } from '../data/products';

const CategorySection = () => {
  return (
    <section className="py-20 px-6 bg-bn-white">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="font-montserrat text-xs uppercase tracking-widest2 text-bn-taupe mb-3">
            Explore
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-bn-black">
            Shop by Category
          </h2>
          <div className="w-16 h-[1px] bg-bn-taupe mx-auto mt-6"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.slug}`}
              className="group relative overflow-hidden aspect-square bg-bn-light-gray"
            >
              {/* Image */}
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-bn-black/40 group-hover:bg-bn-black/60 transition-colors duration-300"></div>

              {/* Name */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-montserrat text-xs uppercase tracking-widest2 text-bn-white text-center px-2">
                  {cat.name}
                </span>
              </div>

              {/* Bottom Line on Hover */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-bn-taupe scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;