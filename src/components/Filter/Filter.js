import React from "react";


const Filter = ({ setFilter }) => {
  return (
    <div>
      <FilterButton
        onClick={() => {
          setFilter("SHOW_ALL");
        }}
      >
        Show All
      </FilterButton>
      <FilterButton
        onClick={() => {
          setFilter("SHOW_COMPLETED");
        }}
      >
        Show Completed
      </FilterButton>
      <FilterButton
        onClick={() => {
          setFilter("SHOW_UNCOMPLETED");
        }}
      >
        Show Uncompleted
      </FilterButton>
    </div>
  );
};

export default Filter;

const FilterButton = ({ onClick, children }) => (
  <button className="mr-3 border border-gray-800 px-3 py-1" onClick={onClick}>
    {children}
  </button>
);


