import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    alert(`Searching for: ${query}`);
  };

  return (
    <div className="flex items-center justify-center">
    <input
      type="text"
      placeholder="Search blogs..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleSearch();
        }
      }}
      className="border border-gray-300 rounded-lg p-2 w-2/3 focus:outline-none focus:ring-2 focus:ring-gray-100"
    />
  </div>
  );
};

export default SearchBar;
