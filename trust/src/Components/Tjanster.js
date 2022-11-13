import React from 'react';

const Tjanster = () => {
  const tjanst = [
    'Bygg',
    'Målning',
    'Fasader',
    'Takrenoverng',
    'Altaner',
    'Markarbeten',
    'Dränerig',
    'Stenläggning',
    'Murning',
    'Gräsanläggning',
    'Övrig',
  ];

  function laddaInOlikaTjanster(tjanst) {
    const objectlist = [];
    console.log(tjanst);
    tjanst.forEach((item, i) =>
      objectlist.push(<div className='tjanster-text'>- {item}</div>)
    );
    return <div classname='tjanster-text-list'>{objectlist}</div>;
  }

  return (
    <div className='tjanster-container'>
      <div className='tjanster-text-container'>
        <div className='tjanster-header-container'>
          <h2 className='tjanster-header' style={{ margin: 0 }}>
            VÅRA TJÄNSTER
          </h2>
        </div>
        <br></br>
        {laddaInOlikaTjanster(tjanst)}
      </div>
    </div>
  );
};

export default Tjanster;
