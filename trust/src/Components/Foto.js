import React from 'react';

const Foto = () => {
  function importAll(r) {
    const images = [];
    r.keys().map((item, index) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context('../galleri', false, /\.(png|jpe?g|svg)$/)
  );

  function laddaInBilderFranGalleri(images) {
    const imageNames = Object.keys(images).map((key) => (
      <img id='galleri-foto' src={require('../galleri/' + key)} alt=''></img>
    ));
    return <div className='galleri-album'>{imageNames}</div>;
  }

  return <div>{laddaInBilderFranGalleri(images)}</div>;
};

export default Foto;
