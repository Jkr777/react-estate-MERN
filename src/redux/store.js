import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


import citiesReducer from "./reducers/citiesReducer";
import reviewsReducer from "./reducers/reviewsReducer";
import propertiesReducer from "./reducers/propertiesReducer";
import propertyReducer from "./reducers/propertyReducer";

const store = createStore(combineReducers({
    cities: citiesReducer,
    reviews: reviewsReducer,
    properties: propertiesReducer,
    property: propertyReducer
}), composeWithDevTools(applyMiddleware(thunk)));

export default store;