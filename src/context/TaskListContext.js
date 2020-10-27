import React, { createContext, useState } from 'react'
import {v4 as uuidv4} from 'uuid'

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
    //for local storage to actuallu hold values after refresh
    const initialState = JSON.parse(localStorage.getItem('tasks')) || []

    const [tasks, setTasks] = useState(initialState)

    //use local storage 
    React.useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])
    
    //Editing current entries 
    const [ editItem, setEditItem] = useState(null)

    const findItem = (id) => {
        // setTasks(tasks.filter((task) => task.id === id))
        const item = tasks.find(task => task.id === id)

        setEditItem(item)

    }

    const editTasks = (title, id) => {
        const newTasks = tasks.map(task => (task.id === id ? {title, id} : task))

        setTasks(newTasks)
        setEditItem(null)

    }


    //End of editing code


    const addTask = (title) => {
        const newTask = {
            title,
            id: uuidv4(),
        }
        setTasks([...tasks, newTask])
    }

    const removeTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const clearList =()=>{
        setTasks([])
    }
    return (
        <TaskListContext.Provider value={{
                tasks, addTask, removeTask, clearList, findItem, editTasks, editItem}}>
            {props.children}
        </TaskListContext.Provider>
    )

}

export default TaskListContextProvider;