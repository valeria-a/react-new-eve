import { useState } from "react";
import Task from "../Task/Task";

const TaskList = ({tasks, dispatch}) => {

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
        </ul>
    )
}

export default TaskList;