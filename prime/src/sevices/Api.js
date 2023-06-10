//https://api.themoviedb.org/3//movie/now_playing?api_key=96076cdec05805e988903bffa64c5e6c&language=pt-BR
//https://api.themoviedb.org/3/
import axios from 'axios';


const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
});
export default api;