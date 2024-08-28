import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import todoSlice, { addTodo } from '../store/todoSlice'
import toast, {Toaster} from 'react-hot-toast'

function AddTodo() {
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    const addTodoHandler = (e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
        toast.success("Task added succesfully")
    }
    console.log(input);
    

  return (
    <form onSubmit={addTodoHandler}>

        <div className="border flex w-full text-black h-9" >
            <input type="text" placeholder="Add a Task..."
            className= "w-[1100px] bg-rose-400 placeholder-black border-black h-full"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            
            />
                        
            <button type = "submit" className="border bg-blue-500 hover:scale-105 w-28 h-full">Add Todo</button>
        </div>
    </form>
  )
}

export default AddTodo;