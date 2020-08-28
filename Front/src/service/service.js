import axios from 'axios';

//url base
const api = axios.create({baseURL: 'http://localhost:3003/sistema' });


export default api;