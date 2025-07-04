import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';

const CartSummary: React.FC = () => {
  const { cartTotal } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const shippingEstimate = cartTotal > 50 ? 0 : 5.99;
  const taxEstimate = cartTotal * 0.08; // 8% tax
  const orderTotal = cartTotal + shippingEstimate + taxEstimate;

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h2 className="text-xl font-bold mb-6">Order Summary</h2>
      
      <div className="space-y-4 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">{formatPrice(cartTotal)}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping estimate</span>
          <span className="font-medium">
            {shippingEstimate === 0 ? 'Free' : formatPrice(shippingEstimate)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Tax estimate</span>
          <span className="font-medium">{formatPrice(taxEstimate)}</span>
        </div>
        
        <div className="border-t border-gray-200 pt-4 flex justify-between">
          <span className="font-bold">Order total</span>
          <span className="font-bold">{formatPrice(orderTotal)}</span>
        </div>
      </div>
      
      <Link 
        to="/checkout"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md transition-colors duration-300 flex items-center justify-center font-medium"
      >
        Proceed to Checkout
      </Link>
      
      <div className="mt-6">
        <h3 className="font-medium mb-2">We Accept</h3>
        <div className="flex gap-2">
          <span className="bg-white px-3 py-1 rounded border border-gray-200 text-sm text-gray-700">Visa</span>
          <span className="bg-white px-3 py-1 rounded border border-gray-200 text-sm text-gray-700">Mastercard</span>
          <span className="bg-white px-3 py-1 rounded border border-gray-200 text-sm text-gray-700">PayPal</span>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;