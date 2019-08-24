import React from 'react';

import { Switch, Route } from 'react-router-dom';

import './shop-page.style.scss';
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import CategoryPage from '../category-page/category-page.component';

const ShopPage = ({match}) => {
    return(
        <div className='shop-page'>
            <Switch>
                <Route exact path={`${match.path}`} component={CollectionOverview}/>
                <Route path={`${match.path}/:categoryId`} component={CategoryPage}/>
            </Switch>
        </div>
    );
}

export default ShopPage;