import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

/* ALL IMAGES */
import logo from '../../../assets/images/logo.svg';
import facebook from '../../../assets/images/icon/facebook.svg';
import insta from '../../../assets/images/icon/insta.svg';
import google from '../../../assets/images/icon/google.svg';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer_techno_block">
          <div className="textBlock">
            <h2>Website Themes & Templates For All Platforms.</h2>
            <p>Once you've set up your wallet of choice, connect it to OpenSea by clicking</p>
            <Link href="/" className="btn_wrapper">
              Subscribe
            </Link>
          </div>
        </div>
      </div>
      <div className="footer_wrapper">
        <div className="container">
          <div className="footer_block">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
            <div className="icons">
              <Link href="/">
                <img src={facebook} alt="Logo" />
              </Link>
              <Link href="/">
                <img src={insta} alt="Logo" />
              </Link>
              <Link href="/">
                <img src={google} alt="Logo" />
              </Link>
            </div>
          </div>
          <div className="copyRight">
            <p>
              Copyright © 2022. Created with love by UIUXStudio.{' '}
              <Link href="/">Terms of Services</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;