import TaskForm from "../TaskForm/TaskForm";

import './TodoAppAdvanced.css'

import Header from "../Header/Header";
import { Stack } from "@mui/material";
import TasksContent from "../TasksContent/TasksContent";
import { TasksProvider } from "../todoContext";

const TodoAppAdvanced = () => {

    console.log('Rendering TodoAppAdvanced')


    return(

        <TasksProvider>

            <Stack direction='column' width={'100%'} spacing={2}>
                <Header />
                <Stack direction={'column'} width={'fit-content'} paddingX={'1em'}>
                    <TaskForm/>
                    <TasksContent/>
                </Stack>
            </Stack>

        </TasksProvider>

    )
}
export default TodoAppAdvanced;