import { useState } from "react"
import Form from "./Form"

export default function FormFocusApp() {

    const [show, setShow] = useState(false)
    const [nameData, setNameData] = useState({
        firstName: '',
        lastName: '',
        lastEdited: 'firstName'
    })

    const handleChanged = (field, newVal) => {
        if (field === 'firstName') {
            setNameData({
                ...nameData,
                firstName: newVal,
                lastEdited: 'firstName'
            })
        } else {
            setNameData({
                ...nameData,
                lastName: newVal,
                lastEdited: 'lastName'
            })
        }
    }

    return(
        <>
        <button
            onClick={() => setShow(!show)}>
            {show? 'Hide' : 'Display'} Form
        </button>

        {show && <Form data={nameData} onChange={handleChanged}/>}
        </>
    )
    
}