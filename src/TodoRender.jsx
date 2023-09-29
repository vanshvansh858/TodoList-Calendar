import TodoListItem from "./TodoListItem";
import "./index.css";

function TodoRender({ todos, edit, del }) {
  return (
    <div className="todo-input-item">
      {todos.map((td) => {
        return (
          <ul key={td.id} className="todo-list-item">
            <li>
              <TodoListItem value={td.todoName} />
              <button className="secondaryBtn" onClick={() => edit(td.id)}>
                Edit
              </button>
              <button className="secondaryBtn" onClick={() => del(td.id)}>
                Delete
              </button>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default TodoRender;
