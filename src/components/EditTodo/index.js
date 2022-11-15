import { useContext } from "react";
import { TodoContext } from "../../context/todoContext";

import "./editTodo.css";

function EditTodo() {
  const { currentTodo, handleEditInputChange, handleEditFormSubmit } =
    useContext(TodoContext);

  return (
    <div className={`editTodo`}>
      <form onSubmit={handleEditFormSubmit}>
        <input
          type="text"
          id="edit"
          name="edit"
          placeholder="Edit Todo"
          value={currentTodo.task}
          onChange={handleEditInputChange}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default EditTodo;
