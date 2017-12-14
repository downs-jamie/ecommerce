

import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';

import ProductLineReducer from './ProductLineReducer';

const RootReducer = combineReducers({
	auth: AuthReducer,
	pl: ProductLineReducer
})

export default RootReducer;