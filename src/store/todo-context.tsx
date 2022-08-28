import React, { useState } from "react";
import Todos from "../components/Todos";
import Todo from "../models/todo";

type TodoContextObj = {
  items: Todo[];
  addTodo: (inputText: string) => void;
  removeItem: (id: string) => void;
};
interface Props {
  children: React.ReactNode;
}

export const TodoContext = React.createContext<TodoContextObj>({
  items: [],
  addTodo: (id: string) => {},
  removeItem: (id: string) => {},
});

const TodoContextProvider: React.FC<Props> = (props) => {
  const [newTodos, setNewTodos] = useState<Todo[]>([]);

  const addTodoHandler = (enteredInput: string) => {
    const newTodo = new Todo(enteredInput);
    setNewTodos((pre) => {
      return pre.concat(newTodo);
    });
  };
  const removeItemHandler = (todoId: string) => {
    setNewTodos((preTodos) => {
      return preTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodoContextObj = {
    items: newTodos,
    addTodo: addTodoHandler,
    removeItem: removeItemHandler,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
