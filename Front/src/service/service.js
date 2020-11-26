import axios from 'axios';
const PORT = process.env.PORT | 8088
const HOST = process.env.NODE_ENV == 'production'
    ? 'https://socialong-api.herokuapp.com' : `http://localhost:${PORT}`
const PATH = 'sistema'
export const API_ADDRESS = `${HOST}/${PATH}`
export const STATIC_SERVER_ADDRESS = `${HOST}/`
//url base
export const api = axios.create({ baseURL: API_ADDRESS });



export default api;