import React, { Fragment, useEffect, useState } from 'react';
import Trending from '../../components/sections/Trending/Trending';
import Banner from './Banner/Banner';
// import SliderSection from '../../components/sections/Sections/SliderSection';
// import TopCategories from '../../components/sections/topCategories/TopCategories';
import Responsive from '../../components/sections/responsive/Responsive';

/* CSS */
import './home.scss';

/* IMAGES */
import { Backdrop, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import collection from '../../assets/images/icon/collection.svg';
import scale from '../../assets/images/icon/scale.svg';
import wallet from '../../assets/images/icon/wallet.svg';
import mockup from '../../assets/images/mockup/mockup.png';
import Discover from '../../components/sections/Discover/Discover';
import NewBestsellers from '../../components/sections/New-bestsellers/Newbestsellers';
import HotUnder from '../../components/sections/hot-under/HotUnder';
import { newHomePage } from '../../services/pages.service';
import LoginBanner from './Banner/LoginBanner/LoginBanner';

const Home = () => {
  const [open, setOpen] = useState(true);
  const [data, setData] = useState({});
  const user = useSelector((state) => state.user);

  useEffect(() => {
    setOpen(true);
    getData();
  }, []);



  const getData = async () => {
    // const { data } = await getHomePageContent();
    const { data } = await newHomePage();
    setData(data.data);
    setOpen(false);
  };


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

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        {Object.keys(data).length !== 0 &&
          Object.keys(data).map((key, index) => {
            // console.log("KEY", key)
            if (index === 1) {
              return (
                <Fragment key={index}>
                  {user.user_id ? <Banner data={data} /> : <LoginBanner />}
                </Fragment>
              );
            } else if (index === 2) {
              return (
                <Fragment key={index}>
                  <Trending data={data} />
                </Fragment>
              );
            } else if (index === 3) {
              return (
                <Fragment key={index}>
                  <HotUnder data={data} />
                </Fragment>
              );
            } else if (index === 4) {
              return (
                <Fragment key={index}>
                  <NewBestsellers data={data} />
                </Fragment>
              );
            }
            return null; // Add this default return statement
          })}


        <Discover />

        <Responsive data={data} />

        <section className="normal_wrapper download_Wrapper">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="heading">
                  <h2>Download your favourites website</h2>
                  <p>
                    Lorem Ipsum has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and scrambled
                  </p>
                  <ul>
                    <li>Filter by only the services you pay for</li>
                    <li>No more switching berween apps</li>
                    <li>share what you sre watching with friends</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-7">
                <img src={mockup} alt="mockup images" />
              </div>
            </div>
          </div>
        </section>

        {/* AMAZING FEATURES START HERE */}
        <section key={'feature_wrapper'} className="features_wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <div className="heading">
                  <h2>Our Amazing Features</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="features_block">
                  <div className="features_images">
                    <img src={wallet} alt="Wallet Icon" />
                  </div>
                  <div className="features_text">
                    <h2>Set up your wallet</h2>
                    <p>
                      Once you've set up your wallet of choice, connect it to OpenSea by clicking
                      the wallet icon in the top right corner.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
                <div className="features_block">
                  <div className="features_images">
                    <img src={collection} alt="collection Icon" />
                  </div>
                  <div className="features_text">
                    <h2>Upload & Create Collection</h2>
                    <p>
                      Once you've set up your wallet of choice, connect it to OpenSea by clicking
                      the wallet icon in the top right corner.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 mt-4 mt-lg-0">
                <div className="features_block">
                  <div className="features_images">
                    <img src={scale} alt="Sale Icon" />
                  </div>
                  <div className="features_text">
                    <h2>List them for sale</h2>
                    <p>
                      Once you've set up your wallet of choice, connect it to OpenSea by clicking
                      the wallet icon in the top right corner.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* AMAZING FEATURES END'S HERE */}

      </motion.div>

    </>
  );
};
export default Home;