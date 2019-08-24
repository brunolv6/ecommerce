import React from 'react';

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import './checkout-page.style.scss'
import { selectCartItems, selectCartTotalPrice } from '../../redux/cart/cart.selectors';
import StripeButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({itens, itensTotal}) => (
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
        <div className='checkout-total'>
            <div className='total-display'>Total: ${itensTotal}</div>
            <div><StripeButton price={itensTotal}/></div>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    itens: selectCartItems,
    itensTotal: selectCartTotalPrice
})

export default connect(mapStateToProps)(CheckoutPage);