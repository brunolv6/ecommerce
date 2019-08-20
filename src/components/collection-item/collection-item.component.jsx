import React from 'react';

import CustomButton from '../custom-button/custom-button.component'

import './collection-item.style.scss';

const CollectionItem = ({item}) => {
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
                <CustomButton invert='invert'>Add to Cart</CustomButton>
            </div>
        </div>
    );
}

export default CollectionItem;