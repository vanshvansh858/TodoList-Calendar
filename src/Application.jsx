import Calendar from "react-calendar";
import Todo from "./Todo.jsx";
import "./calendar.css";
import "./index.css";

function Application() {
  return (
    <>
      <div style={{ fontSize: "50px", textAlign: "center" }}>
        ToDo CalenDer📆
      </div>
      <div className="main">
        <Calendar />
        <Todo />
      </div>
    </>
  );
}
export default Application;
