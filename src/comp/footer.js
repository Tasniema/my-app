

import React  from 'react';
import './footer.css';

const Footer = () => {
  
  return (
    <div div className='myFooter'>
       <footer>
    <div className="footer">
      <div className="res-set">
        <span
          className="work"
          data-en="Let's Work Together"
          data-ar="لنعمل معًا"
        >
          Let's Work Together
        </span>
        <img src="images/icons8-repair-100.png" alt="" className="repair" />
      </div>
      <div className="call-me">
        <div>
          <img src="images/icons8-phone-60.png" alt="" className="phone" />
        </div>
        <div>
          <span className="name" data-en="Call Me:" data-ar="اتصل بي:">
            Call Me:
          </span>
        </div>
        <div className="container">
          <div className="center">
            <button className="btn">
              <svg
                width="180px"
                height="60px"
                viewBox="0 0 180 60"
                className="border"
              >
                <polyline
                  points="179,1 179,59 1,59 1,1 179,1"
                  className="bg-line"
                />
                <polyline
                  points="179,1 179,59 1,59 1,1 179,1"
                  className="hl-line"
                />
              </svg>
              <span>0127 685 1378</span>
            </button>
          </div>
        </div>
      </div>
      <div className="last">
        <p data-en="Designed by Tasneem Salim ♥" data-ar="تصميم تسنيم سليم ♥">
          Designed by Tasneem Salim ♥
        </p>
        <div className="social">
          <a href="https://web.facebook.com/basem.tarek.169" title="_blank">
            <img src="images/icons8-facebook-50.png" alt="" className="icon" />
          </a>
          <a href="https://www.instagram.com/basem_tarek000/" title="_blank">
            <img src="images/icons8-instagram-50.png" alt="" className="icon" />
          </a>
          <a href="" title="_blank">
            <img src="images/icons8-gmail-50.png" alt="" className="icon" />
          </a>
        </div>
      </div>
    </div>
  </footer>
    </div>
  );
}

export default Footer;
