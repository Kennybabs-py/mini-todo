import { useContext } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import EditTodo from "../EditTodo";
import { TodoContext } from "../../context/todoContext";
import "./todos.css";

function Todos() {
  const { todos, removeTodo, isEditing, handleEditClick } =
    useContext(TodoContext);

  return (
    <div className="todos">
      {isEditing ? <EditTodo /> : null}

      {todos?.map((todo) => {
        return (
          <div key={todo.id} className="todo">
            <h2>{todo.task}</h2>
            <div className="icons-box">
              <MdDelete onClick={() => removeTodo(todo.id)} />
              <MdEdit
                onClick={() => {
                  handleEditClick(todo);
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Todos;
