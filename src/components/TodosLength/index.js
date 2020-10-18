import { connect } from "react-redux";
import TodosLength from "./TodosLength";

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(TodosLength);
