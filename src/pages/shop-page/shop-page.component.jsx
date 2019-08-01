import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx'

import './shop-page.style.scss';

import SHOP_DATA  from './shop.data';

class ShopPage extends React.Component {
     constructor(){
        super();
        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        return(
            <div className='shop-page'>
                {
                    this.state.collections.map(collection => (
                        <CollectionPreview key={collection.id} collection={collection}/>
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;