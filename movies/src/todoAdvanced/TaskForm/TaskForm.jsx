import { Button } from "@mui/material"
import { useState } from "react"
import { useTasksDispatch } from "../todoContext"

const TaskForm = () => {

    console.log('Rendering TaskForm')

    const dispatch = useTasksDispatch()
    const [taskValue, setTaskValue] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch({
            type: 'addTask',
            context: {title: taskValue}
        })
        setTaskValue('')
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <input 
                type="text" 
                placeholder="Write your task..."
                value={taskValue}
                onChange={(event) => setTaskValue(event.target.value)}/>
            <Button type="submit">ADD</Button>

        </form>
    )
}

export default TaskForm;