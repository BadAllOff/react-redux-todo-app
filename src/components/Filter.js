import React from "react";

const Filter = ({ dispatch }) => {
  return (
    <div>
      <FilterButton
        onClick={() => {
          dispatch({ type: "SET_FILTER", filter: "SHOW_ALL" });
        }}
      >
        Show All
      </FilterButton>
      <FilterButton
        onClick={() => {
          dispatch({ type: "SET_FILTER", filter: "SHOW_COMPLETED" });
        }}
      >
        Show Completed
      </FilterButton>
      <FilterButton
        onClick={() => {
          dispatch({ type: "SET_FILTER", filter: "SHOW_UNCOMPLETED" });
        }}
      >
        Show Uncompleted
      </FilterButton>
    </div>
  );
};

const FilterButton = ({ onClick, children }) => (
  <button className="mr-3 border border-gray-800 px-3 py-1" onClick={onClick}>
    {children}
  </button>
);

export default Filter;
