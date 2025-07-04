import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  return (
    <div className="group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
          {/* Product Image */}
          <div className="relative overflow-hidden aspect-square">
            <img 
              src={product.images[0]} 
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {product.new && (
                <span className="bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                  NEW
                </span>
              )}
              {product.originalPrice && (
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                  SALE
                </span>
              )}
            </div>
            
            {/* Quick Actions */}
            <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                className="bg-white text-gray-700 hover:text-blue-600 p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                aria-label="Add to wishlist"
              >
                <Heart size={18} />
              </button>
            </div>
          </div>
          
          {/* Product Info */}
          <div className="p-4">
            <div className="mb-1 flex items-center">
              <div className="flex text-yellow-400 mr-1">
                <Star size={14} className="fill-yellow-400" />
              </div>
              <span className="text-sm text-gray-600 mr-1">{product.rating}</span>
              <span className="text-sm text-gray-400">({product.reviews})</span>
            </div>
            
            <h3 className="font-semibold text-lg mb-1 text-gray-800">{product.name}</h3>
            
            <div className="flex items-baseline mb-3">
              <span className="font-bold text-lg text-gray-900 mr-2">
                {formatPrice(product.price)}
              </span>
              
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            
            {/* Add to Cart Button */}
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
              onClick={handleAddToCart}
            >
              <ShoppingCart size={18} className="mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;