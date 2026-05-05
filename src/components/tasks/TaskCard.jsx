import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useTasks } from "../../context/TaskContext";

export default function TaskCard({ task }) {
  const { setTasks } = useTasks();

  const { attributes, listeners, setNodeRef, transform } =
    useDraggable({ id: task.id });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  const deleteTask = () => {
    setTasks((prev) => prev.filter((t) => t.id !== task.id));
  };

  return (
  <div ref={setNodeRef} style={style} className="card">
  
      {/* drag handle (left) */}
      <div className="drag-handle" {...listeners} {...attributes}>
        ⠿
      </div>

      {/* title */}
      <p className="task-title">{task.title}</p>

      {/* delete button (right) */}
      <button
        className="delete-btn"
        onClick={(e) => {
          e.stopPropagation();
          deleteTask();
        }}
      >
        🗑
      </button>

  </div>
  );
}