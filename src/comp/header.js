import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  const [state, setState] = useState(false);
  const [language, setLanguage] = useState('en');

  const openMenu = () => {
    setState(!state);
  };

  const switchToEnglish = () => {
    setLanguage('en');
  };

  const switchToArabic = () => {
    setLanguage('ar');
  };

  return (
    <>
      <header className="header">
        <div className="name">
          <img
            className="logo-img"
            src="images/Basem Motors (2).png"
            alt="web-logo"
          />
        </div>
        <div className="language-toggle">
          <button id="en-btn" onClick={switchToEnglish}>
            English
          </button>
          <button id="ar-btn" onClick={switchToArabic}>
            العربية
          </button>
        </div>
        <ul className="home">
          <li>
            <Link className="a" to="/">
              {language === 'en' ? 'Home' : 'البيت'}
            </Link>
          </li>
          <li>
            <Link className="a" to="/work">
              {language === 'en' ? 'Work' : 'اعمالي'}
            </Link>
          </li>
          <li>
            <Link className="a" to="/contact">
              {language === 'en' ? 'Contact' : 'تواصل معي'}
            </Link>
          </li>
        </ul>
      </header>

      <input type="checkbox" id="menu-toggle" checked={state} onChange={openMenu} />
      <label htmlFor="menu-toggle" className="menu-btn">
        <i className="fas fa-bars" />
      </label>
      <div className={`menu-wrapper ${state ? 'open' : ''}`}>
        <label htmlFor="menu-toggle" className="close-btn" onClick={openMenu}>
          <i className="fas fa-times" />
        </label>
        <ul>
          <li>
            <Link className="hover" to="/" data-en="Home" data-ar="البيت">
              {language === 'en' ? 'Home' : 'البيت'}
            </Link>
          </li>
          <li>
            <Link className="hover" to="/work" data-en="Work" data-ar="اعمالي">
              {language === 'en' ? 'Work' : 'اعمالي'}
            </Link>
          </li>
          <li>
            <Link className="hover" to="/contact" data-en="Contact" data-ar="تواصل معي">
              {language === 'en' ? 'Contact' : 'تواصل معي'}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
