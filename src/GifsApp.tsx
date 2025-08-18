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

  return (
    <>
      {/* Header */}
      <CustomHeader
        title={'Buscador de Gifs'}
        description={'Descubre y comparte el gif perfecto'}
      />
      {/* Search Bar */}
      <SearchBar buttonText='Buscar' placeholder='Busca tu gif favorito...' />
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
