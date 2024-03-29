import {combineReducers} from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// actions
export function getHotelsSuccess(hotels) {
    return {
        type: 'GET_HOTELS_SUCCESS',
        hotels
    };
}

export function getHotels() {
    return (dispatch) => {
        fetch("/api/v1/hotels")
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((respJson) => dispatch(getHotelsSuccess(respJson.data)));
    };
}

export function createHotel(hotelAttributes) {
    return (dispatch) => {
        return fetch("/api/v1/hotels", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              hotel: hotelAttributes,
            }),
          })
        .then((resp) => resp.json());
    }
}

// reducers
export function hotels(state = [], action) {
    switch (action.type) {
        case 'GET_HOTELS_SUCCESS':
            return action.hotels;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    hotels
});


// store
export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    )
}


// state: {
//     hotels: [{name: "hilton"}, {}, {}]
// }