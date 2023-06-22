import React from 'react';
import { motion } from 'framer-motion';
import callIcon from '../../assets/images/contactus/call.svg';
import mailIcon from '../../assets/images/contactus/mail.svg';
import pinIcon from '../../assets/images/contactus/pin.svg';

import './contact.scss';

const Contact = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="contact-banner">
        <h1 className="fw-bold">How can we help you?</h1>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          unknown took a galley of type and scrambled it to make a type It has survived not only
          centuries
        </p>
      </div>
      <div className="contact-container container">
        <div className="row">
          <div className="first-col col-12 col-md-6">
            <h4 className="fw-bold">Contact Information</h4>
            <p className="mt-2 mb-5">
              Lorem Ipsum has been the industry's standard dummy text ever since.
            </p>
            <ul className="mt-4 d-flex">
              <li className="d-flex align-items-center">
                <div className="img_wrapper">
                  <img src={callIcon} alt="Call Icon" />
                </div>
                <div className="details d-flex flex-column">
                  <p>Phone</p>
                  <p>+91 9835328425</p>
                </div>
              </li>
              <li className="d-flex align-items-center">
                <div className="img_wrapper">
                  <img src={mailIcon} alt="Mail Icon" />
                </div>
                <div className="details d-flex flex-column">
                  <p>E-mail</p>
                  <p>uiuxstudio@email.com</p>
                </div>
              </li>
              <li className="d-flex align-items-center">
                <div className="img_wrapper">
                  <img src={pinIcon} alt="Pin Icon" />
                </div>
                <div className="details d-flex flex-column">
                  <p>Address</p>
                  <p>132, S. Manilla, California</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="second-col col-12 col-md-6 mt-5 mt-md-0">
            <h4 className="fw-bold mb-2">Get In Touch</h4>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="d-flex flex-column">
                <input
                  type="text"
                  name="email"
                  className="form-control user-input"
                  placeholder="Email"
                />
                <input
                  type="text"
                  name="subject"
                  className="form-control user-input"
                  placeholder="Subject"
                />
                <select className="form-select user-input" data-style="btn-dark" defaultValue="">
                  <option value="" hidden>
                    Select Query Category
                  </option>
                  <option>Product Troubleshooting</option>
                  <option>Account Inquiry/Support</option>
                </select>
                <textarea
                  name="message"
                  className="form-control user-input"
                  placeholder="Message"
                ></textarea>
              </div>
              <button className="btn_wrapper" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
