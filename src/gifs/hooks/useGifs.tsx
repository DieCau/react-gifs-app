import { useRef, useState } from 'react';
import type { Gif } from '../interfaces/gif.interface';
import { getGifsByQuery } from '../actions/get-gifs-by-query.action';

// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
    const [gifs, setGifs] = useState<Gif[]>([]);

    const [previousTerms, setPreviousTerms] = useState<string[]>([]);

    const gifsCache = useRef<Record<string, Gif[]>>({})

    const handleTermClicked = async (term: string) => {
        // Para poder utilizar gifsCache necesito el valor actual ".current"
        if (gifsCache.current[term]) {
            setGifs(gifsCache.current[term]);
            return;
        }
        const gifs = await getGifsByQuery(term);

        setGifs(gifs);
    };

    const handleSearch = async (query: string = '') => {
        // Convertir el query a minúsculas y eliminar espacios en blanco
        query = query.trim().toLowerCase();

        // Validar que el query no esté vacío
        if (query.length === 0) return;

        // Evitar búsquedas duplicadas verificando si el término ya existe en previousTerms ( si existe, no hacer nada )
        if (previousTerms.includes(query)) return;

        // Actualizar previousTerms agregando el nuevo término al inicio y limitando a 7 elementos máximo, es decir no puede ser un arreglo de más de 8.
        setPreviousTerms([query, ...previousTerms].splice(0, 7));

        // Aqui llamo la query a la API
        const gifs = await getGifsByQuery(query);

        setGifs(gifs);

        gifsCache.current[query] = gifs;
        console.log(gifsCache)
    };

    return {
        // Props / Values
        gifs,

        // Methods / Actions
        getGifsByQuery,
        handleSearch,
        handleTermClicked,
        previousTerms,
    };
};
