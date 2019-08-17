import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

//forma raiz dos reducers com todos eles
export default combineReducers({
    user: userReducer
})