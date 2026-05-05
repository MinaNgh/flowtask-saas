import TaskBoard from "../components/board/TaskBoard";
import FilterBar from "../components/tasks/FilterBar";
import TaskForm from "../components/tasks/TaskForm";

// ======== Task Object Defination ======
// {
//   id: "uuid",
//   title: "Task title",
//   description: "",
//   status: "todo | in-progress | done",
//   category: "work | personal",
//   priority: "low | medium | high",
//   createdAt: Date
// }
//================
function DashBoard(){
    return(
        <div className="container">
            <h1>FlowTask</h1>
            <TaskForm/>
            <FilterBar/>
            <TaskBoard/>
        </div>
    );
}

export default DashBoard;