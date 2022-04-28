import React from 'react';
import {useDispatch} from "react-redux";
import {carActions} from "../../redux/slices/car.slice";
import {NavLink} from "react-router-dom";

const Car = ({car: {id, model, year, price}}) => {
    const dispatch = useDispatch();
    const deleteHandler = () => {
        dispatch(carActions.deleteAsync(id));
    };
    return (
        <div>
            <NavLink to={`${id}`}>
                {id}.{model} - {year} - {price}
            </NavLink>
            <button onClick={deleteHandler}>delete</button>
        </div>
    );
};

export {Car};