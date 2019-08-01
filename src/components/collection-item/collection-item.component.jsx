import React from 'react';

import './collection-item.style.scss';

const CollectionItem = ({name, imageUrl, price}) => {
    return(
        <div className="collection-item">
        {/* <div
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        /> */}
        <div className="data-item">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        </div>
    );
}

export default CollectionItem;