import { CartActionTypes } from './cart.type';

const INITIAL_STATE = {
    hidden: false,
    itens: 0
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
                itens: state.itens+1
            }
        default:
            return{
                ...state
            }
    }
}
