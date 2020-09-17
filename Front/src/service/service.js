import axios from 'axios';
const PORT = 3003
const PATH = 'sistema'
const API_ADDRESS = `http://localhost:${PORT}/${PATH}`
export const STATIC_SERVER_ADDRESS = `http://localhost:${PORT}/`


//url base
export const api = axios.create({baseURL: API_ADDRESS});



export default api;