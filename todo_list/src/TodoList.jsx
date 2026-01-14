import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  const [todos, setTodos] = useState([{ task: "sample task", id: uuidv4() }]);
  const [NewTodo, setNewTodo] = useState("");

  const addNewTask = () => {
    if (NewTodo.trim() === "") return;

    setTodos((prevTodo) => {
      return [...prevTodo, { task: NewTodo, id: uuidv4(), IsDone: false }];
    });

    setNewTodo("");
  };
  let updateNewValue = (event) => {
    setNewTodo(event.target.value);
  };
  let DeletTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  let MarkIsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
           IsDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  let MarkAsAllDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo,
        IsDone: true,
      }))
    );
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
            <span
              style={todo.IsDone ? { textDecorationLine: "line-through" } : {}}
            >
              {todo.task}
            </span>
            &nbsp; &nbsp; &nbsp;
            <button onClick={() => DeletTodo(todo.id)}>delete</button>
            <button onClick={() => MarkIsDone(todo.id)}>Mark Done</button>
          </li>
        ))}
      </ul>
      <br />
      <button onClick={MarkAsAllDone}>All Done</button>
    </div>
  );
}
