import { createContext, useContext, useState} from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const TaskContext = createContext();

export const TaskProvider = ({children}) =>{
    const[tasks, setTasks] = useLocalStorage("tasks",[]);
    const[filter, setFilter] = useState("all");
    const[search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [priority, setPriority] = useState("all");
    return(
        <TaskContext.Provider
            value={{
                tasks,
                setTasks,
                filter,
                setFilter,
                search,
                setSearch,
                category,
                setCategory,
                priority,
                setPriority
            }}
        >
            {children}
        </TaskContext.Provider>
    );
};
export const useTasks = () => useContext(TaskContext);