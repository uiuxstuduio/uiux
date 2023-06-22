import React from 'react';
import back from '../../assets/images/icon/back.svg';

const BackButton = ({ size = 28, onClick }) => {
  return (
    <span onClick={onClick} style={{ cursor: 'pointer' }}>
      <img src={back} alt="back button" width={size} height={size} />
    </span>
  );
};

export default BackButton;