import React, { useState, useEffect } from 'react';
import ProfileSettings from '../Profile-settings/index';
import Sidebar from '../../components/common/Profile-sidebar/sidebar';
import { motion } from 'framer-motion';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Rating from '@mui/material/Rating';
import LoaderAnimation from '../../components/common/LoaderAnimation/LoaderAnimation';
import reviewIcon from '../../assets/images/icon/review-icon.png';
import { useSelector } from 'react-redux';
import { getDownloads, writeReview } from '../../services/download.service';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});

const Downloads = () => {
  const [loading, setLoading] = useState(true);
  const [themesList, setThemesList] = useState([]);
  const [themeId, setThemeId] = useState(null);
  const userId = useSelector((state) => state.user.user_id);
  useEffect(() => {
    fetchDownloads(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //Rating
  const [value, setValue] = useState(null);
  const [ratingError, setRatingError] = useState(null);
  //Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setThemeId(id);
    setShow(true);
  };
  const fetchDownloads = async (userId) => {
    const payload = {
      user_id: userId
    };
    const { data } = await getDownloads(payload);
    if (data.status === 200) {
      setThemesList(data.data);
      // console.log(data.data);
      setLoading(false);
    }
  };
  // Form validation
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;

    if (form.checkValidity() === false || !value) {
      setRatingError(!value ? 'Rating is required' : null);
      setValidated(true);
      return;
    }

    // submit data to backend
    const payload = {
      comment_start: value,
      theme_id: themeId,
      user_id: userId,
      comment_content: form[1].value
    };
    // console.log(payload);
    const { data } = await writeReview(payload);
    if (data.status === 200 || data.status === '200') {
      // reset fields
      form.reset();
      setValue(null);
      setRatingError(null);
      setThemeId(null);
      handleClose();
      // close modal
    }
  };

  const customStyle = {
    '& .MuiRating-icon': {
      color: '#363636'
    },
    '& .MuiRating-iconFilled': {
      color: '#FFB43A'
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <ProfileSettings />
        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-9 col-lg-8">
                <div className="inner_wrapper download_block">
                  <div className="page_title">
                    <h2>Your Download</h2>
                  </div>
                  <div className="inner_block">
                    <div className="card_block">
                      {loading ? (
                        <div
                          style={{ height: '400px' }}
                          className="d-flex align-items-center justify-content-center"
                        >
                          <LoaderAnimation />
                        </div>
                      ) : (
                        <>
                          {themesList.map((val, i) => (
                            <div className="single_card" key={i}>
                              <div className="card_view">
                                <div className="left_block">
                                  <div className="card_img">
                                    <img src={val.theme_image} alt="icon" />
                                  </div>
                                  <div className="card_details">
                                    <h2>{val.theme_name}</h2>
                                    <p>{val.licence_type || 'MIT License'}</p>
                                    <Rating
                                      name="simple-controlled"
                                      value={4.3}
                                      readOnly
                                      precision={0.1}
                                    />
                                  </div>
                                </div>
                                <div className="right_block">
                                  <Button
                                    className="btn_wrapper review"
                                    onClick={() => {
                                      handleShow(val.theme_id);
                                    }}
                                  >
                                    Write Review
                                  </Button>
                                  <a
                                    className="btn_wrapper download"
                                    href={val.download_url}
                                    download
                                  >
                                    Download
                                  </a>
                                </div>
                              </div>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-7">
                <Sidebar />
              </div>
            </div>
          </div>
        </section>

        <Modal
          show={show}
          onHide={handleClose}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <img src={reviewIcon} alt="Review Icon" />
          </Modal.Header>
          <Modal.Body>
            <div className="review">
              <h3>Review this Item</h3>
              <div className="rating_star">
                <Rating
                  sx={customStyle}
                  name="size-large"
                  size="large"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                    setRatingError(null);
                  }}
                />
              </div>
              {ratingError && (
                <p className="py-2" style={{ color: '#ff8585' }}>
                  {ratingError}
                </p>
              )}
            </div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row>
                <Form.Group as={Col} sm="12" controlId="validationCustom01" className="mb-4">
                  <Form.Label>
                    Name <strong style={{ opacity: 1, color: '#ff8787' }}>*</strong>
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Your Name"
                    className="user-input"
                  />
                </Form.Group>

                <Form.Group as={Col} md="12" controlId="validationCustom02" className="mb-4">
                  <Form.Label>
                    Your Review <strong style={{ opacity: 1, color: '#ff8787' }}>*</strong>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Write review"
                    required
                    className="user-input"
                  />
                </Form.Group>
              </Row>
              <button type="submit" className="btn_wrapper w-100">
                Submit
              </button>
            </Form>
          </Modal.Body>
        </Modal>
      </motion.div>
    </ThemeProvider>
  );
};

export default Downloads;
