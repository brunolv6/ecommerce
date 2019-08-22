import { CartActionTypes } from './cart.type';

const INITIAL_STATE = {
    hidden: false,
    itens: []
}

const addItemToCart = (itemList, newItem) => {
    let itemAlreadyOnCart = itemList.find(cartItem => (
        cartItem.id === newItem.id
    ))

    if(itemAlreadyOnCart){
        return itemList.map(cartItem => (
            cartItem === itemAlreadyOnCart
            ? {...cartItem, quantity: cartItem.quantity+1}
            : cartItem
        ))
    }else{
        return [...itemList, {...newItem, quantity: 1}]
    }   
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
