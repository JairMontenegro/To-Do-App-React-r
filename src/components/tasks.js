import React from 'react';
import '../styles-shets/tasks.css'
import { BsFillFilePlusFill } from "react-icons/bs";

const Task = ({text}) => {
 return (
   <div className="inputField">
    <input type="text" placeholder="Add Your new task" />
    {text}
    <div >
        <BsFillFilePlusFill className="add-icon"/>
    </div>
   </div>
 );
}


export default Task