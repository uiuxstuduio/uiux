import React, { useRef, useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCollections } from '../../redux/reducers/collectionReducer.slice';
import { addCollection } from '../../services/collection.service';

const CreateCollectionContent = ({ setToItem }) => {
  const form = useRef();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.user_id);
  const [validated, setValidated] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const validity = handleValidity(form);
    if (validity) {
      const collectionName = form[0].value;
      const payload = {
        user_id: userId,
        collection_name: collectionName
      };
      const { status } = await addCollection(payload);
      if (status === 200) {
        dispatch(fetchCollections({ user_id: userId }));
        form.reset();
        setToItem();
      }
    }
  };
  const handleValidity = (form) => {
    const validity = form.checkValidity();
    if (validity) {
      // send req
      setValidated(false);
    } else {
      setValidated(true);
    }
    return validity;
  };
  const handleCancel = () => {
    form.current.reset();
    setValidated(false);
    setToItem();
  };
  return (
    <>
      <div className="review">
        <h3>Create a new collection</h3>
        <p>Ndecentral - NFT Marketplace React Theme</p>
      </div>
      <div className="create_form">
        <Form noValidate validated={validated} ref={form} onSubmit={handleSubmit}>
          <Row>
            <Form.Group as={Col} sm="12" controlId="validationCustom01">
              <Form.Label>Name*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Choose a name that is meaningful and descriptive"
                className="user-input"
              />
            </Form.Group>
          </Row>
          <div className="btn_group">
            <Button className="btn_wrapper done_btn" onClick={handleCancel}>
              Cancel
            </Button>
            <Button className="btn_wrapper create" type="submit">
              Create a new collection
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default CreateCollectionContent;
