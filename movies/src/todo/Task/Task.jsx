import { useState } from "react";

const Task = ({task, onTaskDelete, onTaskSave}) => {

    // just to get the initial title to display
    const [title, setTitle] = useState(task.title)

    const [editing, setEditing] = useState(false)

    const handleEditSave = () => {
        if (editing) {
            onTaskSave(task.id, title)
        }
        setEditing(prev => !prev)
    }

    const handleCancelDelete = () => {
        if (editing) { 
            // cancel editing
            setEditing(false)
            setTitle(task.title)
        } else {
            onTaskDelete(task.id)
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

            <button onClick={handleCancelDelete}>
                {editing ? 'CANCEL' : 'DELETE'}
            </button>
            <button onClick={handleEditSave}>
                {editing ? 'SAVE' : 'EDIT'}
            </button>
        </li>
    )
}

export default Task;