import { useContext } from "react"
import { ColorContext } from "../TodoApp/todoReducer"

const ColorPicker = () => {

    const [pickerColor, setColor] = useContext(ColorContext)
    console.log(pickerColor)


    return(
        <form>
            <input type="color" value={pickerColor} 
                onChange={e => setColor(e.target.value)}/>
        </form>
    )
}

export default ColorPicker