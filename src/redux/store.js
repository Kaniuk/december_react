import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {episodeReducer} from "./slices/episode.slice";
import {charactersReducer} from "./slices/character.slice";

const rootReducer = combineReducers({
    episodeReducer,
    charactersReducer,
});

const store = configureStore({
    reducer: rootReducer
});

export {
    store
};