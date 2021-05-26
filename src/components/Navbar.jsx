import React, { Fragment } from 'react';
import ruchexIMG from '../img/ruchexabuoma.jpeg';

const Navbar = () => {
  return (
    <Fragment>
      <div className='navbar'>
        <div className='img-div'>
          <img src={ruchexIMG} alt='Ruchex Abuoma' />
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
