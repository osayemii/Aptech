import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import FeaturedCategories from '../components/home/FeaturedCategories';
import FeaturedProducts from '../components/home/FeaturedProducts';
import NewArrivals from '../components/home/NewArrivals';
import Testimonials from '../components/home/Testimonials';
import PromoSection from '../components/home/PromoSection';

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
      <PromoSection />
      <NewArrivals />
      <Testimonials />
    </Layout>
  );
};

export default Home;