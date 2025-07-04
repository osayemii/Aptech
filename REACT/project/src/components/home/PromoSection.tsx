import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, ShieldCheck, RotateCcw, Clock } from 'lucide-react';

const PromoSection: React.FC = () => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="flex items-start">
            <div className="bg-blue-500 p-3 rounded-lg mr-4">
              <Truck size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Free Shipping</h3>
              <p className="text-blue-100">On all orders over $50</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-blue-500 p-3 rounded-lg mr-4">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">2-Year Warranty</h3>
              <p className="text-blue-100">On all electronic products</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-blue-500 p-3 rounded-lg mr-4">
              <RotateCcw size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">30-Day Returns</h3>
              <p className="text-blue-100">Hassle-free return policy</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-blue-500 p-3 rounded-lg mr-4">
              <Clock size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">24/7 Support</h3>
              <p className="text-blue-100">Customer service excellence</p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 border-t border-blue-500 pt-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with the Latest Tech
            </h2>
            <p className="text-blue-100 mb-4 text-lg">
              Subscribe to our newsletter and be the first to know about new product launches, exclusive deals, and tech tips.
            </p>
          </div>

          <div className="lg:w-1/2">
            <form className="flex flex-col sm:flex-row gap-2 w-full">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-md bg-blue-500 text-white placeholder-blue-200 border border-blue-400 focus:outline-none focus:ring-2 focus:ring-white flex-grow"
                required
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-white text-blue-600 rounded-md hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              >
                Subscribe
              </button>
            </form>
            <p className="text-blue-200 text-sm mt-3">
              By subscribing, you agree to our <Link to="/privacy" className="underline">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;