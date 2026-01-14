import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState(["sample task"]);
  const [NewTodo, setNewTodo] = useState("");


  const updateNewValue = (event) => {
    setNewTodo(event.target.value);
  };


  const addNewTask = () => {
    if (NewTodo.trim() === "") return;

    setTodos([...todos, NewTodo]);
    setNewTodo(""); 
  };

  return (
    <div>
      <input
        type="text"
        placeholder="enter task"
        value={NewTodo}
        onChange={updateNewValue}
      />

      <button onClick={addNewTask}>add task</button>

      <h4>TODO LIST</h4>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
