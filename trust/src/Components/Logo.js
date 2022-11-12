import React from 'react';
import { NavLink, Link, Router } from 'react-router-dom';

const Logo = () => {
  return (
    <NavLink to='/'>
      <a href=''>
        <div className='logo-container'>
          <img
            className='logo'
            style={{ height: '75px', minWidth: '110px' }}
            src={require('../img/Ntrust.png')}
          />
          <div class='middle'></div>
        </div>
      </a>
    </NavLink>
  );
};

export default Logo;
