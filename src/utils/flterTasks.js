export const filterTasks = (tasks, filter, search, category, priority) => {
  return tasks
    // Status filter
    .filter((task) =>
      filter === "all" ? true : task.status === filter
    )

    // Category filter
    .filter((task) =>
      category === "all" ? true : task.category === category
    )

    // Priority filter
    .filter((task) =>
      priority === "all" ? true : task.priority === priority
    )

    // Search filter
    .filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase())
    );
};