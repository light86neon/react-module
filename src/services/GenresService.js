import { AXIOS } from "./axiosConfig";


class GenresService {
    async getMGenres() {
        const { data } = await AXIOS.get('/genre/movie/list')
        // throw new Error('bad work');
        return data
    }
    async getMovieDetailsById(movieId){
        const { data }  = await AXIOS.get(`./movie/${movieId}`)
        return data
    }
}

export const genresService = new GenresService();


