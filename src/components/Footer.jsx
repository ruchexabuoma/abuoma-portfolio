import React from 'react';
import ruchexIMG from '../img/ruchex-abuoma.jpeg';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className='footer'>
      <img src={ruchexIMG} alt='Ruchex Abuoma' />
      <h2>Ruchex Abuoma &copy; {date}</h2>
    </div>
  );
};

export default Footer;
