import React from 'react';

import './cart-dropdown.style.scss';

import CustomButtom from '../custom-button/custom-button.component'

const CartDropdown = () => (
    <div className="cart-dropdown">
        <CustomButtom cart>Buy It Now!</CustomButtom>
    </div>
)

export default CartDropdown;

