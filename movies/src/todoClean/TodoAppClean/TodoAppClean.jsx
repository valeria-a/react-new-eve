import { useReducer } from "react";
import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";

import './TodoAppClean.css'
import { todoReducer } from "../todoReducer";
import Header from "../Header/Header";
import { Stack } from "@mui/material";
import TasksContent from "../TasksContent/TasksContent";

const TodoAppClean = () => {

    console.log('Rendering TodoAppClean')

    const [tasks, dispatch] = useReducer(todoReducer, [])

    return(
            <Stack direction='column' width={'100%'} spacing={2}>
                
                <Header />
                <Stack direction={'column'} width={'fit-content'} paddingX={'1em'}>
                    <TaskForm dispatch={dispatch}/>
                    <TasksContent 
                            tasks={tasks} 
                            dispatch={dispatch}/>
                </Stack>
            </Stack>

    )
}
export default TodoAppClean;