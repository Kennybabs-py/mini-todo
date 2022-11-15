import { useContext } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import EditTodo from "../EditTodo";
import { TodoContext } from "../../context/todoContext";
import "./todos.css";

function Todos() {
  const { todos, removeTodo, isEditing, setIsEditing } =
    useContext(TodoContext);

  return (
    <div className="todos">
      {isEditing ? <EditTodo /> : null}

      {todos?.map((todo, index) => {
        return (
          <div key={index} className="todo">
            <h2>{todo.task}</h2>
            <div className="icons-box">
              <MdDelete onClick={() => removeTodo(index)} />
              <MdEdit
                onClick={() => {
                  setIsEditing(true);
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
