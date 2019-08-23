import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartQuantity } from '../../redux/cart/cart.selectors'
import { setHidden } from '../../redux/cart/cart.actions';

import { withRouter } from 'react-router-dom';

import './cart-dropdown.style.scss';

import CustomButtom from '../custom-button/custom-button.component'


class CartDropdown extends React.Component{
    render(){
        console.log(this.props);
        return(
            <div className="cart-dropdown">
                {
                    this.props.quantityItens?
                    <div className="cart-items">
                        {
                            this.props.itens.map(item => (
                                <div key={item.id} className="item">
                                    <img src={item.imageUrl} alt={item.name} className="item-image"/>
                                    <div className='item-data'>
                                        <div>{item.name}</div>
                                        <div>{item.quantity}x{item.price}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    : <div className='cart-empty'>Your cart is empty</div>
                }
                <CustomButtom cart onClick={()=> {
                    this.props.history.push('/checkout');
                    this.props.dispatch(setHidden());
                }}>Go To Checkout</CustomButtom>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    itens: selectCartItems,
    quantityItens: selectCartQuantity
})

export default withRouter(connect(mapStateToProps)(CartDropdown));

