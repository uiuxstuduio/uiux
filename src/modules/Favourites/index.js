import React, { useState } from 'react';
import ProfileSettings from '../Profile-settings/index';
import Sidebar from '../../components/common/Profile-sidebar/sidebar';
import { motion } from 'framer-motion';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { Favourite_data } from '../../components/Data/Data';

import list from '../../assets/images/icon/list-view.svg';
import box from '../../assets/images/icon/box-view.svg';
import starYellow from '../../assets/images/icon/fill-star.svg';

const Favourites = () => {
  //React select
  const options = [
    { value: 'Recently listed', label: 'Recently listed' },
    { value: 'Recently created', label: 'Recently created' },
    { value: 'Recently sold', label: 'Recently sold' },
    { value: 'Recently received', label: 'Recently received' },
    { value: 'Ending soon', label: 'Ending soon' },
    { value: 'Price low to high', label: 'Price low to high' },
    { value: 'Price high to low', label: 'Price high to low' },
    { value: 'Highest last sale', label: 'Highest last sale' },
    { value: 'Oldest', label: 'Oldest' }
  ];
  //React select style
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      boxShadow: 'none !important',
      backgroundColor: state.isFocused ? '#000000b5' : '#000',
      color: state.isFocused ? '#fcc003' : '#fff',
      padding: 11,
      lineHeight: 1.2
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'rgba(255, 255, 255, 1)'
    })
  };
  const [cName, setClassName] = useState('jsListView');

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <ProfileSettings />
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-8">
              <div className="inner_wrapper">
                <div className="page_title">
                  <h2>Your Favorites</h2>
                </div>
                <div className="topbar">
                  <div className="leftside">
                    <div className="sort">
                      <label>Sort by:</label>
                      <form action="">
                        <Select styles={customStyles} options={options} placeholder="Sort by" />
                      </form>
                    </div>
                    <div className="view_wrapper">
                      <div
                        className={cName === 'jsGridView' ? 'listView active' : 'listView'}
                        onClick={() => setClassName('jsListView')}
                      >
                        <img src={list} alt="icon" />
                      </div>
                      <div
                        className={cName === 'jsListView' ? 'boxView active' : 'boxView'}
                        onClick={() => setClassName('jsGridView')}
                      >
                        <img src={box} alt="icon" />
                      </div>
                    </div>
                  </div>
                  <div className="rightside">
                    <Link className="btn_wrapper" to="/">
                      Add All Items to Cart
                    </Link>
                  </div>
                </div>
                <div className="inner_block">
                  <div
                    className={
                      cName === 'jsGridView' ? 'card_block card_box_view row' : 'card_block'
                    }
                  >
                    {Favourite_data.map((val, i) => (
                      <div className="single_card" key={i}>
                        <div className="card_view">
                          <div className="left_block">
                            <div className="card_img">
                              <img src={val.image} alt="icon" />
                            </div>
                            <div className="card_details">
                              <h2>{val.name}</h2>
                              <p>{val.licence_type}</p>
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
                            <div className="sales">{val.sales}</div>
                            <div className="price">
                              <h2 className="old">{val.old_price}</h2>
                              <h2 className="new">{val.new_price}</h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-7">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Favourites;
