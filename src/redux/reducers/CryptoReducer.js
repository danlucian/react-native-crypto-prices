import { 
    FETCHING_COIN_DATA, 
    FETCH_COIN_DATA_SUCCESS, 
    FETCH_COIN_DATA_ERROR 
} from '../../common/ActionTypes';

const initialSate = {
    isFetching: null,
    data: [],
    hasError: false,
    errorMessage: null,
};

export default function(state = initialSate, action) {
    switch(action.type) {
        case FETCHING_COIN_DATA:
            return Object.assign({}, state, {
                isFetching: true,
                data: null,
                hasError: false,
                errorMessage: null
            });
        
        case FETCH_COIN_DATA_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
                hasError: false,
                errorMessage: null
            });
        
        case FETCH_COIN_DATA_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
                hasError: true,
                errorMessage: action.error
            });
            
        default:
            return state;
    }
}