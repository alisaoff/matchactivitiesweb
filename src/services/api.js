import axios from 'axios';

const api = axios.create({
    baseURL: 'https://matchactivities-backend.herokuapp.com/'
});

export default api;
