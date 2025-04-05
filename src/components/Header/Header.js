import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', text: 'Home' },
    { path: '/about', text: 'About' },
    { path: '/experience', text: 'Experience' },
    { path: '/contact', text: 'Contact' }
  ];

  return (
    <header className="header">
      <div className="container header__container">
        <Link to="/" className="header__logo">
          <h3>Osman Demir</h3>
        </Link>

        <nav className={`header__nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="header__nav-list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`header__nav-link ${
                    location.pathname === link.path ? 'active' : ''
                  }`}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`header__menu-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header; 