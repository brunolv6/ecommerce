import { CartActionTypes } from './cart.type';
import { addItemToCart } from './cart.utils'

const INITIAL_STATE = {
    hidden: false,
    itens: []
}

export const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
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
        default:
            return{
                ...state
            }
    }
}
