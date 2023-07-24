import React from 'react';
import { Link } from 'react-router-dom';

import './responsive.scss';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import "swiper/css/navigation";

// import required modules
// import { FreeMode, Pagination } from 'swiper';
import { Navigation } from 'swiper';

import AddToCartButton from '../../AddToCartButton/AddToCartButton';
import Popup from 'reactjs-popup';

const Responsive = ({ data }) => {
    //   console.log(data['responsive_items'])
    const responsive_items = data['responsive_items'];

    return (
        <section className='slider_wrapper ResponsiveWrapper'>
            <div className='container'>
                <div className='title'>
                    <Link to='/products/responsive_items' className='header'>
                        <h2>Top responsive items</h2>
                    </Link>
                    <Link to='/products/responsive_items' className='viewBtn'>
                        View all
                    </Link>
                </div>
                <Swiper
                    // loop={true}
                    grabCursor={true}
                    slidesPerView={1.6}
                    spaceBetween={20}
                    navigation={true}
                    breakpoints={{
                        1400: {
                            slidesPerView: 6,
                        },
                        1199: {
                            slidesPerView: 4,
                        },
                        991: {
                            slidesPerView: 3,
                        },
                        767: {
                            slidesPerView: 3,
                        },
                        576: {
                            slidesPerView: 3,
                        },
                        0: {
                            slidesPerView: 2,
                        },
                    }}
                    modules={[Navigation]}
                    className="mySwiper Responsive_cardSlider cardSlider"
                >
                    {responsive_items?.map((val, i) => (
                        <SwiperSlide key={i}>
                            <div className='itemTop'>
                                <div className="item top-picks__item">
                                    <Link className='item__card'
                                        to={`/product-details/${val.id}`}
                                        state={{ url: val?.liveurl, id: val.id }}
                                    >
                                        <img src={val.featured_image} alt="Card Images" />
                                        <div className="shine"></div>
                                    </Link>
                                </div>
                                <span className='Numbers'>{i+1}</span>
                            </div>
                            {/* <Popup
                                key={`tp-${i}`}
                                repositionOnResize={true}
                                trigger={                                    
                                    <div className='itemTop'>
                                        <div className="item top-picks__item">
                                            <a className="item__card" href="" target="_blank" rel="noopener noreferrer">
                                                <img src="https://qqcdnpictest.mxplay.com/pic/51926f1240cdbcec6d9a4f26ca92cd78/en/2x3/312x468/af24bfc92b1731b1987c6b2f41a24b3c_1280x1920.webp" alt="Card Images" />
                                            </a>
                                        </div>
                                        <span className='Numbers'>{i+1}</span>
                                    </div>
                                }
                                position={'center center'}
                                on={['hover', 'focus']}
                                arrow={false}
                                mouseEnterDelay={300}
                                mouseLeaveDelay={300}
                            >
                                <div className='hover-card-container'>
                                    <div className='card-image-content'>
                                        <Link to={`/product-details/${val.id}`} className='cardImg'>
                                            <img src="https://qqcdnpictest.mxplay.com/pic/51926f1240cdbcec6d9a4f26ca92cd78/en/16x9/320x180/af24bfc92b1731b1987c6b2f41a24b3c_1920x1080.webp" alt="Card Images" />
                                        </Link>
                                    </div>
                                    <div className='card-text-content'>                                            
                                        <span>${val.sale_price} <i>${val.regular_price}</i></span>
                                        <div className='d-flex'>
                                            <Link className='previewBtn' target='_blank'
                                                to={{ pathname: `/preview/${val.id}` }}
                                                state={{ url: val?.liveurl, id: val.id }}
                                            >
                                                Live Preview
                                            </Link>
                                            <AddToCartButton themeid={val?.id} forPagetoShowWhichDesign={2}/>
                                        </div>
                                    </div>
                                    <div className='Title'>
                                        <h2>{val.name}</h2>
                                    </div>
                                    <div className='discripion'>
                                        <p>{val.short_description}</p>
                                    </div>
                                </div>
                            </Popup> */}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};
export default Responsive;