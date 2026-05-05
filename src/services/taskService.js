const delay = (ms) =>new Promise((res)=>setTimeout(res,ms));

export const fetchTasks = async() =>{
    await delay(600);
    return JSON.parse(localStorage.getItem("tasks")|| "[]")
};
export const createTasks = async(task) =>{
    await delay(400);
    return task;
};
export const updateTasks = async(tasks) =>{
    await delay(300);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    return tasks;
};