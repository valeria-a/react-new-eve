import { useState } from "react"
import FilterBox from "./FilterBox"
import Quote from "./Quote"

const React99App = () => {

    const [seconds, setSeconds] = useState(5)
    const [api, setApi] = useState('none')


    return(
        <>
            <FilterBox 
                api={api} 
                seconds={seconds} 
                onApiChange = {(val) => setApi(val)}
                onSecondsChange = {(val) => setSeconds(val)}
            />
            <Quote api={api} seconds={seconds}/>
        </>
    )
}

export default React99App