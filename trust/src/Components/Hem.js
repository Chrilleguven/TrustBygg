import React from 'react';
import Bullet from './Bullet';

const Hem = () => {
  return (
    <div className='hem-container'>
      <div className='hem-header-container'>
        <p id='title'>VÅRT ARBETSSÄTT – FYRA STEG</p>
        <p id='title-2'>VI UTFÖR ALLA VÅRA PROJEKT UTEFTER DESSA FYRA STEG</p>
      </div>
      <div className='hem-bullet-container'>
        <Bullet
          top='01.'
          mid='PLANERING'
          bottom='Efter överenskommelse med kund bokar vi ett planerings möte angående projektet.'
        />
        <Bullet
          top='02.'
          mid='MATERIAL'
          bottom='Vi kan vara behjälpliga med att införskaffa material inför projektet. Alternativ att kund själva köper materialet.'
        />
        <Bullet
          top='03.'
          mid='GENOMFÖRANDE'
          bottom='Efter bestämt datum påbörjas själva arbetet. Eventuella rivningar påbörjas första dagen. Rivningsmaterial lämnas på återvinningsstation. Först då kan själva renoveringen påbörjas.'
        />
        <Bullet
          top='04.'
          mid='EFTERKONTROLL'
          bottom='Då arbetet har avslutats gör vi en slutbesiktning med kund och ser till att allt har utförts enligt överenskommelse.'
        />
      </div>
    </div>
  );
};

export default Hem;
