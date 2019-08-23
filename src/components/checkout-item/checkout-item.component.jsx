import React from 'react';

import './checkout-item.style.scss'

export const CheckoutItem = ({item}) => (
    <div className='checkout-item'>
        <div className='checkout-image-item'><img src={item.imageUrl} alt={item.name}/></div>
        <div className='checkout-data-item'>{item.name}</div>
        <div className='checkout-data-item'>{item.quantity}</div>
        <div className='checkout-data-item'>${item.price}</div>
        <div className='checkout-remove-item'>X</div>
    </div>
)