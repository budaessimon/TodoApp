import { useState } from "react";
import "./TodoAdder.css";

function TodoAdder({ onAdd }) {
  const [text, setText] = useState("");
  const handleInput = () => {
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };

  return (
    <div className="TodoAdder">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="add a task"
        className="task-input"
      ></input>
      <button 
      onClick={handleInput}
      className="submit-btn">submit</button>
    </div>
  );
}
export default TodoAdder;
