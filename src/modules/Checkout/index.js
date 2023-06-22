import React from 'react';
import { Link } from 'react-router-dom';
import './checkout.scss';

import icon1 from '../../assets/images/product/product-icon/product-1.png';
import icon2 from '../../assets/images/product/product-icon/product-2.png';
import icon3 from '../../assets/images/product/product-icon/product-3.png';

const Checkout = () => {
  return (
    <section>
      <div className="title_block">
        <div className="container">
          <div className="heading">
            <h1>Checkout</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <form className="checkout-form">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="inner_wrapper">
                {/* Billing Details Start */}
                <div className="page_title">
                  <h2>Billing Details</h2>
                </div>
                <div className="inner_block">
                  <div className="row">
                    <div className="col-12 col-md-6 form-group">
                      <label className="form-label" htmlFor="">
                        First Name
                      </label>
                      <input
                        placeholder="Enter First Name"
                        type="text"
                        name="firstName"
                        className="form-control"
                      />
                    </div>
                    <div className="col-12 col-md-6 form-group">
                      <label className="form-label" htmlFor="">
                        Last Name
                      </label>
                      <input
                        placeholder="Enter Last Name"
                        type="text"
                        name="lastName"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col form-group">
                      <label className="form-label" htmlFor="">
                        Company
                      </label>
                      <input
                        placeholder="Enter Company Name"
                        type="text"
                        name="company"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6 form-group">
                      <label className="form-label" htmlFor="">
                        Phone
                      </label>
                      <input
                        placeholder="Enter Contact Number"
                        type="text"
                        name="phone"
                        className="form-control"
                      />
                    </div>
                    <div className="col-12 col-md-6 form-group">
                      <label className="form-label" htmlFor="">
                        Email
                      </label>
                      <input
                        placeholder="Enter Email"
                        type="text"
                        name="email"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col form-group">
                      <label className="form-label" htmlFor="">
                        Address Line 1
                      </label>
                      <input
                        placeholder="House Flat"
                        type="text"
                        name="address1"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col form-group">
                      <label className="form-label" htmlFor="">
                        Address Line 2
                      </label>
                      <input
                        placeholder="Street"
                        type="text"
                        name="address2"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6 form-group">
                      <label className="form-label" htmlFor="">
                        Country
                      </label>
                      <select name="country" id="country" className="form-select">
                        <option value="">State</option>
                        <option>India</option>
                        <option>USA</option>
                      </select>
                    </div>
                    <div className="col-12 col-md-6 form-group">
                      <label className="form-label" htmlFor="">
                        State / Province / Region
                      </label>
                      <select name="region" id="region" className="form-select">
                        <option value="">State</option>
                        <option>Gujarat</option>
                        <option>Delhi</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6 form-group">
                      <label className="form-label" htmlFor="">
                        City
                      </label>
                      <input
                        placeholder="Enter City"
                        type="text"
                        name="city"
                        className="form-control"
                      />
                    </div>
                    <div className="col-12 col-md-6 form-group">
                      <label className="form-label" htmlFor="">
                        Zip/Postal Code
                      </label>
                      <input
                        placeholder="Enter ZipCode"
                        type="text"
                        name="zipcode"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="page_title">
                  <h2>Payment Details</h2>
                </div>
                <div className="inner_block mb-4">
                  <div className="row">
                    <div className="col-12 col-md-6 form-group">
                      <label htmlFor="" className="form-label">
                        Name on Card
                      </label>
                      <input
                        placeholder="Name on Card"
                        type="text"
                        name="cardName"
                        id=""
                        className="form-control"
                      />
                    </div>
                    <div className="col-12 col-md-6 form-group">
                      <label htmlFor="" className="form-label">
                        Card Number
                      </label>
                      <input
                        placeholder="Enter Card Number"
                        type="text"
                        name="cardNumber"
                        id=""
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6 form-group">
                      <label htmlFor="" className="form-label">
                        CVV
                      </label>
                      <input
                        placeholder="Enter CVV"
                        type="text"
                        name="cvv"
                        id=""
                        className="form-control"
                      />
                    </div>
                    <div className="col-12 col-md-6 form-group">
                      <label htmlFor="" className="form-label">
                        Expiry Date
                      </label>
                      <input
                        placeholder="Expiry Date"
                        type="text"
                        name="expiryDate"
                        id=""
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                {/* Billing Details End */}
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="card p-4 order-card">
                <h4 className="fw-bold">Order Summary</h4>
                <div className="d-flex flex-column order-items my-4">
                  <div className="list-item">
                    <div className="left-block">
                      <div className="card_img">
                        <img src={icon1} alt="icon" />
                      </div>
                    </div>
                    <div className="right-block">
                      <p className='highlight'>NFTDCentral</p>
                      <p>License type: Free</p>
                      <p className='highlight'>$50</p>
                    </div>
                  </div>
                  <div className="list-item">
                    <div className="left-block">
                      <div className="card_img">
                        <img src={icon2} alt="icon" />
                      </div>
                    </div>
                    <div className="right-block">
                      <p className='highlight'>NFTDCentral</p>
                      <p>License type: Free</p>
                      <p className='highlight'>$50</p>
                    </div>
                  </div>
                  <div className="list-item">
                    <div className="left-block">
                      <div className="card_img">
                        <img src={icon3} alt="icon" />
                      </div>
                    </div>
                    <div className="right-block">
                      <p className='highlight'>NFTDCentral</p>
                      <p>License type: Free</p>
                      <p className='highlight'>$50</p>
                    </div>
                  </div>
                  
                </div>
                <div className="subTotal">
                  <span>Subtotal</span>
                  <span>$150</span>
                </div>
                <div className="grandTotal">
                  <span>Total</span>
                  <span>$150</span>
                </div>
                <Link className="btn_wrapper" to="/">
                  Place Order
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Checkout;
