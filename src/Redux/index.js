
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Axios from 'axios';

//action type
const GET_ALL_RAPPERS = 'GET_ALL_RAPPERS';

//action creators
export const init = allRappers => ({ type: GET_ALL_RAPPERS, result: allRappers })

//Thunk Creator
export function getAllRappers() {
    // thunk
    return function thunk(dispatch) {
        return Axios.get('http://localhost:3000/rappers')
            .then(res => res.data)
            .then(rappers => {
                const action = init(rappers);
                dispatch(action);
            }
            )
            .catch(error => console.log('This is the error' + error))
    }
}

// initial state of the store
const initialState = {}

// reducer
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_RAPPERS:
            return {
                allRappers: action.result
            }

        default:
            return state
    }

}

//store
export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

