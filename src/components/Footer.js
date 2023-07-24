import React from 'react';

const Footer = () => {
  return (
    <footer>
      {/* Contact information */}
      <div className="contact">
        <p>Email: contact@youthfootballprogram.com</p>
        <p>Phone: (555) 467-7890</p>
      </div>
      {/* Social media links */}
      <div className="social">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
      {/* Copyright */}
      <p>&copy; 2023 Youth Football Program. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
