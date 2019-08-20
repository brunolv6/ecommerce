import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({ children, google, invert, cart, ...otherProps }) => (
    <button
      className={`
          ${google? 'google-button': ''} 
          ${invert? 'invert': ''} 
          ${cart? 'cart': ''}
          button`}
      {...otherProps}
    >
      {children}
    </button>
  );


export default CustomButton;