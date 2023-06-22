import React from 'react';
import { Link } from 'react-router-dom';

import rateItem from '../../../assets/images/icon/rate-item.svg';
import saleItem from '../../../assets/images/icon/sale-item.svg';
import arrow from '../../../assets/images/icon/right-arrow.svg';

import './discover.scss'

const Discover = ({ data }) => {
  return (
    <div className='discover_wrapper'>
        <div className='discover_block'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='discoverCard'>
                        <div className='textBlock'>
                            <h2>Discover best rated items</h2>
                            <Link to='/products/best_selling_products'>Browse now <img src={arrow} alt='arrow' /></Link>
                        </div>
                        <div className='imgBlock'>
                            <img src={rateItem} alt='Rated Items' />
                        </div>
                    </div>
                </div>
                <div className='col-md-6 mt-3 mt-md-0'>
                    <div className='discoverCard'>
                        <div className='textBlock'>
                            <h2>Discover best selling items</h2>
                            <Link to='/products/new_bestsellers'>Browse now <img src={arrow} alt='arrow' />   </Link>
                        </div>
                        <div className='imgBlock'>
                            <img src={saleItem} alt='Rated Items' />                      
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Discover;