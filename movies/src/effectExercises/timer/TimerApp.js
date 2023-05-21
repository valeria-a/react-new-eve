import { useState } from "react"
import Timer from "./Timer"

const TimerApp = () => {

    const [isRunning, setRunning] = useState(false)
    const [color, setColor] = useState('black')

    return(
        <>
            <h3 style={{color}}>Welcome to timer app</h3>

            <button onClick={() => setRunning(!isRunning)}>
                {isRunning ? 'Stop' : 'Start'} timer
            </button>
            <button 
                onClick={() => setColor(color === 'blue'? 'black': 'blue')}> 
                Switch Color
            </button>

            {isRunning && <Timer color={color}/>}

        </>

    )
}

export default TimerApp