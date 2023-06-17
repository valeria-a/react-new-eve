import { useContext, useReducer, useState } from "react"
import CounterButton from "./CouterButton"
import Stack from '@mui/material/Stack';
import { Button } from "@mui/material";
import { ColorContext } from "./colorContext";
import { counterReducer } from "./counterReducer";


const CounterComponent = () => {
    const [counter, counterDispatch] = useReducer(counterReducer, 0)

    return(
        <Stack direction={'column'} spacing={3}>
            <Stack direction={'row'}>
                <CounterButton 
                    plus={false}
                    onClick={() => counterDispatch({type: 'decrement'})}
                />
                <p>{counter}</p>
                <CounterButton 
                    onClick={() => counterDispatch({type: 'increment'})}/>
            </Stack>
            <Button color="secondary"
                onClick={() => counterDispatch({type: 'reset'})}>
                RESET
            </Button>
        </Stack>
        
    )
}

export default CounterComponent