import React from 'react';
import { Link } from 'react-router-dom';

// import { slider_data } from './Data';
import cartIcon from '../../../assets/images/icon/cart.svg';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import "swiper/css/navigation";

// import required modules
// import { FreeMode, Pagination } from 'swiper';
import { Navigation } from 'swiper';

const HotUnder = ({ data }) => {
    // console.log(data)
    const HotUnderData = data['hot_under_category'];
    return (
        <section className='slider_wrapper'>
            <div className='container'>
                <div className='title'>
                    <Link to='/products/hot_under_category' className='header'>
                        <h2>Hot under $15</h2>
                    </Link>
                    <Link to='/products/hot_under_category' className='viewBtn'>
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
                    {HotUnderData.map((val, i) => (
                        <SwiperSlide key={i}>
                            <div className='cardBlock'>
                                <Link to={`/product-details/${val.id}`} className='cardImg'>
                                    <img src={val.featured_image} alt="Card Images" />
                                </Link>
                                <div className='tray-cardHover'>
                                    <div className='tray-cardDescription'>
                                        <div className='d-flex'>
                                            <a href={`${val?.liveurl}`} className='previewBtn'>
                                                Live Preview
                                            </a>
                                            <Link to={`/product-details/${val.id}`} className='cartBtn'>
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
        </section>
    );
};

export default HotUnder;