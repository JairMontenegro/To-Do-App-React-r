import React from 'react';
import '../styles-shets/tasks.css'
import { BsTrash } from "react-icons/bs";


const Tasks = ({id, text, done, taskCompleted, deleteTask}) => {

  return (
  <div className={ done ? 'task-container done' : 'task-container'}>
    <div className='task-text'
    onClick ={() => taskCompleted(id)}>
      {text}
    </div>
    <div
    className='container-icons'
    onClick={()=> deleteTask(id)}>
    <BsTrash className='delete-icon' />
        
    </div>
  </div>
);
}


export default Tasks


