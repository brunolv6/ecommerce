import React from 'react';
import CollectionItem from '../collection-item/collection-item.component.jsx';

import './collection-preview.style.scss';

const CollectionPreview = ({ collection }) => {
    return( 
        <div className='collection-preview'>
            <h1 className='title'>{collection.title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    collection.items
                    .filter((item, idx)=> idx<4)
                    .map( ({id, ...outros}) => (
                        <CollectionItem key={id} {...outros}/>
                    ))
                }
            </div>
        </div>
    )
}

export default CollectionPreview;