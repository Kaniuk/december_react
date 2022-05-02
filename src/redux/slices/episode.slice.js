import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodeService} from "../../services";

let initialState = {
    pageInfo: {
        pages: null,
        next: null,
        prev: null,
    },
    episodes: []

};

const getEpisodes = createAsyncThunk(
    'episodeSlice/getEpisodes',
    async (page = 1) => {
        const {data} = await episodeService.getAll(page);
        return data;
    }
);
const getEpisode = createAsyncThunk(
    'episodeSlice/getEpisode',
    async (id) => {
        const {data} = await episodeService.getById(id);
        return data;
    }
);

const episodeSlice = createSlice({
    name: 'episodeSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getEpisodes.fulfilled, (state, {payload}) => {
                const {info, results} = payload;
                state.pageInfo = info;
                state.episodes = results;
            })
            .addCase(getEpisode.fulfilled, (state, {payload: episode}) => {
                state.episodes = [episode];
            });
    }
});

const {reducer: episodeReducer} = episodeSlice;

const episodeActions = {
    getEpisodes,
    getEpisode,
};

export {
    episodeReducer,
    episodeActions
};