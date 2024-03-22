import React, { useState } from "react";
import Filter from "./Filter";
import ItemForm from "./ItemForm";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterCategory, setFilteredCategory] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [allItems, setAllItems] = useState(items); // State to manage all items

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    const filtered = items.filter(item =>
      item.name.toLowerCase() === searchTerm.toLowerCase()
    );
    setFilteredCategory(filtered);
  };

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
    setFilteredCategory(event.target.value === "All" ? [] : items.filter(item => item.category === event.target.value));
  }

  const itemsToDisplay = filterCategory.length > 0 ? filterCategory : items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  const addItemToList = (newItem) => {
    // Update the list of items by adding the new item
    setAllItems([...allItems, newItem]);
  };

  return (
    <div className="ShoppingList">
      <Filter onSearchChange={handleSearch} onCategoryChange={handleCategoryChange} />
      <ItemForm onItemFormSubmit={addItemToList}/> 
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
