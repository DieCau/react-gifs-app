interface PreviousSearchesProps {
  title: string;
  list?: string;
}

export const PreviousSearches = ({ title }: PreviousSearchesProps) => {
  return (
    <div className='previous-searches'>
      <h2>{title}</h2>
      <ul className='previous-searches-list'>
        <li>Goku</li>
        <li>Saitama</li>
        <li>Elden Ring</li>
      </ul>
    </div>
  );
};
