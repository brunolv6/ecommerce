import React from 'react';

import './collection-overview.style.scss';

import { connect } from 'react-redux';

import CollectionPreview from '../collection-preview/collection-preview.component'

import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'

const CollectionOverview = ({collections}) => (
    <div className='collection-overview'>
        {
            collections.map(collection => (
                    <CollectionPreview key={collection.id} collection={collection}/>
                ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})


export default connect(mapStateToProps)(CollectionOverview);