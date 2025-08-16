import { PreviousSearches } from './gifs/components/PreviousSearches';
import { SearchBar } from './shared/components/SearchBar';
import { CustomHeader } from './shared/components/CustomHeader';
import { mockGifs } from './mock-data/gifs.mock';

export const GifsApp = () => {
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
      <PreviousSearches title='Busquedas Anteriores' />

      {/* Gifs */}
      <div className='gifs-container'>
        {mockGifs.map((gif) => (
          <div key={gif.id} className='gif-card'>
            <img src={gif.url} alt={gif.title} />
            <h3>{gif.title}</h3>
            <p>
              {gif.width}x{gif.height} (1.8Mb)
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
