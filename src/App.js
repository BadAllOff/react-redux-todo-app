import React, { useReducer } from "react";

function App() {
  return (
    <div className="flex flex-col h-full items-center justify-center bg-gray-200 text-gray-700">
      Todo application
      <TodoList />
    </div>
  );
}

export default App;

const TodoReducer = function (state, action) {
  switch (action.type) {
    case "TOGGLE_TODO":
      return state.map((todo, idx) =>
        idx === action.idx ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

const TodoList = () => {
  const [todos, dispatch] = useReducer(TodoReducer, [
    { text: "First Task", completed: false },
  ]);

  return (
    <div>
      {todos.map((todo, idx) => (
        <label key={idx} className="block select-none">
          <input
            onChange={() => dispatch({ type: "TOGGLE_TODO", idx })}
            type="checkbox"
            checked={todo.completed}
          />
          {todo.text}
        </label>
      ))}
    </div>
  );
};
