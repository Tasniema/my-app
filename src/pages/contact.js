



import React from 'react';
import Header from '../comp/header';
import Footer from '../comp/footer';
import ContactContent from '../comp/contactContent';

const Contact = () => {
  return (
    <>

       <Header/>
  <input type="checkbox" id="menu-toggle" />
  <label htmlFor="menu-toggle" className="menu-btn">
    <i className="fas fa-bars" />
  </label>
  <div className="menu-wrapper">
    <label htmlFor="menu-toggle" className="close-btn">
      <i className="fas fa-times" />
    </label>
    <ul>
      <li>
        <a className="hover" href="#home">
          Home
        </a>
      </li>
      <li>
        <a className="hover" href="#work">
          Work
        </a>
      </li>
      <li>
        <a className="hover" href="#contact">
          Contact
        </a>
      </li>
    </ul>
  </div>

<ContactContent/>


  <Footer/>
    </>
  );
}

export default Contact;
