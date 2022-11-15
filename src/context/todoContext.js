import { createContext, useState } from "react";

export const TodoContext = createContext();

export default function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const addTodo = (todo) => {
    const newTodo = {
      task: todo.task,
      status: false,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    const filteredTodos = todos.filter((todo, index) => index !== id);
    setTodos(filteredTodos);
  };

  function handleEditInputChange(e) {
    // set the new state value to what's currently in the edit input box
    setCurrentTodo({ ...currentTodo, text: e.target.value });
    console.log(currentTodo);
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        removeTodo,
        currentTodo,
        setCurrentTodo,
        handleEditInputChange,
        isEditing,
        setIsEditing,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
