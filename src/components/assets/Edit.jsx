import React, { useState } from 'react'

const Edit = ({editTodo, task}) => {
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        editTodo((value !==''? value: task.task), task.id);
        setValue('');
    }
  return (
    <div>
        <form className='mb-4 font-primary w-full items-center' onSubmit={handleSubmit}>
            <input type='text' className='outline-none  bg-transparent border border-blue-500 p-4
            w-auto text-white mb-8 rounded placeholder:text-white-300 placeholder:text-sm'
            placeholder={task.task}
            onChange={(e) => setValue(e.target.value)}
            value={value}/>
            <button className='bg-blue-800 text-white cursor-pointer rounded ml-2 px-2' >Update Task</button>

        </form>

    </div>
  )
}

export default Edit