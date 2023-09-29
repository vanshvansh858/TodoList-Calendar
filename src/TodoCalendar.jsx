import Calendar from "react-calendar";
import { useState, useEffect } from "react";
import "./calendar.css";
import Todo from "./Todo";
import "./index.css";

function TodoCalendar() {
  const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("todoList"));
    if (!data) return [];
    return data;
  };
  //all states used in program
  const [todoUpdate, setTodoUpdate] = useState("");
  const [todoList, setTodoList] = useState(getInitialData);
  const [id, setId] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  //date state change handler
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const filteredTodos = todoList.filter((todo) => {
    const todoDate = new Date(todo.date);
    const newDate = new Date(selectedDate);
    return (
      todoDate.getDate() === newDate.getDate() &&
      todoDate.getMonth() === newDate.getMonth() &&
      todoDate.getFullYear() === newDate.getFullYear()
    );
  });

  return (
    <div className="main">
      <Calendar onChange={handleDateChange} value={selectedDate} />
      <Todo
        selectedDate={selectedDate}
        todoUpdate={todoUpdate}
        setTodoUpdate={setTodoUpdate}
        setTodoList={setTodoList}
        id={id}
        setId={setId}
        getInitialData={getInitialData}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default TodoCalendar;
