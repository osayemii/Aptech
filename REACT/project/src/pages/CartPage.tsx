import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import Layout from '../components/layout/Layout';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import { useCart } from '../contexts/CartContext';

const CartPage: React.FC = () => {
  const { cart, cartCount, clearCart } = useCart();

  if (cartCount === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <div className="max-w-md mx-auto">
            <div className="mb-6 flex justify-center">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
                <ShoppingBag size={36} className="text-gray-400" />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="mb-8 text-gray-600">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link 
              to="/products" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-2">Shopping Cart</h1>
        <p className="text-gray-600 mb-8">{cartCount} {cartCount === 1 ? 'item' : 'items'} in your cart</p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <Link to="/products" className="text-blue-600 hover:text-blue-800 flex items-center">
                  <ArrowLeft size={16} className="mr-1" />
                  Continue Shopping
                </Link>
                <button 
                  className="text-red-600 hover:text-red-800"
                  onClick={() => clearCart()}
                >
                  Clear Cart
                </button>
              </div>

              <div className="border-t border-gray-200">
                {cart.map(item => (
                  <CartItem key={item.product.id} item={item} />
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3">
            <CartSummary />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;