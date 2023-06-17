import Task from "../Task/Task";
import { useTasks } from "../todoContext";

const TaskList = () => {

    console.log('Rendering TaskList')

    const tasks = useTasks()

    const items = tasks.map((task) => {
        return <Task key={task.id} 
                    task={task} 
                />
    })



    return (
        <ul>
            {items}
        </ul>
    )
}

export default TaskList;