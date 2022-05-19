import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


import citiesReducer from "./reducers/citiesReducer";
import reviewsReducer from "./reducers/reviewsReducer";
import propertiesReducer from "./reducers/propertiesReducer";

const store = createStore(combineReducers({
    cities: citiesReducer,
    reviews: reviewsReducer,
    properties: propertiesReducer
}), composeWithDevTools(applyMiddleware(thunk)));

export default store;