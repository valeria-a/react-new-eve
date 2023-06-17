import './Cell.css'

const Cell = ({num}) => {
    return(
        <div>
            {num !== null ? num : ''}
        </div>
    )
}
export default Cell;