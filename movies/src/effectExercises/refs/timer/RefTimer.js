import { useEffect, useRef, useState } from "react"

// let tId = null

const RefTimer = () => {

    const [seconds, setSeconds] = useState(0)
    const [running, setRunning] = useState(false)

    // const[tId, setTid] = useState(null)

    // let tId = null

    const tId = useRef(null)

    console.log('tID', tId)

    const handleClick = () => {
        setRunning(!running)
        if (running) {
            console.log('clearing interval', tId)
            clearInterval(tId.current)
        } else {
            const intervalId = setInterval(()=> setSeconds(prev=>prev+1), 1000)
            tId.current = intervalId
            // tId = intervalId
            // setTid(intervalId)
        }
    }

    return(
        <>
            <button onClick={handleClick}>{running ? 'Stop' : 'Start'}</button>
            <p>{seconds}</p>
        </>
    )
}

export default RefTimer