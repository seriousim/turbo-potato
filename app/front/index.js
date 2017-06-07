import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import beerApp from './reducers';
import DataService from './services/DataService';
import BeerListContainer from './containers/BeerListContainer';

let store = createStore(beerApp,{}, compose(applyMiddleware(DataService), window.devToolsExtension ? window.devToolsExtension() : f => f));

ReactDOM.render((
	<div className="container">
		<Provider store={store}>
			<Router>
				<Switch>
					<Route exact path="/" component={BeerListContainer}/>
				</Switch>
			</Router>
		</Provider>
	</div>
),document.getElementById('root'));

store.dispatch({type: 'GET_BEER_DATA'});