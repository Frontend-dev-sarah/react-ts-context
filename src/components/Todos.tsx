import { useContext } from "react";
import Todo from "../models/todo";
import { TodoContext } from "../store/todo-context";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[]; onRemoveItem: (id: string) => void }> = (
  props
) => {
  const todoCtx = useContext(TodoContext);
  return (
    <ul>
      {todoCtx.items.map((item) => (
        <div className={classes.todos} key={item.id}>
          <TodoItem
            onRemoveItem={() => todoCtx.removeItem(item.id)}
            text={item.text}
          />
        </div>
      ))}
    </ul>
  );
};

export default Todos;
