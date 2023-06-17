import { useReducer, useState } from "react";
import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";

import './TodoApp.css'
import { Box } from "../../utils/Box";
import { ColorContext, INITIAL_COLOR, UserContext, todoReducer } from "./todoReducer";
import ColorPicker from "../ColorPick/ColorPicker";

const TodoApp = () => {

    // const [tasks, setTasks] = useState([])

    const [tasks, dispatch] = useReducer(todoReducer, [])

    const [color, setColor] = useState(INITIAL_COLOR)


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

    console.log('rendering')
    return(
        <>
        <ColorContext.Provider value={[color, setColor]}>
            <UserContext.Provider>
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
                    {/* <button onClick={() => setColor('red')}>SWITCH COLOR</button> */}
                    <ColorPicker/>
                </Box>
            </UserContext.Provider>
        </ColorContext.Provider>

        </>
    )
}
export default TodoApp;