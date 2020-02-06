import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';

const middlewares = [logger, thunk];

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
