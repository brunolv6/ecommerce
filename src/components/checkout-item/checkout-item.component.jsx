import React from 'react';

import { connect } from 'react-redux';
import { addItem, removeItem, deleteItem } from '../../redux/cart/cart.actions';

import './checkout-item.style.scss'

const CheckoutItem = ({item, addItem, removeItem, deleteItem}) => (
    <div className='checkout-item'>
        <div className='checkout-image-item'><img src={item.imageUrl} alt={item.name}/></div>
        <div className='checkout-data-item'>{item.name}</div>
        <div className='checkout-data-item'>
            <span className="pointer" onClick={() => removeItem(item)}>&#10094;</span>
            <span className='checkout-item-quantity'>{item.quantity}</span>
            <span className="pointer" onClick={() => addItem(item)}>&#10095;</span>
        </div>
        <div className='checkout-data-item'>${item.price}</div>
        <div className='checkout-remove-item pointer' onClick={()=>deleteItem(item)}>&#10008;</div>
    </div>
)

const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
    deleteItem: (item) => dispatch(deleteItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);