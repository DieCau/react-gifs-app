import { PreviousSearches } from './gifs/components/PreviousSearches';
import { GifList } from './gifs/components/GifList';
import { SearchBar } from './shared/components/SearchBar';
import { CustomHeader } from './shared/components/CustomHeader';
import { useGifs } from './gifs/hooks/useGifs';


export const GifsApp = () => {

  // Uso de un Custom Hook
  const { gifs, handleSearch, handleTermClicked, previousTerms } = useGifs()


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
