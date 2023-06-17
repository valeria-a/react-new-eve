import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faCircleMinus } from '@fortawesome/free-solid-svg-icons'


const CounterButton = ({plus=true, ...eventHandlers}) => {
    return(
        <IconButton {...eventHandlers}>
            <FontAwesomeIcon icon={plus ? faCirclePlus : faCircleMinus} />
        </IconButton>
    )
}

export default CounterButton