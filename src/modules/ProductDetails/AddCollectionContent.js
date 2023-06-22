import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { rand } from '../../utils/hash';
import thumb1 from '../../assets/images/product/thumb1.png';
import { addItem } from '../../services/collection.service';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCollections } from '../../redux/reducers/collectionReducer.slice';

const AddCollectionContent = ({
  userLogin,
  collections,
  selectedCollection,
  setSelectedCollection,
  setToCollection,
  themeId,
  close
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.user.user_id);
  const addToCollectionHandler = async () => {
    const payload = {
      collection_id: selectedCollection,
      theme_id: themeId
    };
    const { status } = await addItem(payload);
    if (status === 200) {
      dispatch(fetchCollections({ user_id: userId }));
      setSelectedCollection(null);
      close();
    }
  };
  return userLogin ? (
    <>
      <div className="review">
        <h3>Add this Item to a Collection</h3>
        <p>Ndecentral - NFT Marketplace React Theme</p>
      </div>
      {!collections?.length ? (
        <div className="no_collection">
          <p>You have no Collections yet</p>
        </div>
      ) : (
        <div className="prev_collection">
          <div className="collect_card">
            {collections.map((element) => (
              <div
                key={rand()}
                className={`card_box ${element.id === selectedCollection ? 'selected' : ''}`}
                onClick={() => setSelectedCollection(element.id)}
              >
                <div className="card_img">
                  <img src={thumb1} alt="icon"></img>
                </div>
                <div className="card_detail">
                  <h2>{element.collection_name}</h2>
                  <p>
                    {element.item_count} item
                    {Number(element.item_count) === 1 ? '' : 's'} | 13 Sep 2022
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="btn_group">
        <Button className="btn_wrapper create" onClick={setToCollection}>
          Create a new collection
        </Button>
        <Button
          type="submit"
          className="btn_wrapper done_btn"
          onClick={addToCollectionHandler}
          disabled={!selectedCollection}
        >
          Done
        </Button>
      </div>
    </>
  ) : (
    <>
      <div className="review">
        <h3>You are not logged in!</h3>
        <p>You need to Sign into an account in order to continue.</p>
      </div>

      <button className="mt-5 mx-auto btn_wrapper" onClick={() => navigate('/login')}>
        Sign In
      </button>
    </>
  );
};

export default AddCollectionContent;
