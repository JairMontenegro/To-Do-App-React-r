import React, { useState } from 'react';
import '../styles-shets/form.css'
import { BsPlusLg } from "react-icons/bs";
import { v4 as uuidv4 } from 'uuid';

const FormTask = ({onSubmit}) => {

    const [input, setInput] = useState('')


    const setChange = e =>{
    setInput(e.target.value)
  

}

    const setSent = e =>{
      e.preventDefault();
        
      const newTask = {
          id : uuidv4(),
          text:input,
          done:false,
        }
      
        onSubmit(newTask)
      
    }


    return(
        <form 
        className = 'form-task'
        onSubmit={setSent}>
            <input 
            className='input-task'
            type='text'
            placeholder='Add new To Do.'
            name='text'
            onChange={setChange}
            />
            <button><BsPlusLg className='add-icon'/></button>
        </form>

    )
}

export default  FormTask