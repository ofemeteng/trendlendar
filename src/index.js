import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import  ReduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import App from './containers/app.container';
import rootReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);



ReactDOM.render(
			<Provider store={createStoreWithMiddleware(rootReducer)}>
			<App />
			</Provider>, document.querySelector('.container'));