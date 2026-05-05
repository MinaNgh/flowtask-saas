import { useTasks } from "../../context/TaskContext";
// import useDebounce from "../../hooks/useDebounce";

export default function FilterBar() {
  const {
    filter,
    setFilter,
    search,
    setSearch,
    category,
    setCategory,
    priority,
    setPriority,
  } = useTasks();

  // Debounced search (performance optimization)
  // const debouncedSearch = useDebounce(search, 400);

  return (
    <div className="filter-bar">
      
      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 📌 Status Filter */}
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="todo">To Do</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>

      {/* 📂 Category Filter */}
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All Categories</option>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
        <option value="learning">Learning</option>
      </select>

      {/* ⚡ Priority Filter */}
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="all">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

    </div>
  );
}