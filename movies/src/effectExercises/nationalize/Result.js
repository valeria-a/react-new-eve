import { useEffect, useState } from "react"
import axios from 'axios'

const Result = ({formName, name}) => {

    console.log('rendering Result', formName, name)

    const [nat, setNat] = useState(null)

    useEffect(() => {
        console.log('inside useEffect', formName, name)
        const fetchData = async () => {
            console.log('sending request')
            const res = await axios.get(`https://api.nationalize.io?name=${name}`)
            setNat(res.data.country[0].country_id)
            console.log('after setting nationality')
        }
        fetchData()
        console.log('after called fetchData')
        

    }, [name])

    return (
        <>
            <p>Current name in form: {formName}</p>
            <p>Nationality: {nat}</p>
        </>
    )
}

export default Result

// const fetchData = async () => {
//     console.log('sending request')
//     const res = await axios.get(`https://api.nationalize.io?name=${name}`)
//     console.log('after await')
//     setNat(res.data.country[0].country_id)
// }

// if (name) {
//     fetchData()
//     console.log('after fetchData')
// }