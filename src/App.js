import { useState, useEffect } from "react";
import "./App.css";
import TodoItem from "./Components/TodoItem";
import TodoAdder from "./Components/TodoAdder";

function App() {

  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  } , [todos]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = (indexToDelete) => {
    setTodos(todos.filter(( _, index) => index !== indexToDelete));
  }
  return (
    <div>
      <div className="topBar">
        <h1 className="header"> To Do App </h1>
      </div>
      <ul className="list">
        {todos.map((todo, index) => (
          <TodoItem key={index} text={todo} onDelete={() => deleteTodo(index)}/>
        ))}
      </ul>
      <TodoAdder onAdd={addTodo} />
    </div>
  );
}
export default App;
