import React from 'react';
import background from '../img/testbackroundpic.jpg';

const Hem = () => {
  return (
    <div
      className='hem-container'
      id='background-pic'
      style={{
        backgroundImage: `url(${background})`,
      }}
    ></div>
  );
};

export default Hem;
