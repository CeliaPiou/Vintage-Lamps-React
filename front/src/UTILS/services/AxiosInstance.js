import axios from 'axios';

const API_URL = 'http://localhost:8000'

const AXIOS_INSTANCE = axios.create({
    baseURL: API_URL,
    // Grace à ça qu'on va pouvoir recevoir/envoyer le token ds les cookies
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
})

export default AXIOS_INSTANCE;