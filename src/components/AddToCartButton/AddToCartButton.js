import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../services/cart.service';
import { hash } from '../../utils/hash';
import { getCart, setCartSession } from '../../redux/reducers/cartReducer.slice';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import cartIcon from '../../assets/images/icon/cart.svg';

const AddToCartButton = ({ productid }) => {
  // const [cartLoading, setCartLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const pathnameArray = location.pathname.split('/').filter(Boolean);
  const currentPath = pathnameArray[0];
  console.log('location', currentPath)
  const cartData = useSelector((state) => state.cart);
  const items = cartData.items.map((item) => item.theme_id);
  // console.log('items', items);
  console.log('cartData', cartData);

  const [cartLoading, setCartLoading] = useState(false);
  const inCart = items.includes(productid);

  const addToCartHandler = async () => {
    setCartLoading(true);
    const needGenerate = !cartData.expiry || cartData.expiry < Date.now();
    let sessionKey, expiry;
    if (!needGenerate) {
      expiry = cartData.expiry;
      sessionKey = cartData.sessionKey;
    } else {
      expiry = Date.now() + 60 * 60 * 24 * 1000;
      sessionKey = hash();
      dispatch(setCartSession({ sessionKey, expiry }));
    }
    const payload = {
      product_id: productid,
      session_key: sessionKey,
    };
    const addToCartRes = await addToCart(payload);

    if (addToCartRes.status === 200) {
      dispatch(getCart({ cart_key: sessionKey }));
    }
    setCartLoading(false);
  };

  return (
    <>


      {inCart ? (
        <>
          <button className="btn_wrapper light" onClick={() => navigate('/cart')}>
            View In Cart
          </button>
          <Link to={`#`} className='cartBtn incart' onClick={() => navigate('/cart')}>
            <img src={cartIcon} alt="Card Images" />
          </Link>
        </>
      ) : (
        <>
          {cartLoading ? (
            <>
              <button
                className="btn_wrapper light"
                style={{
                  backgroundColor: 'transparent',
                  color: 'white',
                  border: '1px solid white'
                }}
              >
                Loading
              </button>
              <Link to={`#`} className='cartBtn'>
              Loading
              </Link>
            </>
          ) : (
            <>
              <button className="btn_wrapper light" onClick={addToCartHandler}>
                Add to cart
              </button>
              <Link to={`#`} className='cartBtn' onClick={addToCartHandler}>
                <img src={cartIcon} alt="Card Images" />
              </Link>
            </>
          )}
        </>
      )}
    </>
    // <button className="btn_wrapper light" onClick={addToCartHandler}>
    //    Add to cart
    //  </button>
    // <button className="btn_wrapper light" onClick={addToCartHandler} disabled={cartLoading}>
    //   {cartLoading ? 'Adding to cart...' : 'Add to cart'}
    // </button>
  );
};

export default AddToCartButton;