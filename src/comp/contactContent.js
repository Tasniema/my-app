
import React from 'react';
import './contactContent.css';
import ReactPlayer from 'react-player'

const ContactContent = () => {


  return (
    <div className='parent'>
      <section className="contact-section">
        <div className="contact-container">
          <h1 data-en="You Can Contact With Me By :" data-ar="يمكنك التواصل معي عن طريق : ">
            You Can Contact With Me By :
          </h1>
         <div className='contact-list'>
           <h3 data-en="First Number :" data-ar="  الرقم الاول">
             First Number : <button className="butn">+20 102 642 3492</button>
           </h3>
           <h3 data-en="First Number :" data-ar="  الرقم الاول">
             Second Number : <button className="butn">+20 127 685 1378</button>
           </h3>
           <h3>
             Email : <button className="butn">basem.mohamed.</button>
           </h3>
           <h3>
             Facebook : <button className="butn">
               <a href="https://web.facebook.com/basem.tarek.169">Basem Tarek</a>
             </button>
           </h3>
           <h3>
             Instagram : <button className="butn">
               <a href="https://www.instagram.com/basem_tarek000/">Basem Tarek</a>
             </button>
           </h3>
         </div>
        </div>
        <div className="vedio-adress">
          <h1>My Address : </h1>
          <h5>Port Said, Al-Sawahel Street and Abu Al-Hassan.</h5>
          <div className="video-container">
            <ReactPlayer url='https://youtu.be/M1SfjCPxM8g'  />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactContent;
