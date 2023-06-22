import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import userImg from '../../assets/images/user-img.png';

// CSS
import './profileSettings.scss';
import { useSelector } from 'react-redux';

const ProfileSettings = () => {
  const location = useLocation();
  const userName = useSelector((state) => state.user.user_login);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="top_section">
        <div className="container">
          <div className="user_profile">
            <div className="user_details">
              <div className="user_img">
                <img src={userImg} alt="User Profile" />
              </div>
              <div className="user_name">
                <h2 className="text-capitalize">{userName}</h2>
                <p>Member since October 2022</p>
              </div>
            </div>
          </div>
          <div className="tab_link">
            <ul>
              <li>
                <Link
                  to="/profile"
                  className={`${location.pathname === '/profile' ? 'active' : ''}`}
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className={`${location.pathname === '/dashboard' ? 'active' : ''}`}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/settings"
                  className={`${location.pathname === '/settings' ? 'active' : ''}`}
                >
                  Settings
                </Link>
              </li>
              <li>
                <Link
                  to="/favourites"
                  className={`${location.pathname === '/favourites' ? 'active' : ''}`}
                >
                  Favorites
                </Link>
              </li>
              <li>
                <Link
                  to="/collections"
                  className={`${location.pathname === '/collections' ? 'active' : ''}`}
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  to="/downloads"
                  className={`${location.pathname === '/downloads' ? 'active' : ''}`}
                >
                  Downloads
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileSettings;
