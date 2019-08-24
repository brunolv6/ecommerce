import { CartActionTypes } from './cart.type';
import { addItemToCart } from './cart.utils'
import { removeItemFromCart, deleteItemFromCart } from './cart.utils'

import { REHYDRATE } from 'redux-persist/es/constants';

const INITIAL_STATE = {
    hidden: false,
    itens: []
}

export const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case REHYDRATE:
            if (action.payload && action.payload.cart) {
                return { ...state, ...action.payload.cart };
            }
            return state;
        case CartActionTypes.SET_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                itens: addItemToCart(state.itens, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                itens: removeItemFromCart(state.itens, action.payload)
            }
        case CartActionTypes.DELETE_ITEM:
            return{
                ...state,
                itens: deleteItemFromCart(state.itens, action.payload)
        }
        default:
            return{
                ...state
            }
    }
}
