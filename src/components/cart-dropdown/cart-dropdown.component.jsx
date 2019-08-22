import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors'

import './cart-dropdown.style.scss';

import CustomButtom from '../custom-button/custom-button.component'

class CartDropdown extends React.Component{
    render(){
        return(
            <div className="cart-dropdown">
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
                <CustomButtom cart>Buy It Now!</CustomButtom>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    itens: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);

