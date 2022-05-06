import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {carReducer} from "./slices/car.slice";


const rootReducer = combineReducers({
    cars: carReducer
});

const store = configureStore({
    reducer: rootReducer
});

export {
    store
};