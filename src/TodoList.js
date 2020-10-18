import React, { useReducer } from "react";

const TodoReducer = function (state, action) {
  switch (action.type) {
    case "TOGGLE_TODO":
      return state.map((todo, idx) =>
        idx === action.idx ? { ...todo, completed: !todo.completed } : todo
      );
    case "ADD_TODO":
      return state.concat({ text: action.text, completed: false });
    default:
      return state;
  }
};

const TodoList = ({visibilityFilter}) => {
  const [todos, dispatch] = useReducer(TodoReducer, [
    { text: "First Task", completed: false },
  ]);

  const filters = {
    SHOW_ALL: () => true,
    SHOW_COMPLETED: (todo) => !!todo.completed,
    SHOW_UNCOMPLETED: (todo) => !todo.completed,
  };

  return (
    <div>
      {todos.filter(filters[visibilityFilter]).map((todo, idx) => (
        <label key={idx} className="block select-none">
          <input
            onChange={() => dispatch({ type: "TOGGLE_TODO", idx })}
            type="checkbox"
            checked={todo.completed}
          />
          {todo.text}
        </label>
      ))}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "ADD_TODO", text: e.target.text.value });
          e.target.text.value = "";
        }}
      >
        <input type="text" name="text" />
        <button>Add todo</button>
      </form>
    </div>
  );
};

export default TodoList;