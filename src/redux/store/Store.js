import { Platform } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';

import { composeWithDevTools } from 'remote-redux-devtools';
import RootReducer from '../reducers';

const middleware = applyMiddleware(thunk, promise, logger);
const composeEnhancers = composeWithDevTools({ name: Platform.OS, hostname: 'localhost', realtime: true, port: 8085 });

const Store = createStore(
    RootReducer,
    composeEnhancers(
        middleware,
    )
);

export default Store;