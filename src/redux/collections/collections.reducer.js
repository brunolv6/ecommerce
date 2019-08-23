import SHOP_DATA from './shop.data';

const INITIAL_STATE = {
    collections: SHOP_DATA
}

export const collectionsReducer = (state=INITIAL_STATE, action) => {
    switch(action){
        default:
            return{
                ...state
            }
    }
}