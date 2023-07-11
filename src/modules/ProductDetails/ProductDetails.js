import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Modal from 'react-bootstrap/Modal';
import parse from 'html-react-parser';

import banner from '../../assets/images/product/product-details.png';
import supportLogo from '../../assets/images/product/support/logo.svg';
import doc from '../../assets/images/icon/doc.svg';
import download from '../../assets/images/icon/arrow-down-square.svg';
import star from '../../assets/images/icon/star.svg';
import share from '../../assets/images/icon/share.svg';
import like from '../../assets/images/icon/like.svg';
import save from '../../assets/images/icon/save.svg';
import FillStar from '../../assets/images/icon/fill-star.svg';
import addItem from '../../assets/images/icon/add-item.svg';
import { Backdrop, CircularProgress } from '@mui/material';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// CSS
import './productDetails.scss';
import { themeDetails } from '../../services/pages.service';
import { timeSince } from '../../utils/daysAgo/daysAgo';
import {  useSelector } from 'react-redux';

import { useStep, values as stepValues } from './useStepHook';
import AddCollectionContent from './AddCollectionContent';
import CreateCollectionContent from './CreateCollectionContent';
import AddToCartButton from '../../components/AddToCartButton/AddToCartButton';
const ProductDetails = () => {
  // const {id} = useParams();
  const themeid = useParams();
  console.log('Current theme_id',themeid);
  const userLogin = useSelector((state) => state.user.user_login);

  // const cartData = useSelector((state) => state.cart);
  // const items = cartData.items.map((item) => item.theme_id);
  // const [cartLoading, setCartLoading] = useState(false);
  // const inCart = items.includes(id);

  // console.log('inCart', inCart);
  const collections = useSelector((state) => state.collections.collection);
  const [selectedCollection, setSelectedCollection] = useState(null);
  //loader overlay
  const [open, setOpen] = useState(true);
  const [themeData, setThemeData] = useState(null);
  const [value, setValue] = React.useState('1');
  const { step, setToItem, setToCollection } = useStep();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // console.log('themeData', themeData)
  //Modal show close
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setToItem();
    setShow(true);
  };
  useEffect(() => {
    setOpen(true);
    fetchDetails(themeid?.id);
  }, [themeid?.id]);

  const fetchDetails = async (id) => {
    console.log('fetchDetails',id)
    const { data } = await themeDetails(id);
    setThemeData(data.data);
    setOpen(false);
  };
  // console.log('themeData',themeData);

  return (
    <>
      <Backdrop
        open={open}
        sx={{
          color: '#fff',
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: '#141414',
          flexDirection: 'column'
        }}
      >
        <h1 className="mb-4">UI UX Studio</h1>
        <CircularProgress color="inherit" />
      </Backdrop>
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        {themeData && (
          <>
            <div className="product_details">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="heading">
                      <h2 className="text-capitalize">{themeData.theme_data.title}</h2>
                      <div className="d-flex align-items-center ItemDiscription">
                        <div className="d-flex align-items-center">
                          <img src={doc} alt="Doc Icon" />
                          <span style={{ textTransform: 'capitalize' }}>
                            {themeData.theme_data.other_filed.pages}
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <img src={download} alt="Doc Icon" />
                          <span>{themeData.theme_data.other_filed.theme_download} Download</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <img src={star} alt="Doc Icon" />
                          <span>{themeData?.review / 5 || '0/5'}</span>
                        </div>
                      </div>
                      <h2 className="text-capitalize">
                        {!themeData.theme_data.sale_price ? (
                          <p>$ {themeData.theme_data.regular_price}</p>
                        ) : (
                          <>
                            <p className="d-inline-block me-2 opacity-50">
                              <del>$ {themeData.theme_data.regular_price}</del>
                            </p>
                            <p className="d-inline-block">$ {themeData.theme_data.sale_price}</p>
                          </>
                        )}
                      </h2>
                      <div className="btnBlock">
                        <div className="btn_group">
                          <Link className='btn_wrapper' target='_blank'
                            to={{ pathname: `/preview/${themeData?.theme_data?.theme_id}` }}
                          >
                            Live Preview
                          </Link>
                          <AddToCartButton productid={themeid?.id} forPagetoShowWhichDesign={1}/>
                          {/* {inCart ? (
                            <button className="btn_wrapper light" onClick={() => navigate('/cart')}>
                              View In Cart
                            </button>
                          ) : (
                            <>
                              {cartLoading ? (
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
                              ) : (
                                <button className="btn_wrapper light" onClick={addToCartHandler}>
                                    Add to cart
                                  </button>
                                // 
                              )}
                            </>
                          )} */}
                        </div>
                        <div className="share_group">
                          <Link to="/" className="img">
                            <img src={share} alt="share icon" />
                          </Link>
                          <button className="img" onClick={handleShow}>
                            <img src={save} alt="save icon" />
                          </button>
                          <Link to="/" className="img">
                            <img src={like} alt="like icon" />
                          </Link>
                        </div>
                      </div>
                      <p>{parse(themeData.theme_data.short_description)}</p>
                    </div>
                    <div className="productSlider">
                      <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        grabCursor={true}
                        className="mySwiper product_slider"
                        breakpoints={{
                          0: {
                            slidesPerView: 1,
                            spaceBetween: 15
                          },
                          481: {
                            slidesPerView: 2,
                            spaceBetween: 15
                          },
                          992: {
                            slidesPerView: 3,
                            spaceBetween: 15
                          },
                          1366: {
                            slidesPerView: 4,
                            spaceBetween: 15
                          }
                        }}
                      >
                        {themeData.theme_data.theme_gallery.map((item, index) => (
                          <SwiperSlide key={index}>
                            <div className="images_wrapper">
                              <img src={item} alt="treanding-slide" />
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                    <div className="productDetails_wrapper">
                      <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                              <Tab label="Description" value="1" />
                              <Tab label="Support" value="2" />
                              <Tab label="Review" value="3" />
                            </TabList>
                          </Box>
                          <TabPanel value="1">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="desc_details">
                                  <div className="description_list">
                                    <ul>
                                      <li>
                                        <span>Last Update</span>
                                        <div>
                                          <span>{themeData.theme_data.description.last_update}</span>
                                        </div>
                                      </li>
                                      <li>
                                        <span>Published</span>
                                        <div>
                                          <span>{themeData.theme_data.description.published}</span>
                                        </div>
                                      </li>
                                      <li>
                                        <span>Compatible With</span>
                                        <div>
                                          {themeData?.theme_data?.description?.compatible?.map(
                                            (item, index) => (
                                              <label
                                                key={index}
                                                style={{
                                                  textTransform: 'capitalize'
                                                }}
                                              >
                                                {item}
                                              </label>
                                            )
                                          )}
                                        </div>
                                      </li>
                                      <li>
                                        <span>Compatible Browsers</span>
                                        <div>
                                          {themeData.theme_data.description.compatible_browsers.map(
                                            (item, index) => (
                                              <label
                                                key={index}
                                                style={{
                                                  textTransform: 'uppercase'
                                                }}
                                              >
                                                {item}
                                              </label>
                                            )
                                          )}
                                        </div>
                                      </li>
                                      <li>
                                        <span>Documentation</span>
                                        <div>
                                          <span>{themeData.theme_data.description.documented}</span>
                                        </div>
                                      </li>
                                      <li>
                                        <span>Tags</span>
                                        <div className="labels">
                                          <span>
                                            {themeData.theme_data.description.tag.map((item, index) => (
                                              <label
                                                key={index}
                                                style={{
                                                  textTransform: 'capitalize'
                                                }}
                                              >
                                                {item}
                                              </label>
                                            ))}
                                          </span>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="text_Wrapper">
                                    <h2>Overview:</h2>
                                    <div>{parse(themeData.theme_data.overview)}</div>
                                    {themeData.theme_data.pages && (
                                      <>
                                        <h2>Pages:</h2>
                                        <ul className="tabType">
                                          {themeData.theme_data.pages.map((item, index) => (
                                            <li key={index}>{item}</li>
                                          ))}
                                        </ul>
                                      </>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </TabPanel>
                          <TabPanel value="2">
                            <div className="supportBlock">
                              <div className="row">
                                <div className="col-xl-8 d-block d-sm-flex align-items-center">
                                  <div className="supportLogo">
                                    <img src={supportLogo} alt="support logo" />
                                  </div>
                                  <div className="supoortTitle">
                                    <h2>Designed by UIUXStudio</h2>
                                    <p>
                                      For advanced design guidance, please share your questions in
                                      the UIUXStudio Forum or reach out to a UIUXStudio Expert.
                                    </p>
                                  </div>
                                </div>
                                <div className="col-xl-4 mt-2 mt-xl-0 d-flex align-items-center justify-content-start justify-content-sm-end">
                                  <Link className="btn_wrapper" to="/contact">
                                    Contact Us
                                  </Link>
                                </div>
                                <div className="col-12">
                                  <div className="desc_details support_details">
                                    <div className="text_Wrapper">
                                      <h2>Contact the author</h2>
                                      <p>
                                        This author provides limited support for this item through
                                        email contact form.
                                      </p>
                                      <div className="iconList">
                                        <h2>Item support includes:</h2>
                                        <ul>
                                          <li>Availability of the author to answer questions</li>
                                          <li>
                                            Answering technical questions about item's features
                                          </li>
                                          <li>Assistance with reported bugs and issues</li>
                                          <li>Help with included 3rd party assets</li>
                                        </ul>
                                      </div>
                                      <div className="iconList">
                                        <h2>However, item support does not include:</h2>
                                        <ul className="falseItem">
                                          <li>Customization services</li>
                                          <li>Installation services</li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </TabPanel>
                          <TabPanel value="3">
                            <div className="row">
                              <div className="col-12">
                                {themeData.theme_data.reviews.map((comment, index) => (
                                  <div key={index} className="reviewBlock">
                                    <div className="starBlock">
                                      <img src={FillStar} alt="FillStar" />
                                      <img src={FillStar} alt="FillStar" />
                                      <img src={FillStar} alt="FillStar" />
                                      <img src={FillStar} alt="FillStar" />
                                      <img src={FillStar} alt="FillStar" />
                                    </div>
                                    <p>{comment.comment_content}</p>
                                    <h2>{comment.comment_author}</h2>
                                    <p>{timeSince(comment.comment_date_gmt)} ago</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </TabPanel>
                        </TabContext>
                      </Box>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="banner_bkg">
                      <img src={banner} alt="Banner Background" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Modal
              show={show}
              onHide={handleClose}
              size="md"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              className="add_collection"
            >
              <Modal.Header closeButton>
                <img src={addItem} alt="Add Icon" />
              </Modal.Header>
              <Modal.Body>
                <div className="wizard-container">
                  <fieldset className={step === stepValues[0] ? 'active' : ''}>
                    <AddCollectionContent
                      userLogin={userLogin}
                      collections={collections}
                      selectedCollection={selectedCollection}
                      setSelectedCollection={setSelectedCollection}
                      setToCollection={setToCollection}
                      themeId={themeid?.id}
                      close={() => setShow(false)}
                    />
                  </fieldset>
                  <fieldset className={step === stepValues[1] ? 'active' : ''}>
                    <CreateCollectionContent setToItem={setToItem} />
                  </fieldset>
                </div>
              </Modal.Body>
            </Modal>
          </>
        )}
      </motion.section>
    </>
  );
};

export default ProductDetails;
