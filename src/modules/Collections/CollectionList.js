import Select from 'react-select';
import React from 'react';

import list from '../../assets/images/icon/list-view.svg';
import box from '../../assets/images/icon/box-view.svg';
import menuIcon from '../../assets/images/icon/menu-icon.svg';
import folderIcon from '../../assets/images/icon/folder.svg';

const CollectionList = ({ cName, setClassName, collections, setPage, setSelectedCollection }) => {
  const options = [
    { value: 'Recently listed', label: 'Recently listed' },
    { value: 'Recently created', label: 'Recently created' },
    { value: 'Recently sold', label: 'Recently sold' },
    { value: 'Recently received', label: 'Recently received' },
    { value: 'Ending soon', label: 'Ending soon' },
    { value: 'Price low to high', label: 'Price low to high' },
    { value: 'Price high to low', label: 'Price high to low' },
    { value: 'Highest last sale', label: 'Highest last sale' },
    { value: 'Oldest', label: 'Oldest' }
  ];
  //React select style
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      boxShadow: 'none !important',
      backgroundColor: state.isFocused ? '#000000b5' : '#000',
      color: state.isFocused ? '#fcc003' : '#fff',
      padding: 11,
      lineHeight: 1.2
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'rgba(255, 255, 255, 1)'
    })
  };
  return (
    <div className="inner_wrapper collection_block">
      <div className="page_title">
        <h2>Your Collections</h2>
      </div>
      <div className="topbar">
        <div className="leftside">
          <div className="sort">
            <label>Sort by:</label>
            <form action="">
              <Select styles={customStyles} options={options} placeholder="Sort by" />
            </form>
          </div>
        </div>
        <div className="rightside">
          <div className="view_wrapper">
            <div
              className={cName === 'jsGridView' ? 'listView active' : 'listView'}
              onClick={() => setClassName('jsListView')}
            >
              <img src={list} alt="icon" />
            </div>
            <div
              className={cName === 'jsListView' ? 'boxView active' : 'boxView'}
              onClick={() => setClassName('jsGridView')}
            >
              <img src={box} alt="icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="inner_block">
        <div className={cName === 'jsGridView' ? 'card_block card_box_view row' : 'card_block'}>
          {collections.map((val, i) => (
            <div
              className="single_card"
              key={i}
              onClick={() => {
                setSelectedCollection(val.id);
                setPage(1);
              }}
            >
              <div className="card_view">
                <span className="menuIcon">
                  <img src={menuIcon} alt="icon" />
                </span>
                <div className="left_block">
                  <div className="card_img">
                    <img src={folderIcon} alt="icon" />
                  </div>
                  <div className="card_details">
                    <h2>{val.collection_name}</h2>
                    <p>
                      {val.item_count} item{val.item_count === 1 ? '' : 's'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionList;
