import React from "react";
import "./editTodo.css";

function EditTodo() {
  return (
    <div className={`editTodo`}>
      <form>
        <input type="text" id="task" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default EditTodo;
