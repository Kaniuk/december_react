import React, {useState} from 'react';
import {useParams} from "react-router-dom";

const CarPage = () => {
    const {id} = useParams();

    const [car,setCar] = useState(null)

    return (
        <div>

        </div>
    );
};

export {CarPage};