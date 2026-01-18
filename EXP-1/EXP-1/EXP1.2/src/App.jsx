import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    const trimmed = task.trim();
    if (!trimmed) return;
    setTodos([...todos, { id: Date.now(), text: trimmed }]);
    setTask("");
  };

  const handleRemove = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div className="app-box">
      <div className="header-box">
        <h2>My To‑Do List</h2>
      </div>

      <div className="input-box">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <div className="list-box">
        <ul>
          {todos.map((item) => (
            <li key={item.id}>
              <span>{item.text}</span>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </li>
          ))}
          {todos.length === 0 && (
            <p className="empty-text">No tasks yet. Add one!</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
