import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com/',
};
const key = '?apikey=232a40fb';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        return  axiosInstance.get(`${key}&s=${title}`)
    },
    searchFilmsByType: (title: string, type: string) => {
        debugger
        return axiosInstance.get(`${key}&s=${title}&type=${type}`)
    }
};


export default API;
