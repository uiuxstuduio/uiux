import React from 'react';
import './banner.scss';
import { Link } from 'react-router-dom';

import banner from '../../../assets/images/banner.png';
import doc from '../../../assets/images/icon/doc.svg';
import download from '../../../assets/images/icon/arrow-down-square.svg';
import star from '../../../assets/images/icon/star.svg';

const Banner  = ({ data }) => {
  const BannerData = data['banner_product'];
  console.log('BannerData',data)
  return (
    <section className="mainBanner banner_Wrapper">
      <div className="banner_bkg">
        <img src={banner} alt="Banner Background" />
      </div>
      <div className="container">
        <div className='TextBlock'>
          <div className="row">
            <div className="col-sm-12 col-md-8 col-lg-6">
              <div className="heading large">
                <h2 className="text-uppercase">
                  <span>NFT</span>
                  ndecentral
                </h2>
                <div className="d-flex align-items-center ItemDiscription">
                  <div className="d-flex align-items-center">
                    <img src={doc} alt="Doc Icon" />
                    <span>Multipage</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <img src={download} alt="Doc Icon" />
                    <span>120 Download</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <img src={star} alt="Doc Icon" />
                    <span>4.5/5</span>
                  </div>
                </div>
                <p>
                  It is a long established fact that a reader will be distracted by the readable
                  content of a page when looking at its layout. The point of using Lorem Ipsum is that
                  it has a more-or-less normal distribution of letters, as opposed
                </p>
                <div className="d-flex align-items-center btnBlock">
                  <Link className="btn_wrapper" to="/">
                    Live Preview
                  </Link>
                  <Link className="btn_wrapper light" to="/">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
