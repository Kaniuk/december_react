import React from 'react';
import {useDispatch} from "react-redux";

import {dogActions} from "../redux/slices/dog.slice";

const Dog = ({dog:{id,name}}) => {
    const dispatch = useDispatch()
    return (
        <div>
            {id}.{name}
            <button onClick={()=>dispatch(dogActions.deleteDog({id})) }>delete</button>
        </div>
    );
};
export {Dog};