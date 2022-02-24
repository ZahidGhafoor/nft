import React from 'react';
import "./Contact.scss"

import phone from "../../Assets/phone.png"
import mail from "../../Assets/mail.png"
import location from "../../Assets/location.png"

const Contact = (props) => {
  return(
      <div ref={props.contacts} className="contact__container">
          <div className="heading">Contact</div>
          <div className="para">Share your idea with us and let's get started right now!</div>
         <div className="bottom">
         <div className="left">
              <div className="phone">
                  <div className="img">
                  <img src={phone} alt="" className="icon" />
                  </div>
                  <div className="right__text">
                  <div className="text">Phone</div>
                  <div className="number">+92300 4050673</div>
                  <div className="number">+92313 7565900</div>
                  </div>
              </div>
              <div className="phone">
                  <div className="img">
                  <img src={mail} alt="" className="icon" />
                  </div>
                  <div className="right__text">
                  <div className="text">Email</div>
                  <div className="number">info@zahid.com</div>
                  <div className="number">support@zahid.com</div>
                  </div>
              </div>
              <div className="phone">
                  <div className="img">
                  <img src={location} alt="" className="icon" />
                  </div>
                  <div className="right__text">
                  <div className="text">Location</div>
                  <div className="number">221 D, PIA Society,</div>
                  <div className="number">Lahore, 54000</div>
                  </div>
              </div>
          </div>
          <div className="right">
              <div className="heading">
                  I'm always open to discussing product <br /> <span>design work or partnerships.</span>
              </div>
              <div className="form">
                  <div className="name">
                      <input type="text" className="name__input" placeholder='Name *' />
                  </div>
                  <div className="name">
                      <input type="email" className="name__input" placeholder='Email *' />
                  </div>
                  <div className="name">
                      <input type="text" className="name__input" placeholder='Message *' />
                  </div>
              </div>

              <button onClick={()=>alert("Thanks for submiting a query we 'll contant you soon")} className="btn">Submit</button>

          </div>
         </div>
      </div>
  )
};

export default Contact;
