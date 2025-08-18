import { useState, type KeyboardEvent } from 'react';

interface SearchBarProps {
  placeholder?: string;
  buttonText: string;
  onQuery: (query: string) => void;
}

export const SearchBar = ({
  placeholder = 'Buscar',
  buttonText,
  onQuery,
}: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onQuery(query);
    setQuery(''); // Esto es para limpiar el input
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='search-container'>
      <input
        type='text'
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        // Qué sucede si presiono "Enter"?
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>{buttonText}</button>
    </div>
  );
};
