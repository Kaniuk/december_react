import {combineReducers, configureStore} from "@reduxjs/toolkit";

import dogReducer from "./slices/dog.slice";
import catReducer from "./slices/cat.slice";


const rootReducer = combineReducers({
    dog:dogReducer,
    cat:catReducer
});


const store = configureStore({
    reducer: rootReducer
});

export default store;