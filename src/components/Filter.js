import React, { useState } from "react";

function Filter({ onSearchChange, onCategoryChange, search }) {
  const [category, setCategory] = useState("All");

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        value={search}
        placeholder="Search..."
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select 
        value={category} 
        onChange={(e) => {
          setCategory(e.target.value);
          onCategoryChange(e.target.value);
        }}
      >
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
