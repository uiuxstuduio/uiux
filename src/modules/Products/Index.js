import React, { useEffect, useState } from 'react';
/* CSS */
import './products.scss';

import { motion } from 'framer-motion';

import { useParams } from 'react-router-dom';
import { newHomePage } from '../../services/pages.service';
import { Link } from '@mui/material';

import cart from "../../assets/images/icon/cart.svg"

export default function Products() {
  const allowedDataArray = [
    "best_selling_products",
    "banner_product",
    "hot_under_category",
    "new_bestsellers",
    "responsive_items",
  ];
  const [apiData, setApiData] = useState({});
  const { productTab } = useParams()
  const [currentTabData, setCurrentTabData] = useState([])
  const [currentTab, setCurrentTab] = useState(allowedDataArray[0])


  useEffect(() => {
    if (productTab && allowedDataArray.includes(productTab)) {
      setCurrentTab(productTab)
    }
    getData();
  }, []);

  useEffect(() => {
    if (apiData && apiData && apiData[currentTab]) {
      setCurrentTabData(apiData[currentTab] || [])
      console.log(apiData)
    }
    console.log("currentTabData", currentTabData)
  }, [apiData])

  const getData = async () => {
    const { data } = await newHomePage();
    console.log(data)
    setApiData(data.data);
  };

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <div className="breadcrumb_wrapper">
          <h1 className="fw-bold">Our Top Products</h1>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
            unknown took a galley of type and scrambled it to make a type It has survived not only
            centuries
          </p>
        </div>

        <div className='productWrapper'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4'>
                <div className='stickyBlock'>
                  <div className='Category'>
                    <h2>Category</h2>
                    <ul>
                      <li className='main'>
                        <Link to="/">All categories</Link>
                        <span>51</span>
                      </li>
                      <li>
                        <Link href="/products/best_selling_products">Weekly Bestsellers</Link>
                        <span>8</span>
                      </li>
                      <li>
                        <Link href="/products/hot_under_category">Hot Under $15</Link>
                        <span>7</span>
                      </li>
                      <li>
                        <Link href="/products/new_bestsellers">New Bestsellers</Link>
                        <span>25</span>
                      </li>
                      <li>
                        <Link href="/products/responsive_items">Responsive Items</Link>
                        <span>11</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-md-8'>
                {currentTabData && currentTabData.map(data => {
                  return (
                    <div className='productBlocks'>
                      <div className='product'>
                        <div className='productImg'>
                          <Link href={`/product-details/${data.id}`}><img src={data.featured_image} alt=''/></Link>
                        </div>
                        <div className='productText'>
                          <h2><Link href={`/product-details/${data.id}`}>{data.name}</Link></h2>
                          <ul>
                            <li>Joomla 4 Ready</li>
                            <li>Most Flexible Joomla Theme with Page Builder</li>
                            <li>RTL Support and Mobile Friendly</li>
                          </ul>
                        </div>
                        <div className='productPrice'>
                              <div className='addToCart'>
                                <button><img src={cart} alt='icon' /></button>
                              </div>
                              <div className='priceBlock'>
                                <span className='originalPrice'>${data.regular_price}</span>
                                <span className='promoPrice'>${data.sale_price}</span>
                              </div>
                              <div className='productSale'>
                                {data.sale} Sales
                              </div>
                              <div className='productSale'>
                                Last updated: 04 Mar 23
                              </div>
                              <Link href={`/product-details/${data.id}`} className='btn_wrapper'>Live Preview</Link>
                        </div>
                      </div>
                    </div> 
                    )
                  }
                )}
              </div>

            </div>

          </div>
        </div>
      </motion.div>

    </>
  );
};