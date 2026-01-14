import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  const [todos, setTodos] = useState([{ task: "sample task", id: uuidv4() }]);
  const [NewTodo, setNewTodo] = useState("");

  const addNewTask = () => {
    if (NewTodo.trim() === "") return;

    setTodos((prevTodo) => {
      return [...prevTodo, { task: NewTodo, id: uuidv4() }];
    });

    setNewTodo("");
  };
  let updateNewValue = (event) => {
    setNewTodo(event.target.value);
  }; 
  let DeletTodo = (id) =>{
    setTodos(todos.filter((todo) =>todo.id != id ));
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
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.task}</span>
            &nbsp;    &nbsp;    &nbsp;
            <button onClick={()=>DeletTodo(todo.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
