import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({value, cor}) => {
    return (
        <button className='button' type='submit'>{value}</button>
    );
};


export default CustomButton;