import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { cartReducer } from './cart/cart.reducer';
import { directoryReducer } from './directory/directory.reducer';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { shopReducer } from './shop/shop.reducer';

//configurar persist
//Por ordem: a partir de onde do redux, onde quero guardar e o que do objeto do redux
//No caso apenas o cart, porque o user quem guarda é o firebase
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

//forma raiz dos reducers com todos eles
//se não houvesse persist, este seria o export default combineReducers(...)
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

//retorna rootReducer configurado para armazenar parte dele no localStorage
export default persistReducer( persistConfig, rootReducer)