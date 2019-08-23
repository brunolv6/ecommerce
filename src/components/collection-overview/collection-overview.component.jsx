import React from 'react';

import './collection-overview.style.scss';

import { connect } from 'react-redux';

import CollectionPreview from '../collection-preview/collection-preview.component'

const CollectionOverview = ({collections}) => (
    <div className='collection-overview'>
        {
            collections.collections.map(collection => (
                    <CollectionPreview key={collection.id} collection={collection}/>
                ))
        }
    </div>
)

const mapStateToProps = (state) => ({
    collections: state.collections
})


export default connect(mapStateToProps)(CollectionOverview);