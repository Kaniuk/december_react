import {axiosService} from "./axiosService";
import {urls} from "../constants";

const characterService = {
    getById: (characters) => {
        const ids = characters.map(character => character.split('/').slice(-1)[0]).join(',');
       return  axiosService.get(`${urls.character}/${ids}`);
    }
};

export {
    characterService
};