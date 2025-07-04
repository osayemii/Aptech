import React, { useState, useEffect } from 'react';
import { Sliders, Search } from 'lucide-react';
import Layout from '../components/layout/Layout';
import ProductGrid from '../components/products/ProductGrid';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { Product } from '../types';

const ProductsPage: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: 2000 });
  const [showFilters, setShowFilters] = useState<boolean>(false);

  useEffect(() => {
    let result = [...products];

    // Filter by search query
    if (searchQuery) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(product => product.category === selectedCategory);
    }

    // Filter by price range
    result = result.filter(product => 
      product.price >= priceRange.min && product.price <= priceRange.max
    );

    // Sort products
    switch (sortBy) {
      case 'price-low-high':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      // Default is featured, no sorting needed
    }

    setFilteredProducts(result);
  }, [searchQuery, selectedCategory, sortBy, priceRange]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Search is already handled in the useEffect
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">All Products</h1>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center text-gray-600 hover:text-blue-600"
          >
            <Sliders size={20} className="mr-2" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar - Desktop */}
          <div className={`w-full lg:w-1/4 lg:block ${showFilters ? 'block' : 'hidden'}`}>
            <div className="bg-white p-6 rounded-lg shadow-md">
              {/* Search Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Search</h3>
                <form onSubmit={handleSearch} className="flex items-center bg-gray-100 rounded-md px-3 py-2">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="bg-transparent border-none focus:outline-none text-sm flex-grow"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button type="submit" className="text-gray-500 hover:text-blue-600">
                    <Search size={18} />
                  </button>
                </form>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Categories</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="category-all"
                      name="category"
                      checked={selectedCategory === 'all'}
                      onChange={() => setSelectedCategory('all')}
                      className="mr-2"
                    />
                    <label htmlFor="category-all" className="text-gray-700">All Categories</label>
                  </div>
                  {categories.map(category => (
                    <div key={category.id} className="flex items-center">
                      <input
                        type="radio"
                        id={`category-${category.id}`}
                        name="category"
                        checked={selectedCategory === category.id}
                        onChange={() => setSelectedCategory(category.id)}
                        className="mr-2"
                      />
                      <label htmlFor={`category-${category.id}`} className="text-gray-700">{category.name}</label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Price Range</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">${priceRange.min}</span>
                    <span className="text-sm text-gray-600">${priceRange.max}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    step="50"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Sort By Filter */}
              <div>
                <h3 className="font-semibold mb-3">Sort By</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="rating">Customer Rating</option>
                </select>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="w-full lg:w-3/4">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-4">No products found</h2>
                <p className="text-gray-600">
                  Try adjusting your search or filter criteria to find what you're looking for.
                </p>
              </div>
            ) : (
              <>
                <p className="mb-6 text-gray-600">{filteredProducts.length} products found</p>
                <ProductGrid products={filteredProducts} />
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;