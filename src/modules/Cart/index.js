import React from 'react';

/* CSS */
import './cart.scss';

/* Images */
import starYellow from '../../assets/images/icon/fill-star.svg';
import services1 from '../../assets/images/services/services-1.svg';
import services2 from '../../assets/images/services/services-2.svg';
import close from '../../assets/images/icon/close.svg';
import unlock from '../../assets/images/icon/unlock.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart } from '../../redux/reducers/cartReducer.slice';

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart);
  console.log('cartItems',cartItems)
  const subTotal = cartItems.items.reduce((prev, curr) => prev + Number(curr.sale_price), 0);
  const extraPrices = 0;
  const total = subTotal + extraPrices;

  const removeCartItem = (key) =>{
    const payload = {
      key: key,
      cart_key: cartItems?.sessionKey
    };
    dispatch(removeItemFromCart(payload))
  }  


  return (
    <>
      <section>
        <div className="title_block">
          <div className="container">
            <div className="heading">
              <h1>My Cart</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-8">
              <div className="inner_wrapper mb-5">
                <div className="page_title">
                  <h2>Shopping Cart</h2>
                </div>
                <div className="inner_block">
                  <div className="card_block">
                    {cartItems?.items.length ? (
                      <>
                        {cartItems?.items.map((item, index) => (
                          <div className="single_card" key={index}>
                            <div className="card_view">
                              <div className="left_block">
                                <div className="card_img">
                                  <img src={item.theme_feature_img[0]} alt="icon" />
                                </div>
                                <div className="card_details">
                                  <h2><Link to={`/product-details/${item?.theme_id}`}>{item.theme_name}</Link></h2>
                                  <p>License type: {item.license_type}</p>
                                  <div className="rating">
                                    <img src={starYellow} alt="icon" />
                                    <img src={starYellow} alt="icon" />
                                    <img src={starYellow} alt="icon" />
                                    <img src={starYellow} alt="icon" />
                                    <img src={starYellow} alt="icon" />
                                  </div>
                                </div>
                              </div>
                              <div className="right_block">
                                <button className="closeIcon" type='button' onClick={()=>removeCartItem(item?.key)}>
                                  <img src={close} alt="Close icon" />
                                </button>
                                <div className="price">
                                  <h2 className="old">${item.regular_price}</h2>
                                  <h2 className="new">${item.sale_price}</h2>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </>
                    ) : (
                      <div className="message-box text-center">
                        <h1 className="fw-bold opacity-50">Your cart is empty!</h1>
                        <h6 className="mt-3 mb-3 lg:mb-5 opacity-50">
                          You must add some items in order to checkout. You can find out lots of
                          interesting products in collections.
                        </h6>
                        <button className="btn_wrapper light">Browse Collections</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="inner_wrapper cartInner">
                <div className="page_title">
                  <h2>Customization Services</h2>
                </div>
                <div className="inner_block">
                  <div className="card_block">
                    <div className="single_card">
                      <div className="left_block">
                        <div className="card_img">
                          <img src={services1} alt="icon" />
                        </div>
                        <div className="card_details">
                          <h2>
                            Custom Service, Theme Customization, Banner Design, Google sitemap | One
                            Day Services
                          </h2>
                          <p>Provide by UIUXSTUDIO</p>
                        </div>
                      </div>
                      <div className="right_block">
                        <span className="priceBlock">$50</span>
                        <Link className="btn_wrapper" to="/">
                          Add to Cart
                        </Link>
                      </div>
                    </div>
                    <div className="single_card">
                      <div className="left_block">
                        <div className="card_img">
                          <img src={services2} alt="icon" />
                        </div>
                        <div className="card_details">
                          <h2>Page Speed Optimization Service</h2>
                          <p>Provide by UIUXSTUDIO</p>
                        </div>
                      </div>
                      <div className="right_block">
                        <span className="priceBlock">$249</span>
                        <Link className="btn_wrapper" to="/">
                          Add to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-7">
              <div className="orderDetails">
                <h2>Your order</h2>
                <div className="subTotal">
                  <span>Subtotal</span>
                  <span>${subTotal}</span>
                </div>
                <div className="grandTotal">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
                <div className="couponBlock">
                  Have a coupon? <Link to={'/'}>Click here to enter your code </Link>
                </div>
                <Link className="btn_wrapper" to="/">
                  Checkout
                </Link>
                <div className="secure">
                  <img src={unlock} alt="icon" />
                  <span>Secure checkout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
