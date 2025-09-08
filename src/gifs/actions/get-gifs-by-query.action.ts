import type { GhipyResponse } from "../interfaces/giphy.response";
import type { Gif } from "../interfaces/gif.interface";
import { giphyApi } from "../api/giphy.api";

// Importo la instancia que cree de axios y agrego parametros para esta query en particular 
export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
    const response = await giphyApi<GhipyResponse>('/search',
        {
            params: {
                q: query,
                limit: 10,
            },
        }
    );

    // Aqui transformo la respuesta de axios a un interface "gif"
    return response.data.data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height),
    }));

    //     fetch(
    //     `https://api.giphy.com/v1/gifs/search?api_key=B6ZR4HBAkoZQ3bSUe5lLwz9iJXeDt5Mx&q=${query}&limit=10&lang=es`
    //   );
};
