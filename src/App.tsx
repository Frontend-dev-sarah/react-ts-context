import { useContext } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import TodoContextProvider, { TodoContext } from "./store/todo-context";

function App() {
  const todoCtx = useContext(TodoContext);
  console.log(todoCtx);
  return (
    <TodoContextProvider>
      <AddTodo onAddTodo={todoCtx.addTodo} />
      <Todos onRemoveItem={todoCtx.removeItem} items={todoCtx.items} />
    </TodoContextProvider>
  );
}

export default App;
