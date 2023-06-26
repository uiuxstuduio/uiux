import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../../redux/reducers/authReducer.slice';
import './header.scss';
import logo from '../../../assets/images/logo.svg'
import cartIcon from '../../../assets/images/icon/cart.svg';
import profileIcon from '../../../assets/images/icon/profile-icon.png';
import tech1 from '../../../assets/images/technology/html.png';
import tech2 from '../../../assets/images/technology/woo.png';
import tech3 from '../../../assets/images/technology/wordpress.png';
import tech4 from '../../../assets/images/technology/shopify.png';
import tech5 from '../../../assets/images/technology/affiliate.png';
import tech6 from '../../../assets/images/technology/mobile-app.png';
import tech7 from '../../../assets/images/technology/social-media.png';
import tech8 from '../../../assets/images/technology/branding.png';

const Header = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logoutUser());
  };
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  return (
    <header>
      <nav className="navbar navbar-expand-xl aa">
        <div className="container">
          <div className="logo">
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="right_wrapper">
            <div className="navbar_block">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
              >
                <svg viewBox="0 0 64 48">
                  <path d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37"></path>
                  <path d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24"></path>
                  <path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37"></path>
                </svg>
              </button>
              <div
                className="offcanvas offcanvas-end"
                tabIndex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div className="offcanvas-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav tabActive navbar-nav-scroll">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item dropdown has-megamenu">
                      <Link
                        className="nav-link dropdown-toggle"
                        to="#"
                        id="navbarDropdown1"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Categories
                        <svg
                          width="17"
                          height="16"
                          viewBox="0 0 17 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.5931 5.66675L8.92643 10.3334L4.25977 5.66675"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                      <ul className="dropdown-menu megamenu" aria-labelledby="navbarDropdown1">
                        <div className="category_modal">
                          <div className="top_modal">
                            <div className="row">
                              <div className="col-xl-6 col-12">
                                <div className="col_megamenu">
                                  <ul className="tech_temp">
                                    <li>
                                      <div className="tech_img ht">
                                        <img src={tech1} alt="HTML Logo" />
                                      </div>
                                      <div className="head_title">
                                        <a href="/">HTML Templates</a>
                                        <p>
                                          It is a long established fact that a reader will be
                                          distracted by{' '}
                                        </p>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="tech_img woo">
                                        <img src={tech2} alt="WooCommerce Theme" />
                                      </div>
                                      <div className="head_title">
                                        <a href="/">Woocommerce Theme</a>
                                        <p>
                                          It is a long established fact that a reader will be
                                          distracted by{' '}
                                        </p>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-xl-6 col-12">
                                <div className="col_megamenu">
                                  <ul className="tech_temp">
                                    <li>
                                      <div className="tech_img wp">
                                        <img src={tech3} alt="WordPress Theme" />
                                      </div>
                                      <div className="head_title">
                                        <a href="/">Wordpress Theme</a>
                                        <p>
                                          It is a long established fact that a reader will be
                                          distracted by{' '}
                                        </p>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="tech_img sp">
                                        <img src={tech4} alt="Shopify Theme" />
                                      </div>
                                      <div className="head_title">
                                        <a href="/">Shopify theme</a>
                                        <p>
                                          It is a long established fact that a reader will be
                                          distracted by{' '}
                                        </p>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bottom_modal">
                            <div className="row">
                              <div className="col-xl-6 col-12">
                                <div className="col_megamenu">
                                  <ul className="prototypes">
                                    <li>
                                      <div className="tech_img">
                                        <img src={tech5} alt="Affliate Themes" />
                                      </div>
                                      <a href="/">Affiliate templates</a>
                                    </li>
                                    <li>
                                      <div className="tech_img">
                                        <img src={tech6} alt="Mobile" />
                                      </div>
                                      <a href="/">Mobile app prototype</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-xl-6 col-12">
                                <div className="col_megamenu">
                                  <ul className="prototypes">
                                    <li>
                                      <div className="tech_img">
                                        <img src={tech7} alt="Social Media" />
                                      </div>
                                      <a href="/">Social media post bundle</a>
                                    </li>
                                    <li>
                                      <div className="tech_img">
                                        <img src={tech8} alt="Brand Bundle" />
                                      </div>
                                      <a href="/">Full Branding bundle</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        Pricing
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="buttonBlock">
              {user.user_id ? (
                <>
                  <div className="profile_nav">
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        to="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img src={profileIcon} alt="User Icon" />
                        <span style={{ textTransform: 'capitalize' }}> {user.user_login} </span>
                        <svg
                          width="17"
                          height="16"
                          viewBox="0 0 17 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.5931 5.66675L8.92643 10.3334L4.25977 5.66675"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                          <Link className="dropdown-item" to="/profile">
                            Profile
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/settings">
                            Settings
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/downloads">
                            Downloads
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/favourites">
                            Favorites
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/collections">
                            Collections
                          </Link>
                        </li>
                        <li>
                          <button className="dropdown-item" to="/" onClick={logoutHandler}>
                            Log Out
                          </button>
                        </li>
                      </ul>
                    </li>
                  </div>
                </>
              ) : (
                <div className="d-none d-md-flex align-items-center btns">
                  <Link to="/login" className="btn_wrapper">
                    Login
                  </Link>
                  <Link to="/signup" className="btn_wrapper light">
                    Sign Up
                  </Link>
                </div>
              )}
              <Link to="/cart">
                <div className="cart_wrapper position-relative">
                  <img src={cartIcon} alt="Cart Icon" />
                  {cart.items.length !== 0 && <div className="notification"></div>}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
