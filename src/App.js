import React, { useReducer } from "react";

import TodoList from "./TodoList";
import Filter from "./Filter";
import TodosLength from "./TodosLength";

const FilterReducer = function (state, action) {
  switch (action.type) {
    case "SET_FILTER":
      return action.filter;
    default:
      return state;
  }
};

function App() {
  const [visibilityFilter, dispatch] = useReducer(FilterReducer, "SHOW_ALL");

  return (
    <div className="flex flex-col h-full items-center justify-center bg-gray-200 text-gray-700">
      Todo application
      <Filter dispatch={dispatch} />
      <TodoList visibilityFilter={visibilityFilter} />
      <TodosLength />
    </div>
  );
}

export default App;
