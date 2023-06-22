import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import closeIcon from '../../assets/images/icon/close.svg';
import BackButton from '../../components/common/BackButton';
import LoaderAnimation from '../../components/common/LoaderAnimation/LoaderAnimation';
import { deleteItem, listCollectionItems } from '../../services/collection.service';

import { fetchCollections } from '../../redux/reducers/collectionReducer.slice';
const ItemList = ({ onClick, selectedCollection }) => {
  const [items, setItems] = useState([]);
  const userId = useSelector((state) => state.user.user_id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    populateItems(selectedCollection);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const populateItems = async (collectionId) => {
    const payload = { id: collectionId };
    const { data } = await listCollectionItems(payload);
    if (data.status === 200) {
      const items = data.data[0].item_data;
      // console.log(items);
      setItems(items);
    }
  };
  const deleteItemHandler = async (themeId) => {
    const payload = { collection_id: selectedCollection, theme_id: themeId };
    const { data } = await deleteItem(payload);
    if (data.status === 200) {
      setItems((prev) => prev.filter((item) => item.id !== themeId));
      dispatch(fetchCollections({ user_id: userId }));
    }
  };
  return (
    <div className="inner_wrapper collection_block">
      <div className="page_title d-flex align-items-center" style={{ gap: '10px' }}>
        <BackButton size={25} onClick={onClick} />
        <h2 className="mb-1">Collections Items</h2>
      </div>
      <div className="inner_block">
        {items.length !== 0 ? (
          <div className={'card_block'}>
            {/* to loop */}
            {items.map((item, index) => (
              <div key={index} className="collection_item">
                <div className="card_view">
                  <span className="removeIcon" onClick={() => deleteItemHandler(item.id)}>
                    <img src={closeIcon} alt="icon" />
                  </span>
                  <div className="left_block">
                    <div className="card_img">
                      <img src={item.product_image} alt="icon" />
                    </div>
                    <div className="card_details">
                      <h2>{item.name}</h2>
                      <p>License type: {item.license_type}</p>
                    </div>
                    <div className="d-inline visitBtn align-self-end ms-auto">
                      <button onClick={() => navigate(`/product-details/${item.id}`)}>
                        View Theme
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: '300px' }}
          >
            <LoaderAnimation />
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemList;
