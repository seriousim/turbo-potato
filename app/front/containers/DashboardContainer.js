import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';

function getFilters(key, movies) {
  return movies.reduce((acc, movie) => {
    if (!acc.includes(movie[key])) {
      return [...acc, movie[key]];
    }
    return acc;
  }, []).sort();
}

const mapStateToProps = (state) => {
	const { bitterness, color, alc, beer } = state.beerReducer;
	const { loading } = state;
	return {
		selectedBitterness: bitterness,
		selectedColor: color,
		selectedAlc: alc,
		bitternesses: getFilters('bitterness', beer),
		colors: getFilters('color', beer),
		alcs: getFilters('alc', beer),
		loading,

	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		onBitternessChange(bitterness) {
			dispatch({
				type: 'SET_BITTERNESS',
				bitterness,
			});
		},
		onColorChange(color) {
			dispatch({
				type: 'SET_COLOR',
				color,
			});
		},
		onAlcChange(alc) {
			dispatch({
				type: 'SET_ALC',
				alc,
			});
		},
		onRefreshBeer: () => {
			dispatch({type: 'GET_BEER_DATA'});
		},
	};
}

const DashboardContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Dashboard);

export default DashboardContainer;