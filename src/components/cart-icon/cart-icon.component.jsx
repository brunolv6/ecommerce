import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.style.scss';

const CartIcon = () => (
    <div>
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon'/>
        <div className='items-number'>0</div>
    </div>
    <div className="cart-dropdown">Ola</div>
    </div>
)

export default CartIcon;