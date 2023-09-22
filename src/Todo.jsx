import { useState } from "react";
import { v4 as uuid } from "uuid";
import TodoRender from "./TodoRender";
import "./index.css";

function Todo() {
  const [todoUpdate, setTodoUpdate] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (evt) => {
    setTodoUpdate(evt.target.value);
  };
  function add() {
    if (todoUpdate.trim() !== "") {
      setTodoList((oldtodoList) => {
        return [...oldtodoList, { id: uuid(), todoName: todoUpdate }];
      });
      setTodoUpdate("");
    }
  }
  function edit(id) {
    todoList.map((item) => {
      return item.id === id && setTodoUpdate(item.todoName);
    });
  }
  function update(id) {
    setTodoList((oldtodoList) => {
      return oldtodoList.map((item) => {
        if (item.id === id) {
          return { ...item, todoName: todoUpdate };
        }
        return item;
      });
    });
    setTodoUpdate("");
  }
  function deleted(id) {
    setTodoList((todo) => {
      return todo.filter((e) => id !== e.id);
    });
  }
  return (
    <div className="todo">
      <h1>ToDo List</h1>
      <div className="todo-input">
        <input
          className="input"
          type="text"
          placeholder="add your todo"
          onChange={(evt) => handleChange(evt)}
          name="todoUpdate"
          value={todoUpdate}
        />
        <button className="primary-btn" onClick={add}>
          Add
        </button>
      </div>

      <TodoRender todos={todoList} del={deleted} edit={edit} updated={update} />
    </div>
  );
}

export default Todo;
