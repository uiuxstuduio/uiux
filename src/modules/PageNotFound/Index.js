import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/common/Header/Header';
import img404 from '../../assets/images/404.svg';
import { Link } from 'react-router-dom';

import './pageNotFound.scss';

const Index = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Header />
      
      <div className='wrapper-404'>
        <div className='container'>
          <div className='img-wrapper'>
            <img src={img404} alt="" />
          </div>
          <div className='info-wrapper'>
            <h5>oops! Page not found</h5>
            <p>Lorem Ipsum has been industry standard dummy ever since took a galley type and scrambled it to type.</p>
            <Link to="/" className='btn_wrapper'>
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      <div className="copyRight-wrapper">
        <div className='container'>
          <p>
            Copyright © 2022. Created with love by UIUXStudio.{' '}
            <Link href="/">Terms of Services</Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Index;
