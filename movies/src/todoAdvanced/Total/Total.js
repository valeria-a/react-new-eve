import { Typography } from "@mui/material"
import { useTasks } from "../todoContext";

const Total = () => {

    console.log('Rendering Total')

    const tasks = useTasks()

    return(
        <Typography variant="p" color={'info'}>Total tasks: {tasks.length}</Typography>
    )
}

export default Total;