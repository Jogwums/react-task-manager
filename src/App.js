import React from 'react'
import TaskListContextProvider from './context/TaskListContext'

import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import Header from './components/Header'

import './App.css';

function App() {
  return (
    <TaskListContextProvider>
      <div className="container">
        <Header />
      <TaskForm />
      <TaskList />
      </div>
    </TaskListContextProvider>
    
    
  );
}

export default App;
