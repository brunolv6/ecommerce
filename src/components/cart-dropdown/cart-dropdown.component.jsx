import React from 'react';

import { connect } from 'react-redux';

import './cart-dropdown.style.scss';

import CustomButtom from '../custom-button/custom-button.component'

class CartDropdown extends React.Component{
    render(){
        return(
            <div className="cart-dropdown">
                {
                    this.props.itens.map(item => (
                        <div key={item.key} className="item">
                            <img src={item.url} alt={item.name} className="item-image"/>
                            <div>{item.name}</div>
                            <div>1</div>
                        </div>
                    ))
                }
                <CustomButtom cart>Buy It Now!</CustomButtom>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    itens: state.cart.itens
})

export default connect(mapStateToProps)(CartDropdown);

