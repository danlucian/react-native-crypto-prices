import axios from 'axios';
import { apiBaseURL } from '../../common/Constants';
import { 
    FETCHING_COIN_DATA, 
    FETCH_COIN_DATA_SUCCESS, 
    FETCH_COIN_DATA_ERROR 
} from '../../common/ActionTypes';

export default function FetchCoinData() {
    return dispatch => {
        dispatch({ type: FETCHING_COIN_DATA });
    
        return axios.get(`${apiBaseURL}/v1/ticker/?limit=10`)
            .then(response => {
                dispatch({ type: FETCH_COIN_DATA_SUCCESS, payload: response.data })
            })
            .catch(error => {
                dispatch({ type: FETCH_COIN_DATA_ERROR, payload: error.data })
            });
        }
}