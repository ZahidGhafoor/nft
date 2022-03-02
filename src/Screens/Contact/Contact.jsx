import React from 'react';
import "./Contact.scss"


import phone from "../../Assets/phone.png"
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Contact = (props) => {
    return (
        <>
        <div ref={props.contacts} className="contact__container">
            <div className="heading">Contact</div>
            <div className="para">Share your idea with us and let's get started right now!</div>
            <div className="upper">
            <div className="phone">
                  <div className="img">
                  <EmailIcon className="icon" />
                  </div>
                  <div className="right__text">
                  <div className="text">Email</div>
                  <div className="number">info@startsign.com</div>
                  <div className="number">support@startsign.com</div>
                  </div>
              </div>
              <div className="phone">
                  <div className="img">
                  <LocationOnIcon className="icon" />
                  </div>
                  <div className="right__text">
                  <div className="text">Location</div>
                  <div className="number">221 D, PIA Society,</div>
                  <div className="number">USA, 54000</div>
                  </div>
              </div>
            </div>
            <div className="bottom">

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

                    <button onClick={() => alert("Thanks for submiting a query we 'll contant you soon")} className="btn">Submit</button>

                </div>
                <div className="left">
                    <div style={{ height: "78vh", boxShadow: "0 0 16px 0 #b12525" }} 
      className="google-map-code">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3416.8083639023066!2d74.4158532154682!3d31.087257175509794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919b9e4c0b469e5%3A0xe8e1bd8667a7f333!2sShakir%20madical%20store!5e0!3m2!1sen!2sin!4v1644147325324!5m2!1sen!2sin" width="100%" height="100%" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>
            </div>

       
        </div>
        
        </>
    )
};

export default Contact;
