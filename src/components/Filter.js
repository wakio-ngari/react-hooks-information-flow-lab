import React from 'react';

function Filter({ onCategoryChange }) {
  const handleCategoryChange = (event) => {
    onCategoryChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="category">Filter by category:</label>
      <select id="category" onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Dairy">Dairy</option>
      </select>
    </div>
  );
}

export default Filter;
