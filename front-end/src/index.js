import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';



// import registerServiceWorker from './registerServiceWorker';
// import Student from './Student';

import RootReducer from './reducers/RootReducer';

import reduxPromise from 'redux-promise'

ReactDOM.render(
	<App />,
	document.getElementById('root')
);

