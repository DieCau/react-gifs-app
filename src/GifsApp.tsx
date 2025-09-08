import { useState } from 'react';

import { PreviousSearches } from './gifs/components/PreviousSearches';
import { GifList } from './gifs/components/GifList';
import { SearchBar } from './shared/components/SearchBar';
import { CustomHeader } from './shared/components/CustomHeader';

import { getGifsByQuery } from './gifs/actions/get-gifs-by-query.action';
import type { Gif } from './gifs/interfaces/gif.interface';

export const GifsApp = () => {

  const [gifs, setGifs] = useState<Gif[]>([])

  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const handleTermClicked = (term: string) => {
    console.log(term);
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

    setGifs(gifs)
  };

  return (
    <>
      {/* Header */}
      <CustomHeader
        title={'Buscador de Gifs'}
        description={'Descubre y comparte el gif perfecto'}
      />

      {/* Search Bar */}
      <SearchBar
        buttonText='Buscar'
        placeholder='Busca tu gif favorito...'
        onQuery={handleSearch}
      />

      {/* Previous Searches */}
      <PreviousSearches
        title='Búsquedas Anteriores'
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      {/* Gifs */}
      <GifList gifs={gifs} />
    </>
  );
};
