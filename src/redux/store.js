import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

//contêm objeto com tosos os estados
import rootReducer from './root-reducer';

//responsável por pegar a ação e trazer para o reducer agir sobre ela
//antes do DOM
const middlewares = [logger];

//cria o objeto com o estado e com o interceptador de ações (middleware)
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
