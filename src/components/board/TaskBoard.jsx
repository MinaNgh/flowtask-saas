import { DndContext } from "@dnd-kit/core";
import { useTasks } from "../../context/TaskContext";
import Column from "./Column";
import { filterTasks } from "../../utils/flterTasks";

export default function TaskBoard() {
  const { tasks, setTasks, filter, search , category, priority } = useTasks();

  const filteredTasks = filterTasks(tasks, filter, search, category, priority);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const taskId = active.id;
    const newStatus = over.id;

    setTasks(
      tasks.map((t) =>
        t.id === taskId ? { ...t, status: newStatus } : t
      )
    );
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="board">
        <Column
          id="todo"
          title="To Do"
          tasks={filteredTasks.filter((t) => t.status === "todo")}
        />

        <Column
          id="in-progress"
          title="In Progress"
          tasks={filteredTasks.filter((t) => t.status === "in-progress")}
        />

        <Column
          id="done"
          title="Done"
          tasks={filteredTasks.filter((t) => t.status === "done")}
        />
      </div>
    </DndContext>
  );
}