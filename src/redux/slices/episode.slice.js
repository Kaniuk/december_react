import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodeService} from "../../services";

let initialState = {
    next: null,
    prev: null,
    pages: null,
    episodes: []

};

const getEpisodes = createAsyncThunk(
    'episodeSlice/getEpisodes',
    async ({page}) => {
        const {data} = await episodeService.getAll({page});
        return data;
    }
);

const episodeSlice = createSlice({
    name: 'episodeSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(action => {
                debugger
                return false;
            });
    }
});

const {reducer: episodeReducer} = episodeSlice;

const episodeActions = {
    getEpisodes
};

export {
    episodeReducer,
    episodeActions
};