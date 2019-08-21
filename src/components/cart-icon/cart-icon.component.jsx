import React from 'react';

import { connect } from 'react-redux';
import { setHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import './cart-icon.style.scss';

class CartIcon extends React.Component{
    render(){
        return(
            <div>
            <div className='cart-icon' onClick={this.props.setHidden}>
                <ShoppingIcon className='shopping-icon'/>
                <div className='items-number'>{this.props.itens.length}</div>
            </div>
            {
                this.props.hidden?
                <CartDropdown/>
                :null
            }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    hidden: state.cart.hidden,
    itens: state.cart.itens
})

const mapDispatchToProps = dispatch => ({
    setHidden: () => dispatch(setHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);