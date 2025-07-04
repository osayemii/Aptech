import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    originalPrice: 349.99,
    description: 'Experience unparalleled sound quality with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium materials for maximum comfort.',
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Premium memory foam ear cushions',
      'High-resolution audio certified',
      'Built-in voice assistant',
      'Foldable design for easy transport'
    ],
    images: [
      'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3394665/pexels-photo-3394665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'audio',
    rating: 4.8,
    reviews: 243,
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 199.99,
    originalPrice: 249.99,
    description: 'Track your fitness goals with precision using our advanced smart fitness watch. Monitor heart rate, sleep patterns, and various workout metrics with this stylish and durable wearable.',
    features: [
      'Heart rate monitoring',
      'Sleep tracking',
      '20+ workout modes',
      'Water resistant up to 50m',
      '7-day battery life',
      'GPS tracking'
    ],
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'wearables',
    rating: 4.6,
    reviews: 187,
    inStock: true,
    new: true
  },
  {
    id: '3',
    name: 'Ultra-Slim Laptop',
    price: 1299.99,
    description: 'Powerful performance meets sleek design in our ultra-slim laptop. Featuring the latest processor, ample storage, and a stunning display, all in a lightweight aluminum chassis.',
    features: [
      'Latest generation processor',
      '16GB RAM, 512GB SSD',
      '14-inch 4K display',
      'All-day battery life',
      'Backlit keyboard',
      'Ultra-thin aluminum design'
    ],
    images: [
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'computers',
    rating: 4.9,
    reviews: 128,
    inStock: true,
    featured: true
  },
  {
    id: '4',
    name: 'Professional Camera Bundle',
    price: 899.99,
    originalPrice: 999.99,
    description: 'Capture stunning photos and videos with our professional camera bundle. Includes a high-resolution DSLR camera, multiple lenses, and essential accessories for photographers of all levels.',
    features: [
      '24.2MP full-frame sensor',
      '4K video recording',
      'Includes 18-55mm and 70-300mm lenses',
      'Carrying case and tripod included',
      'Advanced autofocus system',
      'Weather-sealed body'
    ],
    images: [
      'https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'photography',
    rating: 4.7,
    reviews: 95,
    inStock: true
  },
  {
    id: '5',
    name: 'Smart Home Hub',
    price: 149.99,
    description: 'Control your entire smart home ecosystem with our intuitive smart home hub. Compatible with major smart home devices and featuring voice control for seamless integration.',
    features: [
      'Compatible with 100+ smart devices',
      'Voice control capabilities',
      'Energy usage monitoring',
      'Customizable automation',
      'Intuitive mobile app',
      'Regular software updates'
    ],
    images: [
      'https://images.pexels.com/photos/1034812/pexels-photo-1034812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3040765/pexels-photo-3040765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'smart home',
    rating: 4.5,
    reviews: 72,
    inStock: true,
    new: true
  },
  {
    id: '6',
    name: 'Wireless Earbuds',
    price: 129.99,
    originalPrice: 159.99,
    description: 'Immerse yourself in crystal-clear audio with our compact wireless earbuds. Featuring noise isolation, long battery life, and a comfortable fit for all-day wear.',
    features: [
      'True wireless design',
      'Active noise cancellation',
      '24-hour total battery life with case',
      'Water and sweat resistant',
      'Touch controls',
      'Premium sound drivers'
    ],
    images: [
      'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/7709086/pexels-photo-7709086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'audio',
    rating: 4.4,
    reviews: 156,
    inStock: true
  }
];