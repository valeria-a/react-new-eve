import Cell from "../Cell/Cell"

const SquareRow = ({squareRowNums}) => {
    return(
        <div style={{display: 'flex', flexDirection: 'row'}}>
            {squareRowNums.map(num => {
                return (
                    <Cell num={num}/>
                )
            })}
        </div>
    )
}
export default SquareRow;