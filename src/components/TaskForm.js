import React, { useContext, useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { TaskListContext } from '../context/TaskListContext';


const TaskForm = () => {
    const {addTask, clearList, editItem, editTasks} = useContext(TaskListContext);

    const [title, setTitle] = useState('')

    const handleChange = (e) => {
        setTitle(e.target.value)

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!editItem){
            addTask(title)
            setTitle("")
        } else {
            editTasks(title, editItem.id)
        }
        
    }

    //to handle editing use useEffect
    useEffect(() => {
        if(editItem){
            setTitle(editItem.title)
            console.log(editItem);
        } else{
            setTitle('');
        }
        //passing editItem here ensure the useEffect runs only when editItem changes 
    }, [editItem])

    return (
        <Form onSubmit={handleSubmit}>
            <Input 
                   onChange={handleChange}
                   value={title}
                   type="text" 
                   className="task-input" 
                   placeholder="Add task..."
                   autoComplete='off'
                   autoCapitalize='sentences'
                   autoFocus="on"
                   required 
            />
            <div className="buttons" style={{display:'flex', margin: '1rem auto',}}>
                <Button type="submit" className="btn add-task-btn">
                    {editItem ? 'Edit Task' : 'Add Task'}
                </Button>
                <Button clear className="btn clear-btn" onClick={() => clearList()}>
                    Clear
                </Button>
            </div>
        </Form>
    )
}


export default TaskForm;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    

`
const Input = styled.input`
    background: transparent;
    color: var(--white);
    border-radius: 10px;
    border: 2px solid palevioletred;
    padding: 0.5rem;
    &:focus{
        border: 2px solid white;
        outline: none;
    }
`
const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
    box-shadow: 2px 4px 6px rgba(255,255,255,0.3);
    cursor: pointer;

    ${props => props.clear && css`
    background: palevioletred;
    color: white;
  `}

`;