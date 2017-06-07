import { combineReducers } from 'redux';
import beerReducer from './beerReducer';
import loading from './loading';

const showreelApp = combineReducers({
	beerReducer,
	loading,
});

export default showreelApp;
