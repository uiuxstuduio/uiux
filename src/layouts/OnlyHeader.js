import React from 'react';
import Header from '../components/common/Header/Header';

const OnlyHeader = ({ component }) => {
  return (
    <>
      <Header />
      <main style={{ marginTop: '100px' }}>{component}</main>
    </>
  );
};

export default OnlyHeader;
