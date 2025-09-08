import axios from "axios";

// Se crea una instancia de axios con la baseURL y sus parametros de query comunes
export const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs', params: {
        lang: 'es',
        api_key: import.meta.env.VITE_GIPHY_API_KEY
    }
})