import React, { useState } from "react";
import ToDoItem from "./ToDoItem,";
// --------------------------------------
import "./style/TodDo.css";

const ToDo = () => {
  const cart = [
    {
      _id: 1,
      name: "Buy MacBook",
      isChecked: false,
    },
    {
      _id: 2,
      name: "Start reading a new book",
      isChecked: false,
    },
  ];

  const [name, setName] = useState("");
  const [todos, setTodos] = useState(cart);

  const onKeyPressNameHandler = (e) => {
    if (e.target.value !== "" && e.key === "Enter") {
      e.preventDefault();
      setTodos((prev) => [
        ...prev,
        { _id: todos.length + 1, name, isChecked: false },
      ]);
      setName("");
    }
  };

  const toggleCheckedToDo = (idx) => {
    const newArray = [].concat(todos);
    newArray[idx].isChecked = !newArray[idx].isChecked;
    setTodos(newArray);
    console.log(newArray.isChecked);
  };

  const onDeleted = (id) => {
    setTodos((prev) => prev.filter((product) => product._id !== id));
  };

  return (
    <div>
      <h1 className="todo__tittle">ToDo App</h1>
      {todos &&
        todos.map((todo, idx) => (
          <ToDoItem
            key={`_todo_${todo._id}`}
            idx={idx}
            id={todo._id}
            name={todo.name}
            isChecked={todo.isChecked}
            toggleCheckedToDo={toggleCheckedToDo}
            onDeleted={onDeleted}
          />
        ))}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyPress={onKeyPressNameHandler}
        placeholder="New task..."
      />
    </div>
  );
};

export default ToDo;
