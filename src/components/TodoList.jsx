import React, { useState } from 'react'
import Form from './assets/Form'
import {v4 as uuidv4} from 'uuid'
import Todo from './assets/Todo'
import Edit from './assets/Edit'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const TodoList = () => {
    const [todoValue, setTodoValue] = useState([]); 
    const [alignment, setAlignment] = useState('all');

    const createTodo = todo => {
        (setTodoValue([...todoValue, {id: uuidv4(), task: todo, isEditing: false, checked: false}]))
    }
    
    const deleteTodo = id => {
        setTodoValue(todoValue.filter(todo => todo.id !== id))
    }

    const editTodo = id =>{
        setTodoValue(todoValue.map(todo => todo.id === id ? {...todo, isEditing:!todo.isEditing}: todo))
    }

    const editTask = (task, id) => {
        setTodoValue(todoValue.map(todo => todo.id === id ? {...todo, task, isEditing: ! todo.isEditing}: todo))
    }

    const handleToggleChange = (e, newAlignment ) => {
        setAlignment(newAlignment);
    }

    const isChecked = id =>{
        setTodoValue(todoValue.map(todo => todo.id === id ? {...todo, checked:!todo.checked}: todo))
    }

  return (
    <div className='container bg-gray-700 md:items-center mt-20 p-8 rounded-md'>
        <div className='text-white text-xl font-bold primary mb-2 '>Todolist</div>
        <Form createTodo={createTodo}/>
        {(todoValue.length !== 0 )&& <ToggleButtonGroup
                    className=' flex my-2 bg-green-500 '
                    value={alignment}
                    exclusive
                    onChange={handleToggleChange}
                     >
                    <ToggleButton value="all">All</ToggleButton>
                    <ToggleButton value="completed">Completed</ToggleButton>
                    <ToggleButton value="pending">Pending</ToggleButton>
         </ToggleButtonGroup>}
        {
            todoValue.map((todo, idx) => (
                todo.isEditing ? (
                <Edit key ={idx} editTodo={editTask} task={todo}/>
                ) : (
                    <div>
                  {
                    alignment === 'all' && 
                        (<Todo task={todo} key={idx} deleteTodo={deleteTodo} editTodo={editTodo} isChecked={isChecked} checked={todo.checked}/>)
                      
                  }
                    {
                    alignment === 'completed' && 
                        todo.checked && (<Todo task={todo} key={idx} deleteTodo={deleteTodo} editTodo={editTodo} isChecked={isChecked} checked={todo.checked}/>)
                  }
                  {
                    alignment === 'pending' && 
                        !todo.checked && (<Todo task={todo} key={idx} deleteTodo={deleteTodo} editTodo={editTodo} isChecked={isChecked} checked={todo.checked}/>)
                  }
                    </div>
                )    
            ))
        }
    </div>
  )
}

export default TodoList