import React from 'react';

/* import { Route } from 'react-router-dom'; */

import './shop-page.style.scss';
import CategoryPage from '../category-page/category-page.component';

const ShopPage = () => {
    return(
        <div className='shop-page'>
            <CategoryPage/>
        </div>
    );
}

export default ShopPage;