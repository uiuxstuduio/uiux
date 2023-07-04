import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Home from '../modules/Home/Index';
import Products from '../modules/Products/Index';
import Contact from '../modules/Contact/Index';
import Login from '../components/Authentication/Login/Login';
import Signup from '../components/Authentication/Signup/Signup';
import PageNotFound from '../modules/PageNotFound/Index';
import ProductDetails from '../modules/ProductDetails/ProductDetails';
import Favorites from '../modules/Favourites/index';
import Downloads from '../modules/Downloads/index';
import Collections from '../modules/Collections/index';
import Cart from '../modules/Cart/index';
import Settings from '../modules/Settings/index';
import Profile from '../modules/Profile/index';
import Checkout from '../modules/Checkout';
import DefaultLayout from '../layouts';
import ProjectSteps from '../modules/ProjectSteps/Index';
import ThankYou from '../modules/ThankYou/Index';
import CategoryPage from '../modules/CategoryPage/CategoryPage';
import LivePreview from '../modules/LivePreview';

const AnimatedRoute = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route element={<PrivateRoute />}>
          {/* All routes will be here */}
          <Route element={<DefaultLayout component={<Favorites />} />} path="/favourites" />
          <Route element={<DefaultLayout component={<Downloads />} />} path="/downloads" />
          <Route element={<DefaultLayout component={<Collections />} />} path="/collections" />
          <Route element={<DefaultLayout component={<Settings />} />} path="/settings" />
          <Route element={<DefaultLayout component={<Profile />} />} path="/profile" />
          <Route element={<DefaultLayout component={<Checkout />} />} path="/checkout" />
          {/* <Route element={<DefaultLayout component={<Purchases />} />} path="/purchases" /> */}
        </Route>
        {/* this will be login route */}
        <Route element={<DefaultLayout component={<Home />} />} path="/" />
        <Route element={<DefaultLayout component={<Contact />} />} path="/contact" />
        <Route element={<DefaultLayout component={<Products />} />} path="/products" />
        <Route element={<DefaultLayout component={<Products />} />} path="/products/:productTab" />
        <Route element={<ProjectSteps />} path="/steps" />
        <Route element={<DefaultLayout component={<ProductDetails />} />} path="/product-details/:id" />
        <Route element={<DefaultLayout component={<CategoryPage />} />} path="/category/:id" />
        <Route element={<Login />} path="/login" />
        <Route element={<Signup />} path="/signup" />
        <Route element={<DefaultLayout component={<Cart />} />} path="/cart" />
        <Route element={<ThankYou />} path="/thankyou" />
        <Route element={<LivePreview />} path="/preview/:id" />
        <Route element={<PageNotFound />} path="*" />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoute;
