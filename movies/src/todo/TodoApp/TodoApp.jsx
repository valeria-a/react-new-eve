import { useReducer, useState } from "react";
import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";

import './TodoApp.css'
import { Box } from "../../utils/Box";
import { todoReducer } from "./todoReducer";

const TodoApp = () => {

    // const [tasks, setTasks] = useState([])

    const [tasks, dispatch] = useReducer(todoReducer, [])


    // const addTaskHandler = (newTaskTitle) => {
    //     const newTask = {
    //         id: Date.now(),
    //         title: newTaskTitle
    //     }
    //     setTasks([...tasks, newTask])
    // }

    // const deleteTaskHandler = (taskId) => {
    //     setTasks(tasks.filter((task) => task.id !== taskId))
    // }

    // const saveEditedTaskHandler = (taskId, newTitle) => {
    //     const myTask = tasks.filter((task) => task.id === taskId)[0]
    //     myTask.title = newTitle
    //     setTasks([...tasks])
    // }

    return(
        <>
        <Box>
            {/* <TaskForm onTaskAdd={addTaskHandler}/> */}
            <TaskForm dispatch={dispatch}/>
            <TaskList 
                tasks={tasks} 
                dispatch={dispatch}
                // onTaskDelete={deleteTaskHandler}
                // onTaskSave={saveEditedTaskHandler}

            />
        </Box>
        <Box>
            <button>HELLO</button>
        </Box>

        </>
    )
}
export default TodoApp;