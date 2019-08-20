import React from 'react';

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions'

import CustomButton from '../custom-button/custom-button.component'

import './collection-item.style.scss';

class CollectionItem extends React.Component{
    
    render(){
        const { item } = this.props;
        return(
            <div className="collection-item">
                <div
                    className='background-image'
                    style={{
                        backgroundImage: `url(${item.imageUrl})`
                    }}
                />
                <div className="data-item">
                    <div className="name">{item.name}</div>
                    <div className="price">${item.price}</div>
                </div>
                <div className='button-space'>
                    {/* Tentar entender porque precisa do !this.props! */}
                    <CustomButton invert='invert' onClick={this.props.addItem}>Add to Cart</CustomButton>
                </div>
            </div>
        );
    }
}

//faco esta action e modifico estado do  objeto do reducer
const mapDispatchToProps = dispatch => ({
    addItem: () => dispatch(addItem())
})

export default connect(null, mapDispatchToProps)(CollectionItem);