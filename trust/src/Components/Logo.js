import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <NavLink to='/'>
      <div className='logo-container'>
        <img
          className='logo'
          style={{ height: '75px', minWidth: '110px' }}
          src={require('../img/Ntrust.png')}
          alt=''
        />
        <div class='middle'></div>
      </div>
    </NavLink>
  );
};

export default Logo;
