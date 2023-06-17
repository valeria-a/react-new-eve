import { useReducer } from 'react'
import './SudokuApp.css'
import { boardReducer } from '../sudokuReducer'
import { INITIAL_BOARD } from '../sudokuLogic'
import Game from '../Game/Game'

export default function SudokuApp () {
    
    const [board, dispatch] = useReducer(boardReducer, INITIAL_BOARD)
    console.log(board)
    
    return(
        <div className='main-div'>
            <h2>SUDOKU</h2>
            <button onClick={() => {dispatch({type: 'generate'})}}>
                NEW GAME
            </button>
            <Game board={board}/>
        </div>
    )
}