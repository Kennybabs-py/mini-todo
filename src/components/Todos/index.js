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

      <div className="todos_number">
        {" "}
        {todos.length === 0 ? (
          <h2>You have no tasks</h2>
        ) : (
          <h2>{`${todos.length} ${todos.length === 1 ? "task" : "tasks"}`}</h2>
        )}
      </div>

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
