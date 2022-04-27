import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cats: [],
    catForUpdate: null
};

const catSlice = createSlice({
    name: 'catSlice',
    initialState: initialState,
    reducers: {
        addCat: (state, action) => {
            const {cat} = action.payload;
            const lastCatId = state.cats[state.cats.length - 1]?.id ?? 0;
            const newCat = {id: lastCatId + 1, name: cat.name};
            state.cats.push(newCat);
        },
        deleteCat: (state, action) => {
            state.cats = state.cats.filter(cat => cat.id !== action.payload.id);
        },
        setCatForUpdate: (state, action) => {
            state.catForUpdate = action.payload.cat;
        },
        updateCat: (state, action) => {
            const {cat: {id, name}} = action.payload;
            const updatedCat = state.cats.find(cat => cat.id === id);
            updatedCat.name = name;
            state.catForUpdate = null;
        }

    }
});

const {reducer: catReducer} = catSlice;

export default catReducer;
export const catActions = catSlice.actions;