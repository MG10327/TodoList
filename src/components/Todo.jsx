import React from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

const Todo = () => {
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
                <input className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your task' />
                <button className='border-none bg-orange-500 rounded-full w-32 h-13 text-white text-lg font-medium cursor-pointer'>ADD +</button>
            </div>

    {/* Todo List */}

            <div>
                <TodoItems text="Workout for an hour"/>
                <TodoItems text="Build React Projects"/>
                <TodoItems text="Eat 3500 Calories"/>
                <TodoItems text="Deploy React Apps"/>
            </div>
        </div>

    </div>
  )
}

export default Todo