import { useContext } from "react";
import { TodoContext } from "../store/todo-context";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  onRemoveItem: () => void;
}> = (props) => {
  const todoCtx = useContext(TodoContext);
  return (
    <div className={classes.item}>
      <li>{props.text}</li>
      <button onClick={props.onRemoveItem}>Delete</button>
    </div>
  );
};

export default TodoItem;
