import React from 'react';
import { Link } from 'react-router-dom';

import cartIcon from '../../../assets/images/icon/cart.svg';
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
                    slidesPerView={1}
                    spaceBetween={0}
                    navigation={true}
                    breakpoints={{
                        1400: {
                            slidesPerView: 5,
                        },
                        1199: {
                            slidesPerView: 4,
                        },
                        991: {
                            slidesPerView: 3,
                        },
                        767: {
                            slidesPerView: 2,
                        },
                        576: {
                            slidesPerView: 1,
                        },
                    }}
                    modules={[Navigation]}
                    className="mySwiper cardSlider"
                >
                    {responsive_items?.map((val, i) => (
                        <SwiperSlide key={i}>
                            <div className='cardBlock'>
                                <Link to={`/product-details/${val.id}`} className='cardImg'>
                                    <img src={val.featured_image} alt="Card Images" />
                                </Link>
                                <div className='tray-cardHover'>
                                    <div className='tray-cardDescription'>
                                        <div className='d-flex'>
                                            <Link className='previewBtn' target='_blank'
                                                to={{ pathname: `/preview/${val.id}` }}
                                                state={{ url: val?.liveurl, id: val.id }}
                                            >
                                                Live Preview
                                            </Link>
                                            <Link to={`#`} className='cartBtn'>
                                                <img src={cartIcon} alt="Card Images" />
                                            </Link>


                                        </div>
                                        <div className='Title'>
                                            <h2>{val.name}</h2>
                                            <span>{val.sale_price}</span>
                                        </div>
                                        <div className='discripion'>
                                            <ul>
                                                <li>HTML</li>
                                                <li>CSS</li>
                                                <li>JS</li>
                                                <li>BOOTSTRAP</li>
                                            </ul>
                                            <p>{val.short_description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};
export default Responsive;