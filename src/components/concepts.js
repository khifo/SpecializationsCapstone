import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FootballConcepts = () => {
  return (
    <div>
      <Header />
      <div className="concepts-container">
        <h1>Football Concepts</h1>
        <PassGame />
        <RunGame />
        <CoveragesOnDefense />
      </div>
      <Footer />
    </div>
  );
};

function PassGame() {
  return (
    <div>
      <h2>Pass Game</h2>
      <p>Here are some common passing concepts at all levels</p>
      {/* ... Add the rest of the content for PassGame */}
    </div>
  );
}

function RunGame() {
  return (
    <div>
      <h2>Run Game</h2>
      <p>Here are some common run concepts at all levels.</p>
      {/* ... Add the rest of the content for RunGame */}
    </div>
  );
}

function CoveragesOnDefense() {
  return (
    <div>
      <h2>Coverages on Defense</h2>
      <p>Football coverage is how a defense defends the pass. With the popularity of spread offense at all levels, it is important to know the coverages and how to scheme against it. The number in coverage indicates how many players defend deep.</p>
      {/* ... Add the rest of the content for CoveragesOnDefense */}
    </div>
  );
}

export default FootballConcepts;
