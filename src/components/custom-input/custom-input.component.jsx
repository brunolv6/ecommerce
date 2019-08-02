import React from 'react';

import './custom-input.style.scss'

const CustomInput = ({ handleChange, name, ...outros}) => {
    return (
        <div className="group">
            <input className='form-input' name={name} onChange={handleChange} {...outros}/>
                <label
                    className={`${
                    outros.value.length ? 'shrink' : ''
                    } form-input-label`}
                >
                    {name}
                </label>
        </div>
    );
};


export default CustomInput;