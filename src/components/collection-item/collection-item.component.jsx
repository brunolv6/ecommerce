import React from 'react';

import CustomButton from '../custom-button/custom-button.component'

import './collection-item.style.scss';

const CollectionItem = ({name, imageUrl, price}) => {
    return(
        <div className="collection-item">
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="data-item">
                <div className="name">{name}</div>
                <div className="price">${price}</div>
            </div>
            <div className='button-space'>
                <CustomButton invert='invert'>Add to Cart</CustomButton>
            </div>
        </div>
    );
}

export default CollectionItem;