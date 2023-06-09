import { createContext } from "react"

export const todoReducer = (tasks, {type, context}) => {
    switch (type) {
        case 'addTask':
            const newTask = {
                id: Date.now(),
                title: context.title
            }
            return [...tasks, newTask]
        case 'deleteTask':
            return tasks.filter((task) => task.id !== context.id)
        case 'editTask':
            const myTask = tasks.filter((task) => task.id === context.id)[0]
            myTask.title = context.title
            return [...tasks]
        default:
            throw 'Action type does not exist'
    }
}

export const INITIAL_COLOR = '#222ccc'
export const ColorContext = createContext([INITIAL_COLOR, () => {}])
export const UserContext = createContext(null)

console.log('context created')

