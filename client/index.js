import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components/app.jsx';
import allReducers from './js/reducers/index';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';

const middleware = applyMiddleware(thunk, promiseMiddleware(), createLogger());
const store = createStore(allReducers, middleware);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);