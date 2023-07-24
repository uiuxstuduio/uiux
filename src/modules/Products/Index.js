import React, { useEffect, useMemo, useState } from 'react';
/* CSS */
import './products.scss';

import { motion } from 'framer-motion';

import { useParams } from 'react-router-dom';
import { newHomePage } from '../../services/pages.service';
// import { Link } from '@mui/material';
import { Link } from 'react-router-dom';

import AddToCartButton from '../../components/AddToCartButton/AddToCartButton';

export default function Products() {
  const allowedDataArray = useMemo(() => [
    "best_selling_products",
    "banner_product",
    "hot_under_category",
    "new_bestsellers",
    "responsive_items",
  ], []);
  const [apiData, setApiData] = useState({});
  const { productTab } = useParams()
  const [currentTabData, setCurrentTabData] = useState([])
  const [currentTab, setCurrentTab] = useState(allowedDataArray[0])
  const [cartLoading, setCartLoading] = useState(false);

  useEffect(() => {
    if (productTab && allowedDataArray.includes(productTab)) {
      setCurrentTab(productTab);
    }
    getData();
  }, [productTab, allowedDataArray]);
  useEffect(() => {
    if (apiData && apiData[currentTab]) {
      setCurrentTabData(apiData[currentTab] || []);
    }
    console.log("currentTabData", currentTabData);
    // console.log('apiData',apiData);
  }, [apiData, currentTab, currentTabData]);

  const getData = async () => {
    setCartLoading(true);
    const { data } = await newHomePage();
    setApiData(data.data);
    setCartLoading(false);
  };

  const keys = Object.keys(apiData);

  const totalCount = keys.slice(1).reduce((acc, key) => {
    const array = apiData[key];
    if (Array.isArray(array) && array.length > 0) {
      return acc + array.length;
    }
    return acc;
  }, 0);

  console.log('currentTab',currentTab)
  console.log('productTab',productTab)

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <div className="breadcrumb_wrapper breadMobile">
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
              <div className='col-12 col-lg-4 mb-4 mb-lg-0'>
                <div className='stickyBlock'>
                  <div className='Category'>
                    <h2>Category</h2>
                    <ul>
                      <li className='main d-none d-lg-block'>
                        <Link to="/">All categories</Link>
                        <span>{totalCount}</span>
                      </li>
                      <li className={currentTab === 'best_selling_products' ? 'active' :''}>
                        <Link to={'/products/best_selling_products'} >Weekly Bestsellers</Link>
                        <span>{apiData?.best_selling_products?.length}</span>
                      </li>
                      <li className={currentTab === 'hot_under_category' ? 'active' :''}>
                        <Link to={"/products/hot_under_category"}>Hot Under $15</Link>
                        <span>{apiData?.hot_under_category?.length}</span>
                      </li>
                      <li className={currentTab === 'new_bestsellers' ? 'active' :''}>
                        <Link to={"/products/new_bestsellers"}>New Bestsellers</Link>
                        <span>{apiData?.new_bestsellers?.length}</span>
                      </li>
                      <li className={currentTab === 'responsive_items' ? 'active' :''}>
                        <Link to={"/products/responsive_items"}>Responsive Items</Link>
                        <span>{apiData?.responsive_items?.length}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-12 col-lg-8'>
                {
                  cartLoading ? (
                    <div className="custom-loader mx-auto"></div>
                  ) : (
                    currentTabData &&
                    currentTabData.map((data) => {
                      return (
                        <div className='productBlocks' key={data.id}>
                          <div className='product'>
                            <div className='productImg'>
                              <Link to={`/product-details/${data.id}`}>
                                <img src={data.featured_image} alt='' />
                              </Link>
                            </div>
                            <div className='productText'>
                              <h2>
                                <Link to={`/product-details/${data.id}`}>{data.name}</Link>
                              </h2>
                              <ul>
                                <li>Joomla 4 Ready</li>
                                <li>Most Flexible Joomla Theme with Page Builder</li>
                                <li>RTL Support and Mobile Friendly</li>
                              </ul>
                            </div>
                            <div className='productPrice'>
                              <div className='addToCart'>
                                <AddToCartButton themeid={data?.id} forPagetoShowWhichDesign={2}/>
                                {/* <button>
                                  <img src={cart} alt='icon' />
                                </button> */}
                              </div>
                              <div className='priceBlock'>
                                <span className='originalPrice'>${data.regular_price}</span>
                                <span className='promoPrice'>${data.sale_price}</span>
                              </div>
                              <div className='productSale'>{data.sale} Sales</div>
                              <div className='productSale'>Last updated: 04 Mar 23</div>

                              <Link className='btn_wrapper'
                                to={{ pathname: `/preview/${data?.id}` }}
                              > Live Preview</Link>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  )
                }


              </div>

            </div>

          </div>
        </div>
      </motion.div>

    </>
  );
};