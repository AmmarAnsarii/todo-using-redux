import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
    <AddTodo/>
    <TodoItems/>
    <Toaster/>
    </>
  )
}

export default App
