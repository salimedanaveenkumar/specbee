import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { articleSliceActions } from '../../store/article-slice';
import './SearchBar.scss'
const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  
  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(articleSliceActions.searchFilter(debouncedSearchTerm));
    } else {
      dispatch(articleSliceActions.searchFilter(''));
    }
  }, [debouncedSearchTerm, dispatch]);

  return (
    <div className='search-bar'>
      <input 
        type="text"
        placeholder="Search for..."
        value={searchTerm}
        onChange={handleChange} 
      />
    </div>
  );
};

export default SearchBar;
