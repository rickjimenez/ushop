import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

const middlewares = [logger];

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
