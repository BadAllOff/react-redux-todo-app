import { connect } from "react-redux";

import TodoList from "./TodoList";

const mapStateToProps = (state) => ({
  todos: state,
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (idx) =>
    dispatch({
      type: "TOGGLE_TODO",
      idx,
    }),
  addTodo: (text) =>
    dispatch({
      type: "ADD_TODO",
      text,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
