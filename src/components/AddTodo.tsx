import React, { useContext, useRef } from "react";
import { TodoContext } from "../store/todo-context";
import classes from "./AddTodo.module.css";

const AddTodo: React.FC<{ onAddTodo: (enteredInput: string) => void }> = (
  props
) => {
  const todoInput = useRef<HTMLInputElement>(null);
  const todoCtx = useContext(TodoContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredInput = todoInput.current!.value;
    if (enteredInput.trim().length === 0) {
      return;
    }
    todoCtx.addTodo(enteredInput);
    // props.onAddTodo(enteredInput);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input ref={todoInput} type="text" id="text" />
      <button>Add todo</button>
    </form>
  );
};

export default AddTodo;
