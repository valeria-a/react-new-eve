import { Button, Stack } from "@mui/material"
import { useNavigate } from "react-router-dom";

const DoesNotExistPage = () => {

    const nav = useNavigate()

    return(
        <Stack spacing={'2em'} direction={'column'}>
            <h2>OOPS, it looks like this page does not exist</h2>
            <Button onClick={() => nav('/')}>GO HOME</Button>
        </Stack>
    )
}

export default DoesNotExistPage;