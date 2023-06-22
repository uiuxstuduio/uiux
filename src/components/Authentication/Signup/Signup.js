import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../authentication.scss';

import logo from '../../../assets/images/logo.svg';
import { Backdrop } from '@mui/material';
import { SignupValidation } from '../../../utils/validation/signuppage';
import { signUp } from '../../../services/auth.service';

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    username: null,
    email: null,
    password: null
  });
  const [invalidError, setInvalidError] = useState('');
  const submitRef = useRef();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setInvalidError('');
    const error = SignupValidation(formData);
    setErrors(error);
    if (
      Object.entries(error)
        .map((item) => item[1])
        .filter((item) => item !== null).length
    )
      return;
    setLoading(true);
    const { data } = await signUp(formData);
    setLoading(false);
    if (data.status === 404) {
      setInvalidError(data.message);
    } else {
      // redirect to login
      navigate('/login');
    }
  };

  const handleInputChange = (e) => {
    const element = e.currentTarget;
    const name = element.name;

    const newData = { ...formData };
    newData[name] = element.value;
    setFormData(newData);
    if (errors[name]) {
      const newError = { ...errors };
      newError[name] = null;
      setErrors(newError);
    }
  };

  return (
    <motion.section
      className="AuthWrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Backdrop
        open={loading}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: '#141414af',
          flexDirection: 'column'
        }}
      >
        <h1>Loading</h1>
      </Backdrop>
      <div className="logo_content">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
      </div>
      <div className="authBlock">
        <div className="heading small">
          <h2>Sign Up</h2>
          {invalidError && (
            <p
              className="display-block text-center"
              style={{
                backgroundColor: '#bb4851',
                color: '##ffffff',
                padding: '1rem 0.5rem',
                fontSize: '16px',
                fontWeight: '600'
              }}
            >
              {invalidError}
            </p>
          )}
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="form-control user-input"
              placeholder="Name"
            />
            {errors.username && <p>{errors.username}</p>}
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-control user-input"
              placeholder="Email or phone number"
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="form-group">
            <input
              type="password"
              value={formData.password}
              name="password"
              onChange={handleInputChange}
              className="form-control user-input"
              placeholder="Password"
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div className="form-group">
            <div className="checkBox">
              <label className="custom-checkbox">
                Remember me
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
          <button
            className="btn_wrapper"
            onClick={() => {
              submitRef.current.click();
            }}
          >
            Create
          </button>
          <input type="submit" hidden ref={submitRef} />
        </form>
        <div className="text_block">
          already have an account? <Link to="/login">sign in</Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Signup;
