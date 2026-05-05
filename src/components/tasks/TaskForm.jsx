import { useState } from "react";
import { useTasks } from "../../context/TaskContext";
import { v4 as uuid } from "uuid";

export default function TaskForm() {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("work");
  const [priority, setPriority] = useState("medium");

  const { tasks, setTasks } = useTasks();

  const addTask = () => {
    if (!text) return;

    const newTask = {
      id: uuid(),
      title: text,
      status: "todo",
      category,
      priority,
      createdAt: new Date().toISOString(),
    };

    setTasks([...tasks, newTask]);
    setText("");
  };

  return (
    <div className="task-form">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Task..."
      />

      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
        <option value="urgent">Urgent</option>
      </select>

      <select onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button onClick={addTask}>Add</button>
    </div>
  );
}