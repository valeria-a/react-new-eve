import { generateBoard } from "./sudokuLogic"

export const boardReducer = (board, action) => {
    switch (action.type) {
        case 'generate':
            return generateBoard(5)
        default:
            throw `Undefined action ${action.type}`
    }
}