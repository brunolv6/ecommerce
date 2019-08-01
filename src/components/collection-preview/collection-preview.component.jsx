import React from 'react';
import CollectionItem from '../collection-item/collection-item.component.jsx';

import './collection-preview.style.scss';

const CollectionPreview = ({ collection }) => {
    return( 
        <div className='collection-preview'>
            <h1 clasName='title'>{collection.title}</h1>
            <div className='preview'>
                {
                    collection.items.map( ({id, ...outros}) => (
                        <CollectionItem key={id} {...outros}/>
                    ))
                }
            </div>
        </div>
    )
}

export default CollectionPreview;