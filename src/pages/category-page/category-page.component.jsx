import React from 'react';

import { connect } from 'react-redux';

import './category-page.style.scss';

import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CategoryPage = ({match, collection}) => (
    <div className='category-page'>
        <h1 className="category-title">{match.params.categoryId.toUpperCase()}</h1>
        <div className='category-items'>
            {
                collection.items.map(item => (
                    <CollectionItem key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
)

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(CategoryPage);