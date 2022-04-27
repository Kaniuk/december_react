import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    dogs: [],
};

const dogSlice = createSlice({
    name: 'dogSlice',
    initialState: initialState,
    reducers: {
        addDog: (state, action) => {
            const {dog} = action.payload;
            const lastDogId = state.dogs[state.dogs.length - 1]?.id ?? 0;
            const newDog = {id: lastDogId + 1, name: dog.name};
            state.dogs.push(newDog);
        },
        deleteDog: (state, action) => {
           state.dogs = state.dogs.filter(dog => dog.id !== action.payload.id);
        }
    }

});

const {reducer: dogReducer, actions: {addDog, deleteDog}} = dogSlice;

export default dogReducer;
export const dogActions = {
    addDog,
    deleteDog
};