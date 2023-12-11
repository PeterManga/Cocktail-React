import React, { useState } from 'react';
import { bringDrinksSearch } from '../../services/apiCalls';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const response = await bringDrinksSearch(searchTerm);
      onSearch(response.data.drinks);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a drink..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
