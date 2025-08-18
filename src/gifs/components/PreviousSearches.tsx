import type { FC } from 'react';

interface PreviousSearchesProps {
  title: string;
  searches: string[];

  // Asi se envia una funcion como Props
  onLabelClicked: (term: string) => void;
}

export const PreviousSearches: FC<PreviousSearchesProps> = ({
  title,
  searches,
  onLabelClicked,
}) => {
  return (
    <div className='previous-searches'>
      <h2>{title}</h2>
      <ul className='previous-searches-list'>
        {searches.map((term) => (
          <li
            key={term}
            onClick={() => {
              onLabelClicked(term);
            }}
          >
            {term}
          </li>
        ))}
      </ul>
    </div>
  );
};
