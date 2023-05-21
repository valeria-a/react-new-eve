import { useEffect, useState } from "react"

const Timer = ({color}) => {


    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const intervalId = setTimeout(() => {
            console.log('3 second passed')
            setSeconds(prev=> prev+3)
        }, 3000)

        return () => {
            console.log('running clean-up function')
            clearTimeout(intervalId)
        }

    }, [seconds])


    // setInterval(() => setSeconds(prev=> prev+1))

    return(
        <>
            <p style={{color}}>{seconds}</p>
        </>
    )

}

export default Timer