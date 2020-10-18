import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import TodosLength from "./components/TodosLength";

function App() {
  return (
    <Provider store={store}>
      <div className="flex flex-col h-full items-center justify-center bg-gray-200 text-gray-700">
        Todo application
        <Filter />
        <TodoList />
        <TodosLength />
      </div>
    </Provider>
  );
}

export default App;
