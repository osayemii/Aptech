import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[90vh] max-h-[800px] overflow-hidden bg-gray-900 text-white">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          filter: 'brightness(0.6)'
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="flex flex-col justify-center h-full max-w-2xl">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-600 text-sm font-medium mb-4">
              New Collection 2025
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Discover Premium Tech For Modern Living
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              Explore our curated selection of high-quality electronics, designed to enhance your lifestyle with innovation and style.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium"
              >
                Shop Now <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link
                to="/categories"
                className="inline-flex items-center px-8 py-3 bg-transparent border border-white text-white rounded-md hover:bg-white hover:text-gray-900 transition-colors duration-300 font-medium"
              >
                Explore Categories
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-12 right-12 w-24 h-24 border-4 border-blue-500 opacity-50 hidden md:block"></div>
      <div className="absolute top-24 right-24 w-16 h-16 border-4 border-teal-500 opacity-50 hidden md:block"></div>
    </section>
  );
};

export default Hero;