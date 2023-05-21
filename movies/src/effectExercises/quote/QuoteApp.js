import axios from "axios"
import { useEffect, useState } from "react"

export default function QuoteApp() {

    const [quote, setQuote] = useState(null)

    console.log('Rendering QuoteApp', quote)

    // axios.get('https://api.quotable.io/random').then(
    //     res => setQuote(res.data.content)
    // )
    
    useEffect(() => {
        console.log('Inside useEffect', quote)
        axios.get('https://api.quotable.io/random').then(
            res => setQuote(res.data.content)
        )
    }, [])

    return(
        <p>{quote}</p>
    )
}