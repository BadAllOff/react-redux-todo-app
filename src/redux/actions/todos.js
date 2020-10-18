import * as todoActions from "../actionTypes/todos";

export const addTodo = (text) => ({
  type: todoActions.ADD_TODO,
  text,
});
export const toggleTodo = (idx) => ({
  type: todoActions.TOGGLE_TODO,
  idx,
});
