import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction } from "../../redux/reducers/todosSlice";
import classes from "./List.module.css";
import ListItem from "./ListItem";

const List = () => {
  const todos = useSelector((state) => state.todos);
  const { status: statusFilter, colors: colorsFilter } = useSelector((state) => state.filters);

  const [todoText, setTodoText] = useState("");

  const dispatch = useDispatch();

  const renderedTodos = todos
    .filter((todo) => {
      switch (statusFilter) {
        case "active":
          return todo.completed === false;

        case "completed":
          return todo.completed === true;

        default:
          return true;
      }
    })
    .filter((todo) => (colorsFilter.length > 0 ? colorsFilter.includes(todo.color) : true));

  const handleOnChange = (event) => {
    setTodoText(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodoAction(todoText));
    setTodoText("");
  };

  return (
    <section className={classes.listContainer}>
      <h2 className={classes.heading}>Todos</h2>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="addTodo" className="visuallyhidden">
          What needs to be done?
        </label>
        <input
          type="text"
          id="addTodo"
          name="addTodo"
          value={todoText}
          onChange={handleOnChange}
          placeholder="What needs to be done?"
          className={classes.textInput}
        />
      </form>
      <ul>
        {renderedTodos.map((todo) => (
          <ListItem key={todo.id} todoItem={todo} />
        ))}
      </ul>
    </section>
  );
};

export default List;
