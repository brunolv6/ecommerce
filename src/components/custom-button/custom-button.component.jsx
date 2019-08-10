import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({ children, google, ...otherProps }) => (
    <button
      className={`${google? 'google-button': ''} button`}
      {...otherProps}
    >
      {children}
    </button>
  );


export default CustomButton;