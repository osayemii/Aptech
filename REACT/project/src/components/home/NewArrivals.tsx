import React from 'react';
import { products } from '../../data/products';
import ProductCard from '../products/ProductCard';

const NewArrivals: React.FC = () => {
  // Filter new products
  const newProducts = products.filter(product => product.new);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">New Arrivals</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Be the first to discover our latest products and stay ahead of the curve with cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;