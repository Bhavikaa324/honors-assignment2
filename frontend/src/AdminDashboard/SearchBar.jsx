import React from 'react';

function SearchBar({ handleSearch }) {
  const handleChange = (event) => {
    handleSearch(event.target.value);
  };

  const handleButtonClick = () => {
    // Handle search action here
  };

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search user..." onChange={handleChange} />
      <button onClick={handleButtonClick}>Go</button>
    </div>
  );
}

export default SearchBar;
