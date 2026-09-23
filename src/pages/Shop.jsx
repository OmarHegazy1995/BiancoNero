import { useSearchParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const genderFilter = searchParams.get('gender');
  const categoryFilter = searchParams.get('category');

  // الفلترة
  let filteredProducts = products;

  if (genderFilter) {
    filteredProducts = filteredProducts.filter(
      (p) => p.gender === genderFilter || p.gender === 'unisex'
    );
  }

  if (categoryFilter) {
    filteredProducts = filteredProducts.filter(
      (p) => p.category.toLowerCase().replace(/\s/g, '-') === categoryFilter
    );
  }

  // العنوان
  const getTitle = () => {
    if (genderFilter === 'men') return "Men's Collection";
    if (genderFilter === 'women') return "Women's Collection";
    if (categoryFilter) return categoryFilter.replace(/-/g, ' ');
    return 'The Collection';
  };

  const getSubtitle = () => {
    if (genderFilter === 'men') return 'For Him';
    if (genderFilter === 'women') return 'For Her';
    if (categoryFilter) return 'Category';
    return 'All Products';
  };

  // الفلاتر النشطة
  const clearFilters = () => {
    setSearchParams({});
  };

  return (
    <div className="py-16 px-6 bg-bn-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="font-montserrat text-xs uppercase tracking-widest2 text-bn-taupe mb-3">
            {getSubtitle()}
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-bn-black capitalize">
            {getTitle()}
          </h1>
          <div className="w-16 h-[1px] bg-bn-taupe mx-auto mt-6"></div>
          <p className="font-montserrat text-xs text-bn-charcoal mt-4">
            {filteredProducts.length} Products
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <Link
            to="/shop"
            className={`font-montserrat text-xs uppercase tracking-widest2 px-5 py-2 border transition-colors duration-300 ${
              !genderFilter && !categoryFilter
                ? 'bg-bn-black text-bn-white border-bn-black'
                : 'bg-bn-white text-bn-black border-bn-light-gray hover:border-bn-black'
            }`}
          >
            All
          </Link>
          <Link
            to="/shop?gender=men"
            className={`font-montserrat text-xs uppercase tracking-widest2 px-5 py-2 border transition-colors duration-300 ${
              genderFilter === 'men'
                ? 'bg-bn-black text-bn-white border-bn-black'
                : 'bg-bn-white text-bn-black border-bn-light-gray hover:border-bn-black'
            }`}
          >
            Men
          </Link>
          <Link
            to="/shop?gender=women"
            className={`font-montserrat text-xs uppercase tracking-widest2 px-5 py-2 border transition-colors duration-300 ${
              genderFilter === 'women'
                ? 'bg-bn-black text-bn-white border-bn-black'
                : 'bg-bn-white text-bn-black border-bn-light-gray hover:border-bn-black'
            }`}
          >
            Women
          </Link>
          <Link
            to="/shop?category=t-shirts"
            className={`font-montserrat text-xs uppercase tracking-widest2 px-5 py-2 border transition-colors duration-300 ${
              categoryFilter === 't-shirts'
                ? 'bg-bn-black text-bn-white border-bn-black'
                : 'bg-bn-white text-bn-black border-bn-light-gray hover:border-bn-black'
            }`}
          >
            T-Shirts
          </Link>
          <Link
            to="/shop?category=hoodies"
            className={`font-montserrat text-xs uppercase tracking-widest2 px-5 py-2 border transition-colors duration-300 ${
              categoryFilter === 'hoodies'
                ? 'bg-bn-black text-bn-white border-bn-black'
                : 'bg-bn-white text-bn-black border-bn-light-gray hover:border-bn-black'
            }`}
          >
            Hoodies
          </Link>
          <Link
            to="/shop?category=pants"
            className={`font-montserrat text-xs uppercase tracking-widest2 px-5 py-2 border transition-colors duration-300 ${
              categoryFilter === 'pants'
                ? 'bg-bn-black text-bn-white border-bn-black'
                : 'bg-bn-white text-bn-black border-bn-light-gray hover:border-bn-black'
            }`}
          >
            Pants
          </Link>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="font-playfair text-2xl text-bn-charcoal mb-4">
              No products found.
            </p>
            <button
              onClick={clearFilters}
              className="font-montserrat text-xs uppercase tracking-widest2 text-bn-taupe underline hover:text-bn-black transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;