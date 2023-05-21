import { useEffect, useRef, useState } from "react"

export default function Form({data, onChange}) {

    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)

    useEffect(() => {
        console.log('Called useEfect', data)
        if (data.lastEdited === 'firstName') {
            firstNameRef.current.focus()
        } else {
            lastNameRef.current.focus()
        }
    }, [data.lastEdited])

    return(
        <form>
            <input 
                ref={firstNameRef}
                placeholder="First name" 
                autoFocus
                value={data.firstName}
                onChange={(e) => onChange('firstName', e.target.value)}
                />
            <input 
                ref={lastNameRef}
                placeholder="Last name"
                value={data.lastName}
                onChange={(e) => onChange('lastName', e.target.value)}
                />
        </form>
    )
    
}