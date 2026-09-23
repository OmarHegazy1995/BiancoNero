import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { FiSearch, FiX } from 'react-icons/fi';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [inputValue, setInputValue] = useState(query);

  // تحديث الـ URL لما المستخدم يكتب
  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputValue.trim()) {
        setSearchParams({ q: inputValue });
      } else {
        setSearchParams({});
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [inputValue, setSearchParams]);

  // فلترة المنتجات
  const filteredProducts = query.trim()
    ? products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const clearSearch = () => {
    setInputValue('');
    setSearchParams({});
  };

  return (
    <div className="bg-bn-white min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="font-montserrat text-xs uppercase tracking-widest2 text-bn-taupe mb-3">
            Find Your Essential
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-bn-black">
            Search
          </h1>
          <div className="w-16 h-[1px] bg-bn-taupe mx-auto mt-6"></div>
        </div>

        {/* Search Input */}
        <div className="relative mb-12">
          <FiSearch
            size={20}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-bn-charcoal"
          />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search for products..."
            autoFocus
            className="w-full border border-bn-light-gray bg-bn-white pl-14 pr-14 py-5 font-montserrat text-sm text-bn-black placeholder:text-bn-charcoal focus:outline-none focus:border-bn-black transition-colors"
          />
          {inputValue && (
            <button
              onClick={clearSearch}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-bn-charcoal hover:text-bn-black transition-colors"
              aria-label="Clear"
            >
              <FiX size={20} />
            </button>
          )}
        </div>

        {/* Results */}
        {query.trim() === '' ? (
          <div className="text-center py-16">
            <p className="font-montserrat text-sm text-bn-charcoal mb-8">
              Start typing to search our collection.
            </p>

            {/* Popular Searches */}
            <div>
              <p className="font-montserrat text-xs uppercase tracking-widest2 text-bn-taupe mb-4">
                Popular Searches
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Tee', 'Hoodie', 'Pants', 'Polo', 'Shorts'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setInputValue(term)}
                    className="font-montserrat text-xs uppercase tracking-widest2 border border-bn-light-gray px-5 py-2 text-bn-black hover:bg-bn-black hover:text-bn-white hover:border-bn-black transition-colors duration-300"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : filteredProducts.length > 0 ? (
          <>
            <p className="font-montserrat text-xs uppercase tracking-widest2 text-bn-charcoal mb-8 text-center">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'Result' : 'Results'} for "{query}"
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <h2 className="font-playfair text-2xl md:text-3xl text-bn-black mb-4">
              No Results Found
            </h2>
            <p className="font-montserrat text-sm text-bn-charcoal mb-8">
              We couldn't find anything matching "{query}". Try a different search term.
            </p>
            <Link
              to="/shop"
              className="inline-block bg-bn-black text-bn-white font-montserrat text-xs uppercase tracking-widest2 px-10 py-4 hover:bg-bn-taupe transition-colors duration-300"
            >
              Browse All Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;