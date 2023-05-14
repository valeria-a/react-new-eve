import { useState } from "react";

import Button from 'react-bootstrap/Button';
import {default as MButton} from '@mui/material/Button' ;
// import { Button } from 'react-bootstrap';

const ClickCounter = () => {

    const [counter, setCounter] = useState(0)

    let num = 5

    // const incrHandler = () => {
    //     setCounter((prevCounter) => prevCounter+1)
    //     setCounter((prevCounter) => prevCounter+1)
    //     num = 10
    //     // console.log(counter)
    //     // setCounter(counter+1)
    // }

    const updateCounter = (reset) => {
        if (reset) {
            setCounter(0)
        } else {
            setCounter(prev => prev + 1)
            // wil not work
            // setCounter(prev => prev++)

        }
    }

    return (
        <>
        <p>{counter}</p>
        {/* <button onClick={incrHandler}>increment</button>
        <button onClick={() => setCounter(0)}>reset</button> */}
        <button onClick={() => updateCounter(false)}>increment</button>
        <button onClick={() => updateCounter(true)}>reset</button>
        <Button variant="info">Bootstrap button</Button>

        <MButton variant="text">Text</MButton>
        <MButton variant="contained">Contained</MButton>
        <MButton variant="outlined">Outlined</MButton>
        </>

    )

}

export default ClickCounter;