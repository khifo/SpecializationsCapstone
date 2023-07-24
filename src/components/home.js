import React from 'react';
import Header from './header';
import HeroSection from '../components/HeroSection';
import HighlightsSection from '../components/HighlightsSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <HighlightsSection />
      <Footer />
    </div>
  );
};

export default Home;

