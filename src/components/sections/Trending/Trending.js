import React from 'react';
import { Link } from 'react-router-dom';
import './trending.scss';
import cartIcon from '../../../assets/images/icon/cart.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import "swiper/css/navigation";

import { Navigation } from 'swiper';

const Trending = ({ data }) => {
    const trendingData = data['best_selling_products'];
    return (
        <div className='trending_wrapper slider_wrapper'>
            <div className='container'>
                <div className='title'>
                    <Link to='/products/best_selling_products' className='header'>
                        <h2>Weekly bestsellers</h2>
                    </Link>
                    <Link to='/products/best_selling_products' className='viewBtn'>
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
                            slidesPerView: 7,
                        },
                        1199: {
                            slidesPerView: 5,
                        },
                        991: {
                            slidesPerView: 4,
                        },
                        767: {
                            slidesPerView: 3,
                        },
                        576: {
                            slidesPerView: 2,
                        },
                    }}
                    modules={[Navigation]}
                    className="mySwiper cardSlider"
                >
                    {trendingData.map((val, i) => (
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
                                            <span>${val.sale_price}</span>
                                        </div>
                                        <div className='discripion'>
                                            {/* <ul>
                                                <li>HTML</li>
                                                <li>CSS</li>
                                                <li>JS</li>
                                                <li>BOOTSTRAP</li>
                                            </ul> */}
                                            <p>{val.short_description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Trending;