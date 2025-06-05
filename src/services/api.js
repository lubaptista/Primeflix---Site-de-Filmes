import axios from "axios";

// Base da URL: https://api.themoviedb.org/3
//URL DA API: /movie/now_playing?api_key=a9f8da687c63ff06ccd9c9099588be3b&language=pt-BR

const api = axios.create({
    baseURL:' https://api.themoviedb.org/3/'
});

export default api;