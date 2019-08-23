import React from 'react';

import './category-page.style.scss';

import { connect } from 'react-redux';

import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx'

const CategoryPage = ({collections}) => (
    <div className='category-page'>
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


export default connect(mapStateToProps)(CategoryPage);