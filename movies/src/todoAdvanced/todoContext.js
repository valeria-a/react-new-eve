import { createContext, useContext, useReducer } from "react"

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
            throw Error('Action type does not exist')
    }
}

export const TasksContext = createContext(null)
export const TasksDispatchContext = createContext(null)

export const TasksProvider = ({children}) => {
    const [tasks, tasksDispatch] = useReducer(todoReducer, [])

    return(
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={tasksDispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    )

}

export const useTasks = () => {
    return useContext(TasksContext)
}

export const useTasksDispatch = () => {
    return useContext(TasksDispatchContext)
}