import React from "react";

import TodoList from "./components/TodoList";

import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="flex flex-col h-full items-center justify-center bg-gray-200 text-gray-700">
        Todo application
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
