import { useContext, useState } from "react"
import { ColorContext } from "../TodoApp/todoReducer"

const TaskForm = ({dispatch}) => {

    console.log('rendering TaskForm')

    const [taskValue, setTaskValue] = useState('')
    const color = useContext(ColorContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(taskValue)
        // onTaskAdd(taskValue)
        dispatch({
            type: 'addTask',
            context: {title: taskValue}
        })
        setTaskValue('')
    }

    const handleClick = () => {
        console.log(taskValue)
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)}>

            <input 
                type="text" 
                placeholder="Write your task..."
                value={taskValue}
                onChange={(event) => setTaskValue(event.target.value)}/>
            <button style={{color: color}} type="submit" onClick={handleClick}>ADD</button>

        </form>
    )
}

export default TaskForm;