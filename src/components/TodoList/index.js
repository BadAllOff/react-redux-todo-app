import { connect } from "react-redux";
import TodoList from "./TodoList";
import * as todoActions from "../../redux/actionTypes/todos";


const filters = {
  SHOW_ALL: () => true,
  SHOW_COMPLETED: (todo) => !!todo.completed,
  SHOW_UNCOMPLETED: (todo) => !todo.completed,
};

const mapStateToProps = (state) => ({
  todos: state.todos.filter(filters[state.visibilityFilter]),
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (idx) =>
    dispatch({
      type: todoActions.TOGGLE_TODO,
      idx,
    }),
  addTodo: (text) =>
    dispatch({
      type: todoActions.ADD_TODO,
      text,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
