import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.itens
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartQuantity = createSelector(
    [selectCartItems],
    itens => itens.reduce((acc, item) => acc=acc+item.quantity, 0)   
)