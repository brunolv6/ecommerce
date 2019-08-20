import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { cartReducer } from './cart/cart.reducer';

//forma raiz dos reducers com todos eles
export default combineReducers({
    user: userReducer,
    cart: cartReducer
})