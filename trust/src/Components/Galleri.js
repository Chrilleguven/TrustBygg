import React from 'react';
import Foto from './Foto';

const Galleri = () => {
  return (
    <div className='galleri-container'>
      <p style={{ marginTop: '50px', fontSize: '2rem' }}>GALLERI</p>
      <div className='galleri-foto-container'>
        <Foto />
      </div>
    </div>
  );
};

export default Galleri;
