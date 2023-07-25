import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import HighlightsSection from '../components/HighlightsSection';
import Footer from '../components/Footer';

function Home () {
  const [name, setName] = useState('John Doe');
  const [age, setAge] = useState(25);
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div>
      <Header />
      <HeroSection name={name} setName={setName} age={age} setAge={setAge} />
      <HighlightsSection
        isSubscribed={isSubscribed}
        setIsSubscribed={setIsSubscribed}
      />
      <Footer />
    </div>
  );
};

export default Home;
