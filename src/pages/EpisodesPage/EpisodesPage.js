import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {episodeActions} from "../../redux";
import {Episode} from "../../components";
import './EpisodesPage.css';

const EpisodesPage = () => {
    const {episodes, pageInfo} = useSelector(state => state.episodeReducer);
    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({page: '1'});
    const currentPage = +query.get('page') ?? 1;

    function nextPageHandler() {
        setQuery({page: currentPage + 1});
    }

    function prevPageHandler() {
        setQuery({page: currentPage - 1});
    }

    // const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(episodeActions.getEpisodes(currentPage));
    }, [currentPage]);

    return (
        <div>
            <div className="episodes">
                {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
            </div>
            <div className="button">
                {pageInfo.prev && (
                    <button onClick={prevPageHandler}>Prev</button>)}
                {pageInfo.next && (
                    <button onClick={nextPageHandler}>Next</button>)}
            </div>
        </div>
    );
};

export {EpisodesPage};