import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCompletedTodosAction, completeAllTodosAction } from "../../../redux/reducers/todosSlice";
import classes from "./Controls.module.css";

const Controls = () => {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const remainingTodos = todos.filter((todo) => todo.completed !== true).length;

  const handleCompleteAllTodos = () => {
    dispatch(completeAllTodosAction());
  };

  const handleClearCompletedTodos = () => {
    dispatch(clearCompletedTodosAction());
  };

  return (
    <Fragment>
      <section>
        <h4>Actions</h4>
        <button type="button" onClick={handleCompleteAllTodos} className={classes.controlBtn}>
          Mark All Completed
        </button>
        <button type="button" onClick={handleClearCompletedTodos} className={classes.controlBtn}>
          Clear Completed
        </button>
      </section>
      <section>
        <h4>Remaining Todos</h4>
        <p>
          <b>{remainingTodos}</b> items left
        </p>
      </section>
    </Fragment>
  );
};

export default Controls;
