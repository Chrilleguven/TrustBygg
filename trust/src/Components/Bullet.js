import React from 'react';

const Bullet = (props) => {
  return (
    <div className='bullet-container'>
      <div className='bullet-top'>
        <p>{props.top}</p>
      </div>
      <div className='bullet-mid'>
        <p>{props.mid}</p>
      </div>
      <div className='bullet-bottom'>
        <p>{props.bottom}</p>
      </div>
    </div>
  );
};

export default Bullet;
