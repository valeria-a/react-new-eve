import { useState } from "react";
import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";

import './TodoApp.css'
import { Box } from "../../utils/Box";

const TodoApp = () => {

    const [tasks, setTasks] = useState([])

    const addTaskHandler = (newTaskTitle) => {
        const newTask = {
            id: Date.now(),
            title: newTaskTitle
        }
        setTasks([...tasks, newTask])
    }

    const deleteTaskHandler = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId))
    }

    const saveEditedTaskHandler = (taskId, newTitle) => {
        const myTask = tasks.filter((task) => task.id === taskId)[0]
        myTask.title = newTitle
        setTasks([...tasks])
    }

    return(
        <>
        <Box>
            <TaskForm onTaskAdd={addTaskHandler}/>
            <TaskList 
                tasks={tasks} 
                onTaskDelete={deleteTaskHandler}
                onTaskSave={saveEditedTaskHandler}

            />
        </Box>
        <Box>
            <button>HELLO</button>
        </Box>

        </>
    )
}
export default TodoApp;