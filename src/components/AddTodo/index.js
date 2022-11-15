import React, { useState, useContext } from 'react'
import { TodoContext } from '../../context/todoContext'
import './addtodo.css'

function AddTodo() {
  const { addTodo } = useContext(TodoContext)
  const [formData, setFormData] = useState({ task: '', status: false })

  function handleForm(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  function handleSaveTodo(e, formData) {
    e.preventDefault()
    addTodo(formData)
    setFormData({ ...formData, task: '' })
  }

  return (
    <div className='add-todo'>
      <h2>Add a task</h2>
      <form onSubmit={(e) => handleSaveTodo(e, formData)}>
        <input
          type='text'
          id='task'
          value={formData.task}
          onChange={handleForm}
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default AddTodo
