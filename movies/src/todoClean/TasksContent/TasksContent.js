import { Typography } from "@mui/material";
import TaskList from "../TaskList/TaskList"
import Total from "../Total/Total";

const TasksContent = ({tasks, dispatch}) => {

    const tasksHeaderText = tasks.length === 0 ? 'No tasks yet' : 'Your tasks:' 

    return(
        <>
            <Typography variant="h6" color={'primary'} marginTop={'2em'}>{tasksHeaderText}</Typography>
            <TaskList tasks={tasks} dispatch={dispatch} />
            {tasks.length !== 0 &&
                <>
                    <hr style={{width: '100%', margin: '2em 0'}}/>
                    <Total tasks={tasks}/>
                </>
            }
        </>
    )
}

export default TasksContent;