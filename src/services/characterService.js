import {axiosService} from "./axiosService";
import {urls} from "../constants";

const characterService = {
    getById: (charactersIds) => {
        const ids = charactersIds.join(',');
        return axiosService.get(`${urls.character}/${ids}`);
    }
};

export {
    characterService
};