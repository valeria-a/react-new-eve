import SquareRow from "../SquareRow/SquareRow"

const Square = ({square}) => {
    return(
        <div style={{display: 'flex', flexDirection: 'column'}}>
            {square.map((rowNums) => {
                return(
                    <SquareRow squareRowNums={rowNums}/>
                )
            })}
        </div>
    )
}

export default Square