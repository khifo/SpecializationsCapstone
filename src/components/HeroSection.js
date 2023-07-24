import React from 'react';

const HeroSection = ({ name, age, setAge }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to our Youth Football Program</h1>
        <p>Join our team and be part of something amazing!</p>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <button onClick={() => setAge(age + 1)}>Increase Age</button>
      </div>
    </section>
  );
};

export default HeroSection;

