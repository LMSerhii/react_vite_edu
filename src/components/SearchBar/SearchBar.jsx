import css from './SearchBar.module.css';
import { useId, useState } from 'react';

export const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const searchId = useId();

  const handleChange = evt => {
    setInputValue(evt.target.value);
  };

  return (
    <div className={css.searchBar}>
      <label htmlFor={searchId}>Search Bar</label>
      <input
        type="text"
        value={inputValue}
        name="searchBar"
        id={searchId}
        onChange={handleChange}
      />
      <p className={css.text}>{inputValue}</p>
    </div>
  );
};
