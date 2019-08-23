import React from 'react';

import { CheckoutItem } from '../../components/checkout-item/checkout-item.component'

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import './checkout-page.style.scss'
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CheckoutPage = ({itens}) => (
    <div className="checkout-page">
        <div className='checkout-blocks'>
            <div className='checkout-data'>Image</div>
            <div className='checkout-data'>Name</div>
            <div className='checkout-data'>How Many</div>
            <div className='checkout-data'>Price</div>
            <div className='checkout-remove'>Remove</div>
        </div>
        {
            itens.map(item => (
                <CheckoutItem key={item.id} item={item}/>
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    itens: selectCartItems
})

export default connect(mapStateToProps)(CheckoutPage);