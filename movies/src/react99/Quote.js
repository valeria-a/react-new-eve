import { useEffect, useState } from "react"
import { getQuote } from "./api"

const Quote = ({api, seconds}) => {


    const [quote, setQuote] = useState('')

    console.log('rendering Quote', api, seconds, quote)

    useEffect(() => {

        console.log('useEffect', api, seconds)
        let intervalId = null

        if (api !== 'none' && seconds > 0) {
            intervalId = setInterval(async () => {
                const res = await getQuote(api)
                setQuote(res)
            }, seconds*1000)
        }

        return () => {
            clearInterval(intervalId)
        }

    }, [api, seconds])

    return(
        <>
            <p>{quote}</p>
        </>
    )
}

export default Quote