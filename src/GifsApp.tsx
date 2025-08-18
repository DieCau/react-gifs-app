import { useState } from 'react';

import { PreviousSearches } from './gifs/components/PreviousSearches';
import { GifList } from './gifs/components/GifList';
import { mockGifs } from './mock-data/gifs.mock';
import { SearchBar } from './shared/components/SearchBar';
import { CustomHeader } from './shared/components/CustomHeader';

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(['dragon ball z']);

  const handleTermClicked = (term: string) => {
    console.log(term);
  };

  const handleSearch = (query: string = '') => {
    // Convertir el query a minúsculas y eliminar espacios en blanco
    query = query.trim().toLowerCase();

    // Validar que el query no esté vacío
    if (query.length === 0) return;

    // Evitar búsquedas duplicadas verificando si el término ya existe en previousTerms ( si existe, no hacer nada )
    if (previousTerms.includes(query)) return;

    // Actualizar previousTerms agregando el nuevo término al inicio y limitando a 7 elementos máximo, es decir no puede ser un arreglo de más de 8.
    setPreviousTerms([query, ...previousTerms].splice(0, 7));
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
      {/* "gifs" es la property y "mockGifs" son los datos enviados a través de esa props */}
      <GifList gifs={mockGifs} />
    </>
  );
};
