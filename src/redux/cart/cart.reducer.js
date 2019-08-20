import { CartActionTypes } from './cart.type';

const INITIAL_STATE = {
    hidden: true
}

export const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionTypes.SET_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return{
                ...state
            }
    }
}
