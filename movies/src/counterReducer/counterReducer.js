import { useState } from "react"

export const counterReducer = (counter, action) => {
    switch (action.type) {
        case 'increment': {
            return counter + 1
        }
        case 'decrement': {
            return Math.max(counter - 1, 0)
        }
        case 'reset': {
            return 0
        }
        default: {
            throw `Undefined action type: ${action.type}`
        }
    }
}

// const useReducer = (reducer, initialState) => {
    
//     const [state, setState] = useState(initialState)

//     const dispatch = (state, action) => {
//         const nextState = reducer(state, action)
//         setState(nextState)

//         // setState(prev => reducer(prev, action))
//     }

//     return [state, dispatch]
    
// }

