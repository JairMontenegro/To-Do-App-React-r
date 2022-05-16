import React from 'react';
import '../styles-shets/tasks.css'
import { BsPlusLg } from "react-icons/bs";

const Tasks = ({text, done}) => {
 
  return (
  <div className='task-container'>
    <div className='task-test'>
    {text}
    </div>
    <div className='container-icons'>
        <BsPlusLg className="add-icon"/>
    </div>
  </div>
 );
}


export default Tasks


