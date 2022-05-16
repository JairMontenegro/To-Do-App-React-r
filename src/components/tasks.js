import React from 'react';
import '../styles-shets/tasks.css'
import { BsPlusLg } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";


const Tasks = ({text, done}) => {
 
  return (
  <div className={ done ? 'task-container done' : 'task-container'}>
    <div className='task-text'>
      {text}
    </div>
    <div className='container-icons'>
        <BsTrash className='delete-icon'/>
        <BsPlusLg className="add-icon"/>
    </div>
  </div>
 );
}


export default Tasks


