import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Heart, Star, Truck, Shield, ArrowLeft } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-8 text-gray-600">The product you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/products" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Products
          </Link>
        </div>
      </Layout>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm mb-8 text-gray-600">
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-blue-600 transition-colors">Products</Link>
          <span className="mx-2">/</span>
          <Link to={`/category/${product.category}`} className="hover:text-blue-600 transition-colors capitalize">
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Product Images */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-square mb-4 bg-white rounded-lg overflow-hidden">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-contain"
              />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.new && (
                  <span className="bg-teal-500 text-white px-3 py-1 rounded-md text-sm font-bold">
                    NEW
                  </span>
                )}
                {product.originalPrice && (
                  <span className="bg-red-500 text-white px-3 py-1 rounded-md text-sm font-bold">
                    SALE
                  </span>
                )}
              </div>
            </div>
            
            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-5 gap-2">
                {product.images.map((image, index) => (
                  <button 
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-md overflow-hidden border-2 ${
                      selectedImage === index ? 'border-blue-600' : 'border-transparent'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} - view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={i < Math.floor(product.rating) ? 'fill-yellow-400' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="text-gray-600">{product.rating} ({product.reviews} reviews)</span>
            </div>
            
            {/* Price */}
            <div className="flex items-baseline mb-6">
              <span className="text-3xl font-bold text-gray-900 mr-3">
                {formatPrice(product.price)}
              </span>
              
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            
            {/* Description */}
            <p className="text-gray-700 mb-6">
              {product.description}
            </p>
            
            {/* Features */}
            <div className="mb-8">
              <h3 className="font-semibold mb-3">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Add to Cart */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 rounded-md w-32">
                  <button 
                    className="px-3 py-2 text-gray-600 hover:text-blue-600"
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-full text-center border-none focus:outline-none py-2"
                  />
                  <button 
                    className="px-3 py-2 text-gray-600 hover:text-blue-600"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
                
                <div className="flex-grow">
                  <button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md transition-colors duration-300 flex items-center justify-center font-medium"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart size={20} className="mr-2" />
                    Add to Cart
                  </button>
                </div>
                
                <button
                  className="border border-gray-300 hover:border-red-500 text-gray-700 hover:text-red-500 p-3 rounded-md transition-colors duration-300"
                  aria-label="Add to wishlist"
                >
                  <Heart size={20} />
                </button>
              </div>
              
              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-center text-gray-600 mb-4">
                  <Truck size={20} className="mr-3 text-blue-600" />
                  <span>Free shipping on orders over $50</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Shield size={20} className="mr-3 text-blue-600" />
                  <span>2-year warranty on all products</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;