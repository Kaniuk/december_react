import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Car} from "../Car/Car";
import {carActions} from "../../redux/slices/car.slice";
import './Cars.css'
const Cars = () => {

    const {cars} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carActions.getAll());
       // react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='column'>
            {Object.values(cars).map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};