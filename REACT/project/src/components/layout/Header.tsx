import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, User, Search, Menu, X } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

const Header: React.FC = () => {
  const { cartCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Change header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
    // Reset search query
    setSearchQuery('');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            LuxeStore
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-gray-800 hover:text-blue-600 transition-colors">
              Shop
            </Link>
            <Link to="/categories" className="text-gray-800 hover:text-blue-600 transition-colors">
              Categories
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Search, Cart, Wishlist, Profile */}
          <div className="flex items-center space-x-4">
            {/* Search Form */}
            <form onSubmit={handleSearch} className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-1.5">
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent border-none focus:outline-none text-sm w-32 lg:w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="ml-2 text-gray-500 hover:text-blue-600">
                <Search size={18} />
              </button>
            </form>

            {/* Wishlist */}
            <Link to="/wishlist" className="text-gray-700 hover:text-blue-600 transition-colors relative">
              <Heart size={22} />
            </Link>

            {/* Cart */}
            <Link to="/cart" className="text-gray-700 hover:text-blue-600 transition-colors relative">
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* User Profile */}
            <Link to="/account" className="text-gray-700 hover:text-blue-600 transition-colors">
              <User size={22} />
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md z-20">
            <div className="py-4 px-6 flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-800 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className="text-gray-800 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to="/categories" 
                className="text-gray-800 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Categories
              </Link>
              <Link 
                to="/about" 
                className="text-gray-800 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-800 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="flex items-center bg-gray-100 rounded-full px-4 py-2 mt-2">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="bg-transparent border-none focus:outline-none text-sm flex-1"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="ml-2 text-gray-500 hover:text-blue-600">
                  <Search size={18} />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;