import React, { useState } from 'react'

const Form = ({createTodo}) => {
    const [value, setValue] = useState('');
    const [invalid, setInvalid] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        value && createTodo(value);
        !value && setInvalid(true);
        setValue('');
    }
    
  return (
    <div>
        <form className='mb-4 font-primary w-full items-center' noValidate onSubmit={handleSubmit} >
            <input 
            type='text' 
            name='name'
            className={` peer outline-none bg-transparent border border-gray-500 p-4 md:w-auto sm:w-auto
            w-auto text-white  rounded placeholder:text-white-300 placeholder:text-sm 
            peer border-2 focus:ring-2
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            ${invalid ? 'border-pink-500 focus:invalid:ring-pink-500' : ''}
            `}
            placeholder='Please add your task here...'
            onChange={(e) => {setValue(e.target.value);  setInvalid(false)}}
            value={value}
            required
            />
            <button type='submit' className='bg-blue-500 text-white cursor-pointer rounded ml-2 px-2 sm:my-2' >Add Task</button>
            <p className={`mb-8  peer-focus:peer-invalid:visible text-pink-600 text-sm ${invalid ? 'visible text-pink-600 text-sm' : 'invisible'}`}>
                Task name is required
            </p>
        </form>

    </div>
  )
}

export default Form