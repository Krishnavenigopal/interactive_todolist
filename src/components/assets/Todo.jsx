import React,{ useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';

const Todo = ({task, deleteTodo, editTodo, isChecked, checked}) => {
    const [strike, setStrike] = useState(false);
    const [done, setDone] = useState(false);

  return (
    <div  className='flex justify-between items-center bg-violet-500
    text-white py-3 px-4 rounded-md mb-1 cursor-pointer'>
        <div className='flex items-center'>
        <Tooltip title={`${done || (checked && checked === true) ? 'Undo' : 'Done'}`} arrow>
        <Checkbox checked={checked} className='text-xl border border-white' onChange={() => {setStrike((prev) => !prev); setDone((prev) => !prev); isChecked(task.id) }}/></Tooltip>
        <p className={`font-primary  ${strike || (checked && checked === true) ? 'line-through' : ''}`}> {task.task}</p>
        </div>
        <div className='flex items-center gap-x-4'>
            <AiFillEdit className='text-xl' onClick={() => editTodo(task.id)}/>
            <BsFillTrashFill className='text-xl' onClick={() => deleteTodo(task.id)}/>
        </div>
    </div>
  )
}

export default Todo