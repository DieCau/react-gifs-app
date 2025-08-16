import { mockGifs } from './mock-data/gifs.mock';
import { CustomHeader } from './shared/components/CustomHeader';

export const GifsApp = () => {
  return (
    <>
      {/* Header */}
      <CustomHeader
        title={'Buscador de Gifs'}
        description={'Descubre y comparte el gif perfecto'}
      />

      {/* Search Bar */}

      {/* Previous Searches */}

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
