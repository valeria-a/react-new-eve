import { useContext, useState } from "react";
import { ColorContext } from "../TodoApp/todoReducer";

const Task = ({task, dispatch}) => {

    // just to get the initial title to display
    const [title, setTitle] = useState(task.title)
    const color = useContext(ColorContext)

    const [editing, setEditing] = useState(false)

    const handleEditSave = () => {
        if (editing) {
            // onTaskSave(task.id, title)
            dispatch({
                type: 'editTask',
                context: {id: task.id, title: title}
            })
        }
        setEditing(prev => !prev)
    }

    const handleCancelDelete = () => {
        if (editing) { 
            // cancel editing
            setEditing(false)
            setTitle(task.title)
        } else {
            // onTaskDelete(task.id)
            dispatch({
                type: 'deleteTask',
                context: {id: task.id}
            })
        }
    }

    return(
        <li style={{marginBottom: '10px'}}>
            {editing
            ?
            <input value={title} 
                onChange={(event) => {setTitle(event.target.value)}}>    
            </input>
            :
            <p style={{flexGrow: 1}}>{task.title}</p>
            }

            <button style={{color: color}} onClick={handleCancelDelete}>
                {editing ? 'CANCEL' : 'DELETE'}
            </button>
            <button style={{color: color}} onClick={handleEditSave}>
                {editing ? 'SAVE' : 'EDIT'}
            </button>
        </li>
    )
}

export default Task;