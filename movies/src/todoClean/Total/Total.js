import { Typography } from "@mui/material"

const Total = ({tasks}) => {
    return(
        <>

            <Typography variant="p" color={'info'}>Total tasks: {tasks.length}</Typography>

        </>
    )
}

export default Total;