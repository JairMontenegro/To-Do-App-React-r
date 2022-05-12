import React from 'react';
import '../styles-shets/tasks.css'
import { BsPlusLg } from "react-icons/bs";

const Tasks = ({text, done}) => {
 return (
   <div className="inputField">
    <input type="text" placeholder="Add Your new task" />
    {text}
    <div className='container-icons'>
        <BsPlusLg className="add-icon"/>
    </div>
   </div>
 );
}


export default Tasks


