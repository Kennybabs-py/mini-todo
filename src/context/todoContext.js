import { createContext, useState } from "react";

export const TodoContext = createContext();

export default function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const addTodo = (todo) => {
    const newTodo = {
      id: todos.length + 1,
      task: todo.task,
      status: false,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  function handleEditInputChange(e) {
    setCurrentTodo({ ...currentTodo, task: e.target.value });
  }

  function handleEditClick(todo) {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  }

  function handleUpdateTodo(id, updatedTodo) {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setTodos(updatedItem);
  }

  function handleEditFormSubmit(e) {
    e.preventDefault();
    handleUpdateTodo(currentTodo.id, currentTodo);
  }

  console.log(todos);
  console.log(currentTodo);

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
        handleEditClick,
        handleUpdateTodo,
        handleEditFormSubmit,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
