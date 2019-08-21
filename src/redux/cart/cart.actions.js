import { CartActionTypes } from './cart.type'

export const setHidden = () => ({
    type: CartActionTypes.SET_HIDDEN
})

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})