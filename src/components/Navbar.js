import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/schedule">Schedule</Link>
        </li>
        <li>
          <Link to="/concepts">Concepts</Link>
        </li>
        <li>
          <Link to="/registration">Registration</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
