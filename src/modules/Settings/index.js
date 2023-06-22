import { useEffect, useRef, useState } from 'react';
import ProfileSettings from '../Profile-settings/index';
import Sidebar from '../../components/common/Profile-sidebar/sidebar';
import { motion } from 'framer-motion';
import './settings.scss';
import LoaderAnimation from '../../components/common/LoaderAnimation/LoaderAnimation';
import { useSelector } from 'react-redux';
import { getSettings, updatePassword, updateSettings } from '../../services/profile.service';
import { SettingsValidation } from '../../utils/validation/profile';
const Settings = () => {
  const settingsRef = useRef();
  const passwordRef = useRef();
  const userId = useSelector((state) => state.user.user_id);
  const [settingData, setSettingData] = useState({});
  const [errors, setErrors] = useState({
    user_email: null,
    billing_phone: null
  });
  const [pswdError, setPswdError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchSettings(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchSettings = async (userId) => {
    const payload = { user_id: userId };
    const { data } = await getSettings(payload);
    const res = data.data[0];
    Object.defineProperty(
      res,
      'billing_phone',
      Object.getOwnPropertyDescriptor(res, 'user_mobile')
    );
    delete res['user_mobile'];
    setSettingData(res);
    setLoading(false);
  };
  const detailsChangeHandler = (e) => {
    const element = e.currentTarget;
    const obj = { ...settingData };
    obj[element.name] = element.value;
    setSettingData(obj);

    setErrors((state) => {
      const obj = { ...state };
      obj[element.name] = null;
      return obj;
    });
  };

  const detailsFormHandler = async (e) => {
    e.preventDefault();
    settingData.billing_phone = settingData.billing_phone.replace(/ /, '').trim();
    const error = SettingsValidation(settingData);
    setErrors(error);
    if (
      Object.entries(error)
        .map((item) => item[1])
        .filter((item) => item !== null).length
    )
      return;
    setLoading(true);
    await updateSettings(settingData);
    setLoading(false);
  };

  const passwordFormHandler = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const pswdField = form[0];
    const user_pass = pswdField.value;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&^*]).{8,}$/;

    if (!user_pass) {
      setPswdError('Password is required.');
    } else if (!regex.test(user_pass)) {
      setPswdError('Password does not match requirements.');
    } else {
      const payload = { user_id: userId, user_pass };
      setLoading(true);
      await updatePassword(payload);
      pswdField.value = '';
      setLoading(false);
    }
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
                    <h2>Settings</h2>
                  </div>
                  <div className="formCustom settings">
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-6 py-4">
                        <form onSubmit={detailsFormHandler}>
                          <div className="form-group mb-4">
                            <label>Email</label>
                            <input
                              type="email"
                              name="user_email"
                              className="user-input"
                              placeholder="Enter email address"
                              onChange={detailsChangeHandler}
                              value={settingData?.user_email}
                              required=""
                            />
                            <p
                              style={{
                                color: '#ff6e6e',
                                fontSize: '16px',
                                opacity: 1
                              }}
                            >
                              {errors.user_email}
                            </p>
                          </div>
                          <div className="form-group">
                            <label>Phone</label>
                            <input
                              type="text"
                              name="billing_phone"
                              className="user-input"
                              placeholder="Phone Number"
                              onChange={detailsChangeHandler}
                              value={settingData?.billing_phone}
                              required=""
                            />
                            <p
                              style={{
                                color: '#ff6e6e',
                                fontSize: '16px',
                                opacity: 1
                              }}
                            >
                              {errors.billing_phone}
                            </p>
                            <button
                              type="button"
                              className="btn_wrapper full mt-4"
                              onClick={() => {
                                settingsRef.current.click();
                              }}
                            >
                              Save
                            </button>
                            <input type="submit" ref={settingsRef} hidden />
                          </div>
                        </form>
                      </div>
                      <div className="col-12 col-sm-12 col-md-12 col-lg-6 py-4">
                        <form className="h-100 d-flex flex-column" onSubmit={passwordFormHandler}>
                          <div className="form-group">
                            <label>Password</label>
                            <input
                              type="password"
                              name="password"
                              className="user-input mb-0"
                              placeholder="Enter Password"
                              required=""
                              onChange={() => setPswdError(null)}
                            />
                            <p
                              className="mt-2"
                              style={{
                                color: '#ff6e6e',
                                fontSize: '16px',
                                opacity: 1
                              }}
                            >
                              {pswdError}
                            </p>
                            <p className="mt-3">
                              Strong password requirements: 8+ symbols, combination of uppercase and
                              lowercase latin letters, numbers, and special characters.
                            </p>
                          </div>
                          <div className="form-group mt-auto">
                            <button
                              type="button"
                              onClick={() => {
                                passwordRef.current.click();
                              }}
                              className="btn_wrapper w-100 d-block"
                            >
                              Change Password
                            </button>
                            <input type="submit" ref={passwordRef} hidden />
                          </div>
                        </form>
                      </div>
                    </div>
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

export default Settings;
