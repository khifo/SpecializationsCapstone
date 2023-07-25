import React, { useState } from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import HighlightsSection from './HighlightsSection';
import Footer from './Footer';

const Home = () => {
  const [name] = useState('John Doe');
  const [age, setAge] = useState(25);
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div>
      <Header />
      <HeroSection name={name} age={age} setAge={setAge} />
      <HighlightsSection
        isSubscribed={isSubscribed}
        setIsSubscribed={setIsSubscribed}
      />
      <Footer />
    </div>
  );
};

export default Home;
