var Config = require('Config');
import axios from 'axios';

const DataService = store => next => action => {
	
	const REST_API_URL = Config.REST_API_URL;
	const beerEndPoint = `${REST_API_URL}/beer`;
	
	next(action)
	switch (action.type) {
	case 'GET_BEER_DATA':
		axios.get(beerEndPoint, {
			headers: {
				Authorization: 'VerySecretToken',
			}
		}).then((response) => {
			next({
				type: 'GET_BEER_DATA_RECEIVED',
				data: response.data,
			});
		}).catch((error) => {
			return next({
				type: 'GET_BEER_DATA_ERROR',
				error: error,
			});
		});	
		break;
	default:
		break
	}

};

export default DataService;
