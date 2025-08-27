import axios from "axios";
import type { GhipyResponse } from "../interfaces/giphy.response";
import type { Gif } from "../interfaces/gif.interface";

export const getGifsByQuery = async (query: string): Promise<Gif[]> => {

    const response = await axios.get<GhipyResponse>('https://api.giphy.com/v1/gifs/search', {
        params: {
            q: query,
            limit: 10,
            lang: 'es',
            api_key: 'B6ZR4HBAkoZQ3bSUe5lLwz9iJXeDt5Mx'
        }
    })

    // Aqui realizo mi transformación a mi interface "gif"
    return response.data.data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height)
    }))

    //     fetch(
    //     `https://api.giphy.com/v1/gifs/search?api_key=B6ZR4HBAkoZQ3bSUe5lLwz9iJXeDt5Mx&q=${query}&limit=10&lang=es`
    //   );
};
