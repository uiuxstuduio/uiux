import { useEffect, useRef, useState } from 'react';
import ProfileSettings from '../Profile-settings/index';
import Sidebar from '../../components/common/Profile-sidebar/sidebar';
import { motion } from 'framer-motion';
import './profile.scss';
import LoaderAnimation from '../../components/common/LoaderAnimation/LoaderAnimation';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileData, updateProfileData } from '../../services/profile.service';
import { ProfileValidation } from '../../utils/validation/profile';
import { loginUser } from '../../redux/reducers/authReducer.slice';

const Profile = () => {
  const submitButton = useRef();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.user_id);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({
    user_login: null,
    billing_country: null
  });
  const [updateData, setUpdateData] = useState({});
  useEffect(() => {
    fetchUserData(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fetchUserData = async (userId) => {
    const { data } = await getProfileData({ user_id: userId });
    const obj = { ...data.data[0] };

    //setup user id property
    Object.defineProperty(obj, 'user_id', Object.getOwnPropertyDescriptor(obj, 'id'));
    delete obj['id'];
    setUpdateData(obj);
    setLoading(false);
  };

  const inputChangeHandler = (e) => {
    const element = e.currentTarget;
    const obj = { ...updateData };
    obj[element.name] = element.value;
    setUpdateData(obj);

    setErrors((state) => {
      const obj = { ...state };
      obj[element.name] = null;
      return obj;
    });
  };

  const submitProfileUpdate = async (e) => {
    e.preventDefault();
    const error = ProfileValidation(updateData);
    setErrors(error);
    if (
      Object.entries(error)
        .map((item) => item[1])
        .filter((item) => item !== null).length
    )
      return;
    setLoading(true);
    const { data } = await updateProfileData(updateData);
    const res = data.data[0];
    const payload = {
      user_id: res.user_id,
      user_login: res.user_login,
      user_email: res.user_email
    };
    dispatch(loginUser(payload));
    setLoading(false);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <ProfileSettings />
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-8">
              {loading ? (
                <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                  <LoaderAnimation />
                </div>
              ) : (
                <div className="inner_wrapper">
                  <div className="page_title">
                    <h2>Profile</h2>
                  </div>
                  <div className="formCustom">
                    <form onSubmit={submitProfileUpdate}>
                      <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                          <div className="form-group">
                            <label>Name</label>
                            <input
                              type="text"
                              name="user_login"
                              className="user-input"
                              placeholder="Enter Name"
                              onChange={inputChangeHandler}
                              value={updateData?.user_login}
                              required=""
                            />
                          </div>
                          <p className="mt-2" style={{ color: '#ff6e6e' }}>
                            {errors.user_login}
                          </p>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                          <div className="form-group">
                            <label>Your Country</label>
                            <input
                              type="text"
                              name="billing_country"
                              className="user-input"
                              placeholder="Enter Country"
                              onChange={inputChangeHandler}
                              value={updateData?.billing_country}
                              required=""
                            />
                          </div>
                          <p className="mt-2" style={{ color: '#ff6e6e' }}>
                            {errors.billing_country}
                          </p>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 ">
                          <div className="form-group text-end">
                            <button
                              type="submit"
                              className="btn_wrapper mt-4"
                              onClick={() => {
                                submitButton.current.click();
                              }}
                            >
                              Save
                            </button>
                            <input type="submit" hidden ref={submitButton} />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
            <div className="col-xl-3 col-lg-4 col-md-7">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Profile;
