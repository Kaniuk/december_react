import React from 'react';
import {NavLink} from "react-router-dom";

import './Episode.css';

const Episode = ({episode}) => {
    return (
        <div className="episode">
            <NavLink to={`${episode.id}`}>
                <h3>{episode.name}</h3>
                <h3>{episode.air_date}</h3>
                <h3>{episode.episode}</h3>
            </NavLink>
        </div>
    );
};

export {Episode};