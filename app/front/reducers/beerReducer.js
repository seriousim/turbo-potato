const beerReducer = (
    state = {
        bitterness: 'SHOW_ALL',
        color: 'SHOW_ALL',
        alc: 'SHOW_ALL',
        sorting: 'SORT_BY_NAME',
        order: 'ASC_ORDER',
        beer: [],
        }, 
    action) => {

    switch (action.type) {
        case 'GET_BEER_DATA_RECEIVED':
            return {
                ...state,
                beer: action.data.items,
            };
        case 'SET_BITTERNESS':
            return {
                ...state,
                bitterness: action.bitterness,
            };
        case 'SET_COLOR':
            return {
                ...state,
                color: action.color,
            };
        case 'SET_ALC':
            return {
                ...state,
                alc: action.alc,
            };
        case 'SET_SORTING':
            return {
                ...state,
                sorting: action.sorting,
            };
        case 'TOGGLE_ORDER':
            if(state.order == 'ASC_ORDER') {
                return {
                    ...state,
                    order: 'DESC_ORDER',
                }; 
            }
            return {
                ...state,
                order: 'ASC_ORDER',
            }; 
        default:
            return state;
    }
}

export default beerReducer;