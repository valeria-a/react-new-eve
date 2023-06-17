import { useState } from "react";
import Task from "../Task/Task";
import ColorPicker from "../ColorPick/ColorPicker";

const TaskList = ({tasks, dispatch, onColorChange}) => {

    const items = tasks.map((task) => {
        return <Task key={task.id} 
                    task={task} 
                    // onTaskDelete={onTaskDelete}
                    // onTaskSave={onTaskSave}
                    dispatch={dispatch}
                    />
    })

    return (
        <ul>
            {items}
            <ColorPicker onColorChange={onColorChange}/>
        </ul>
    )
}

export default TaskList;