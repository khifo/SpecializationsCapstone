import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo">Youth Football Program</div>
      
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Registration">Registration</Link></li>
          <li><Link to="/Schedule">Schedule</Link></li>
          <li><Link to="/Concepts">Concepts</Link></li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;
