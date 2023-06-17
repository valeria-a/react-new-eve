import { Button } from "@mui/material"
import { useState } from "react"

const TaskForm = ({dispatch}) => {

    console.log('Rendering TaskForm')

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