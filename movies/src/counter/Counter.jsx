import { useState } from "react"

export default function Counter () {

    const [isChecked, setIsChecked] = useState(false)

    return(

        <div style={{flexDirection: 'column', margin: '10px'}}>

            {isChecked
            ?
                <Number isRed={true}/>
            :
                <Number />
            }
            {/* {isChecked
            ?
                <Number key="red-num" isRed={true}/>
            :
                <Number key="not-red-num"/>
            } */}

            {/* {isChecked && <Number isRed={true}/>}
            {!isChecked && <Number/>} */}

            <input type="checkbox" checked={isChecked} 
                onChange={() => setIsChecked(prev => !prev)}/>
            <label>Color RED</label>
        </div>

    )
}

const Number = ({isRed=false}) => {
    
    const [cnt, setCnt] = useState(0)

    return(
        <>
            <p style={{color: isRed ? 'red' : 'black'}}>{cnt}</p>
            <button onClick={() => setCnt(prev => prev + 1)} >Increment</button>
        </>

    )
}