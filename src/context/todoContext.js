import { createContext, useState } from 'react'

export const TodoContext = createContext()

export default function TodoProvider({ children }) {
  const [todos, setTodos] = useState([])
  const [editValue, setEditValue] = useState('')

  const addTodo = (todo) => {
    const newTodo = {
      task: todo.task,
      status: false,
    }
    setTodos([...todos, newTodo])
  }

  const removeTodo = (id) => {
    const filteredTodos = todos.filter((todo, index) => index !== id)
    setTodos(filteredTodos)
  }

  const editTodoSelect = (task) => {
    const selectedTask = todos.find((todo, index) => todo.task === task)
    setEditValue(selectedTask.task)
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  )
}
