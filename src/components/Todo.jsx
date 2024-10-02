import React, { useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

const Todo = () => {

    const inputRef = useRef()

    const [todoList, setTodoList] = useState([])

    const add = () => {
        const inputText = inputRef.current.value.trim() //removes extra space from the start and end of a string

        if (inputText === "") {
            return null
        }

        const newTodo = {
            id: Date.now(),
            text: inputText,
            isComplete: false,
        }
        setTodoList((prev)=> [...prev, newTodo])
    }

    const deleteTodo = (id)=>{
        setTodoList((prvTodos)=>{
            return prvTodos.filter((todo)=> todo.id !== id)
        })
    }

  return (
    <div className='grid'>

    {/* Title */}

        <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
            <div className="flex item-center mt-7 gap-2">
                <h1 className='text-3xl font-semibold'>To-Do List</h1>
                <img src={todo_icon} alt="" className='w-8'/>
            </div>

    {/* Input box */}

            <div className='flex item-center my-7 bg-gray-200 rounded-full'>
                <input className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your task' ref={inputRef} />
                <button className='border-none bg-orange-500 rounded-full w-32 h-13 text-white text-lg font-medium cursor-pointer' onClick={add}>ADD +</button>
            </div>

    {/* Todo List */}

            <div>
                {todoList.map((item, i)=> {
                    return <TodoItems key={i} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} />
                })}
            </div>
        </div>

    </div>
  )
}

export default Todo