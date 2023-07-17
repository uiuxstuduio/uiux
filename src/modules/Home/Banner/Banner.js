import React from 'react';
import './banner.scss';
import { Link } from 'react-router-dom';

import banner from '../../../assets/images/banner.png';
import doc from '../../../assets/images/icon/doc.svg';
import download from '../../../assets/images/icon/arrow-down-square.svg';
import star from '../../../assets/images/icon/star.svg';

const Banner = ({ data }) => {
  // const BannerData = data['banner_product'];
  console.log('BannerData', data)
  const bannerData = data.banner_product[0]
  return (
    <section className="mainBanner banner_Wrapper afterloginbanner">
      <div className="banner_bkg">
        <img src={bannerData?.banner_image} alt="Banner Background" />
      </div>
      <div className="container">
        <div className='TextBlock'>
          <div className="row">
            <div className="col-sm-12 col-md-8 col-lg-6">
              <div className="heading large">
                <h2 className="text-uppercase">
                  <span>NFT (This is static not from API)</span>
                  {bannerData?.name}
                </h2>
                <div className="d-flex align-items-center ItemDiscription">
                  <div className="d-flex align-items-center">
                    <img src={doc} alt="Doc Icon" />
                    <span>{bannerData?.page && bannerData.page.charAt(0).toUpperCase() + bannerData.page.slice(1)}</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <img src={download} alt="Doc Icon" />
                    <span>{bannerData?.sale} Download</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <img src={star} alt="Doc Icon" />
                    <span>{bannerData?.review}/5</span>
                  </div>
                </div>
                <p>
                  {bannerData ? bannerData.short_description : 'No description added'}
                </p>
                <div className="d-flex align-items-center btnBlocks">
                  <Link className="btn_wrapper" target='_blank'
                    to={{ pathname: `/preview/${bannerData.id}` }}
                    state={{ url: bannerData?.liveurl, id: bannerData?.id }}>
                    Live Preview
                  </Link>
                  <Link className="btn_wrapper light" to={`product-details/${bannerData.id}`}>
                    View detail
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
