import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({ children, google, invert, ...otherProps }) => (
    <button
      className={`${google? 'google-button': ''} ${invert? 'invert': ''} button`}
      {...otherProps}
    >
      {children}
    </button>
  );


export default CustomButton;