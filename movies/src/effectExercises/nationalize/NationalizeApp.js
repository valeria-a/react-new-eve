import { useState } from "react"
import Result from "./Result"

export default function NationalizeApp() {

    const [name, setName] = useState(null)
    const [formName, setFormName] = useState('')

    const handleClick = () => {
        setName(formName)
    }

    return(
        <>
            <input 
                type="text" 
                value={formName} 
                onChange={(e) => setFormName(e.target.value)}
            />
            <button onClick={handleClick}>OK</button>
            <hr />
            <Result name={name} formName={formName}/>
        </>
    )
}