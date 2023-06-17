import { Button } from "@mui/material";
import { useState } from "react";

const Task = ({task, dispatch}) => {

    // just to get the initial title to display
    const [title, setTitle] = useState(task.title)

    const [editing, setEditing] = useState(false)

    const handleEditSave = () => {
        if (editing) {
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
            dispatch({
                type: 'deleteTask',
                context: {id: task.id}
            })
        }
    }

    return(
        <li style={{marginBottom: '10px'}}>
            <input type="checkbox" />
            {editing
            ?
            <input value={title} 
                onChange={(event) => {setTitle(event.target.value)}}>    
            </input>
            :
            <p style={{flexGrow: 1}}>{task.title}</p>
            }

            <Button onClick={handleCancelDelete}>
                {editing ? 'CANCEL' : 'DELETE'}
            </Button>
            <Button onClick={handleEditSave}>
                {editing ? 'SAVE' : 'EDIT'}
            </Button>
        </li>
    )
}

export default Task;