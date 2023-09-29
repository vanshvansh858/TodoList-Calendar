import { v4 as uuid } from "uuid";
import TodoRender from "./TodoRender";
import "./index.css";

function Todo({
  selectedDate,
  todoUpdate,
  setTodoUpdate,
  setTodoList,
  id,
  setId,
  filteredTodos,
}) {
  const handleChange = (evt) => {
    setTodoUpdate(evt.target.value);
  };
  function add() {
    if (todoUpdate.trim() !== "") {
      setTodoList((oldtodoList) => {
        return [
          ...oldtodoList,
          { id: uuid(), todoName: todoUpdate, date: selectedDate },
        ];
      });
      setTodoUpdate("");
    }
  }
  function edit(id) {
    setId(id);
    filteredTodos.map((item) => {
      return item.id === id && setTodoUpdate(item.todoName);
    });
  }
  function update() {
    setTodoList((oldtodoList) => {
      return oldtodoList.map((item) => {
        if (item.id === id) {
          return { ...item, todoName: todoUpdate };
        }
        return item;
      });
    });
    setTodoUpdate("");
    setId(null);
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
        </button>{" "}
        <button className="primary-btn" onClick={update}>
          Update
        </button>
      </div>

      <TodoRender
        todos={filteredTodos}
        del={deleted}
        edit={edit}
        updated={update}
      />
    </div>
  );
}
export default Todo;
