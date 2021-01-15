import axios from "axios";

export const AXIOS = axios.create({
    baseURL: 'http://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGU1NzljODE4ZTA1ZDMxYTUyMzg0NmQ0YjJlMmE1YiIsInN1YiI6IjVmZmUwMGYyOGU4ZDMwMDA0M2Q5NGU0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A_XDbpKKvkagBf-3JoSC4gSeOiwIU_RtPkjqg6BAmnQ'
    }
})
