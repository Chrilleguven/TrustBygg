import React from 'react';
import ContactForm from './ContactForm';

const Kontakt = () => {
  return (
    <div className='kontakt-container'>
      <div className='kontakt-header-container'>
        <p className='kontakt-header' style={{ margin: 0 }}>
          KONTAKTA OSS
        </p>
      </div>
      <br></br>
      <div className='kontakt-form-container'>
        <div className='kontakt-form'>
          <ContactForm />
        </div>
        <div className='kontakt-text-container'>
          <div className='kontakt-text-header'>
            <p className='kontakt-text-header-text'>
              ÖNSKAR DU ETT FRITT KOSTNADSFÖRSLAG?
            </p>
          </div>
          <div className='kontakt-text'>
            <p>
              Vänligen kontakta oss via svarsformuläret, så svarar vi så fort vi
              kan. Du kan även nå oss via telefon eller mail.
            </p>
            <br></br>
            <a href='tel:072 441 47 12'>Tel: 072 441 47 12</a>
            <br></br>
            <a href='mailto: trustbygg1@gmail.com'>
              Mejl: TrustBygg1@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
