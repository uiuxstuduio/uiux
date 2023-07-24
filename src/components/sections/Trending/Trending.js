import React from 'react';
import { Link } from 'react-router-dom';
import './trending.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import "swiper/css/navigation";

import { Navigation } from 'swiper';

import AddToCartButton from '../../AddToCartButton/AddToCartButton';
import rightIcon from '../../../assets/images/icon/arrow-right.svg';
import Popup from 'reactjs-popup'; 

const Trending = ({ data }) => {
    const trendingData = data['best_selling_products'];

    return (
        <div className='trending_wrapper slider_wrapper'>
            <div className='container'>
                <div className='title'>
                    <Link to='/products/best_selling_products' className='header d-flex align-items-center'>
                        <h2>Weekly bestsellers</h2>
                        <div className='viewIcon'><span>View all</span><img src={rightIcon} alt='icon' width={24} height={24}/></div>
                    </Link>
                    <Link to='/products/best_selling_products' className='viewBtn'>
                        View all
                    </Link>
                </div>
                <Swiper
                    // loop={true}
                    grabCursor={true}
                    slidesPerView={2.2}
                    spaceBetween={10}
                    navigation={true}
                    breakpoints={{
                        1400: {
                            slidesPerView: 7,
                        },
                        1199: {
                            slidesPerView: 6,
                        },
                        1025: {
                            slidesPerView: 5,
                        },
                        767: {
                            slidesPerView: 4.2,
                        },
                        576: {
                            slidesPerView: 3.2,
                        },
                    }}
                    modules={[Navigation]}
                    className="mySwiper cardSlider"
                >
                    {trendingData.map((val, i) => (
                        <SwiperSlide key={i}>
                            <div className='cardBlock'>                                        
                                <Popup
                                    key={`tp-${i}`}
                                    repositionOnResize={true}
                                    trigger={                                    
                                        <Link to={`/product-details/${val.id}`} className='cardImg'>
                                            <img src={val.featured_image} alt="Card Images" />
                                        </Link>
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
                                                <img src={val.banner_image} alt="Card Thumbnail" />
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
                                </Popup>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Trending;