import { useState } from "react"
import CounterButton from "./CouterButton"
import Stack from '@mui/material/Stack';
import { Button } from "@mui/material";


const CounterComponent = () => {
    const [counter, setCounter] = useState(0)

    return(
        <Stack direction={'column'} spacing={3}>
            <Stack direction={'row'}>
                <CounterButton plus={false}/>
                <p>{counter}</p>
                <CounterButton />
            </Stack>
            <Button color="secondary">RESET</Button>
        </Stack>
        
    )
}

export default CounterComponent