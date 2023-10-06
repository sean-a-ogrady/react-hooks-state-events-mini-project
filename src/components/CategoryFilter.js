import React from "react";

function CategoryFilter({categories, selectFilter, filter}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => {return <button key={category} onClick={selectFilter} className={filter === category ? "selected" : ""}>{category}</button>})}
    </div>
  );
}

export default CategoryFilter;
