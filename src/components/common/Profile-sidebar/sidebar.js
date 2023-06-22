import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.svg';
import sideLogo from '../../../assets/images/side-logo.png';

/* CSS */
import './sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar_wrapper">
      <div className="side_logo">
        <img src={sideLogo} alt="Logo" />
      </div>
      <div className="side_details">
        <div className="logo_name">
          <img src={logo} alt="Logo" />
        </div>
        <p>Get 35% Discount</p>
        <h2>
          Millions of Creative Assets.
          <span>Unlimited</span>
          Downloads.
        </h2>
      </div>
      <div className="side_bottom">
        <h2 className="price">$39/m</h2>
        <Link className="btn_wrapper" to="/">
          Start Now
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
