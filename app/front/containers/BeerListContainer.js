import { connect } from 'react-redux';
import BeerList from '../components/BeerList';

function getVisibleBeer(bitterness, color, alc, sorting, order, beer) {
  return beer
    .filter(b => {
      return (
        (bitterness == 'SHOW_ALL' || bitterness == b.bitterness) &&
        (color == 'SHOW_ALL' || color == b.color) &&
        (alc == 'SHOW_ALL' || alc == b.alc)
      );
    })
    .sort((a, b) => {
    	if(order == 'DESC_ORDER') {
    		switch (sorting) {
	    		case 'SORT_BY_NAME':
	    			return a.name < b.name ? 1 : a.name > b.name ? -1 : 0;
	    		case 'SORT_BY_BITTERNESS':
	    			return b.bitterness - a.bitterness;
	    		case 'SORT_BY_COLOR':
	    			return a.color < b.color ? 1 : a.color > b.color ? -1 : 0;
	    		case 'SORT_BY_ALC':
	    			return b.alc - a.alc;
	    	}
    	} else {
    		switch (sorting) {
	    		case 'SORT_BY_NAME':
	    			return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
	    		case 'SORT_BY_BITTERNESS':
	    			return a.bitterness - b.bitterness;
	    		case 'SORT_BY_COLOR':
	    			return a.color > b.color ? 1 : a.color < b.color ? -1 : 0;
	    		case 'SORT_BY_ALC':
	    			return a.alc - b.alc;
	    	}
    	}
    	
    });
}

const mapStateToProps = (state) => {
	const { bitterness, color, alc, sorting, order, beer } = state.beerReducer;
	return {
		beer: getVisibleBeer(bitterness, color, alc, sorting, order, beer),
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSortingChange(sorting) {
			dispatch({
				type: 'SET_SORTING',
				sorting,
			});
			dispatch({
				type: 'TOGGLE_ORDER',
			});
		},
	}
}

const BeerListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(BeerList);

export default BeerListContainer;

function keysrt(key,desc) {
	return function(a,b){
	return desc ? ~~(a[key] < b[key]) : ~~(a[key] > b[key]);
	}
}