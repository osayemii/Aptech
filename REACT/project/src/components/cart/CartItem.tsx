import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';
import { useCart } from '../../contexts/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity > 0) {
      updateQuantity(product.id, newQuantity);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 py-4 border-b border-gray-200">
      {/* Product Image */}
      <Link to={`/product/${product.id}`} className="w-24 h-24 flex-shrink-0">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-cover rounded-md"
        />
      </Link>

      {/* Product Info */}
      <div className="flex-grow">
        <Link 
          to={`/product/${product.id}`} 
          className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors"
        >
          {product.name}
        </Link>
        <p className="text-gray-500 text-sm">Category: {product.category}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center border border-gray-300 rounded-md">
        <button 
          className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
          onClick={() => handleQuantityChange(quantity - 1)}
          aria-label="Decrease quantity"
        >
          <Minus size={16} />
        </button>
        <span className="px-3 py-1 border-x border-gray-300">{quantity}</span>
        <button 
          className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
          onClick={() => handleQuantityChange(quantity + 1)}
          aria-label="Increase quantity"
        >
          <Plus size={16} />
        </button>
      </div>

      {/* Price */}
      <div className="text-center w-24">
        <span className="font-medium">{formatPrice(product.price * quantity)}</span>
      </div>

      {/* Remove Button */}
      <button 
        className="text-gray-400 hover:text-red-600 transition-colors p-2"
        onClick={() => removeFromCart(product.id)}
        aria-label="Remove item"
      >
        <Trash size={20} />
      </button>
    </div>
  );
};

export default CartItem;