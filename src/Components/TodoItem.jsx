import { useState } from "react";
import "./TodoItem.css";

function TodoItem({ text, onDelete }) {
  const [done, setDone] = useState(false);

  function handleClick() {
    return setDone(!done);
  }

  return (
    <div className="todo-item-holder">
      <li
        className="todo-item"
        onClick={handleClick}
        style={{ textDecoration: done ? "line-through" : "none" }}
      >
        {text}
      </li>
      <img src="/close.png" alt="delete" className="delete-button" onClick={onDelete}></img>
    </div>
  );
}
export default TodoItem;
