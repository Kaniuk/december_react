import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {episodeActions} from "../../redux";
import {charactersActions} from "../../redux/slices/character.slice";
import {Character} from "../../components";

const words = ['sd', 'asdas', 'asdas', 'sdf'];

const counts = {
    sd: 1,
    asdas: 2,
};

/*
function countWords(wordList) {
    const countWordsMap = {};
    for (const word of wordList) {
        if (!countWordsMap[word]) {
            countWordsMap[word] = 1;
        } else {
            ++countWordsMap[word];
        }
    }
    return countWordsMap;
}
*/


const EpisodePage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const episode = useSelector(state => state.episodeReducer.episodes.find(e => e.id == id));
    const characters = useSelector(state => state.charactersReducer.characters[id] ?? []);

    useEffect(() => {
        if (!episode) {
            dispatch(episodeActions.getEpisode(id));
        }
    }, [episode?.id]);


    useEffect(() => {
        if (episode && !characters?.length) {
            dispatch(charactersActions.getCharacters(id));
        }
    }, [episode?.id, characters?.length]);


    return (
        <div>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {EpisodePage};