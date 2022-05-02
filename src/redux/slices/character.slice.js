import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {characterService, episodeService} from "../../services";

let initialState = {
    characters: {}
};

const getCharacters = createAsyncThunk(
    'charactersSlice/getCharacters',
    async (episodeId, {getState}) => {
        const {episodeReducer: {episodes}} = getState();
        const episode = episodes.find(({id}) => id == episodeId);
        if (episode) {
            const charactersIds = episode.characters.map(
                character => character.split('/').slice(-1)[0]
            );

            const {data: characters} = await characterService.getById(charactersIds);
            return {characters, episodeId};

        }

    }
);

const charactersSlice = createSlice({
    name: 'charactersSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCharacters.fulfilled, (state, {payload}) => {
                const {characters, episodeId} = payload;
                
                state.characters[episodeId] = characters;
            });
    }
});

const {reducer: charactersReducer} = charactersSlice;

const charactersActions = {
    getCharacters,
};

export {
    charactersReducer,
    charactersActions
};