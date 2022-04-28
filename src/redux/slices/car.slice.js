import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: {},
    status: null,
    formErrors: {}
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async () => {
        const {data} = await carService.getAll();
        return data;
    }
);

const createAsync = createAsyncThunk(
    'carSlice/createAsync',
    async ({car}, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await carService.create(car);
            return data;
            // dispatch(actions.create({car: data}));
        } catch (e) {
            return rejectWithValue({status: e.message, formErrors: e.response.data});
        }
    }
);
const deleteAsync = createAsyncThunk(
    'carSlice/deleteAsync',
    async (id, {dispatch, rejectWithValue}) => {
        try {
            await carService.delete(id);
            return id;
        } catch (e) {
            return rejectWithValue({status: e.message, formErrors: e.response.data});
        }
    }
);


const carSlice = createSlice({
    name: 'carSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.status = 'completed';
                state.cars = action.payload.reduce((carsMap, car) => {
                    carsMap[car.id] = car;
                    return carsMap;
                }, {});
            })
            .addCase(createAsync.fulfilled, (state, {payload: car}) => {

                state.cars[car.id] = car;
            })
            .addCase(createAsync.rejected, (state, action) => {
                const {status, formErrors} = action.payload;
                state.status = status;
                state.formErrors = formErrors;
            })
            .addCase(deleteAsync.fulfilled, (state, action) => {
                const id = action.payload;
                delete state.cars[id];
            });
    }
});


const {reducer: carReducer, actions} = carSlice;

const carActions = {
    getAll,
    createAsync,
    deleteAsync
};

export {
    carReducer,
    carActions
};