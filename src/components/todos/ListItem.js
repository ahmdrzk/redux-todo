import { memo } from "react";
import { useDispatch } from "react-redux";
import { deleteTodoAction, selectTodoColorAction, toggleTodoAction } from "../../redux/reducers/todosSlice";
import classes from "./ListItem.module.css";

const ListItem = ({ todoItem }) => {
  const { id, text, completed, color } = todoItem;

  const dispatch = useDispatch();

  const handleChangeTodoCheck = () => {
    dispatch(toggleTodoAction(id));
  };

  const handleChangeTodoColor = (event) => {
    dispatch(selectTodoColorAction(id, event.target.value));
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodoAction(id));
  };

  console.log("TodoListItem");
  return (
    <li className={classes.container}>
      {console.log("TodoListItem render()")}
      <input
        type="checkbox"
        id="completeTodo"
        name="completeTodo"
        checked={completed}
        onChange={handleChangeTodoCheck}
        className={classes.checkbox}
      />
      <label htmlFor="completeTodo" className={classes.text}>
        {text}
      </label>
      <div className={classes.selectContainer}>
        <label htmlFor="color" className="visuallyhidden">
          Choose todo color category
        </label>
        <select id="color" name="color" value={color} onChange={handleChangeTodoColor} className={classes.select}>
          <option value=""></option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="orange">Orange</option>
          <option value="purple">Purple</option>
          <option value="red">Red</option>
        </select>
      </div>
      <div>
        <label htmlFor="deleteTodo" className="visuallyhidden">
          Delete todo
        </label>
        <button type="button" id="deleteTodo" onClick={handleDeleteTodo} className={classes.deletebtn}>
          ❌
        </button>
      </div>
    </li>
  );
};

export default memo(ListItem);
