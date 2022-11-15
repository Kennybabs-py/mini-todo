import TodoProvider from './context/todoContext'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import './App.css'

function App() {
  return (
    <div className='App'>
      <TodoProvider>
        <AddTodo />
        <Todos />
      </TodoProvider>
    </div>
  )
}

export default App
