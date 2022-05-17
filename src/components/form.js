import React, { useState } from 'react';
import '../styles-shets/form.css'
import { BsPlusLg } from "react-icons/bs";

const FormTask = () => {

    const [input, setInput] = useState('')


    const setChange = e =>{
console.log('writing....')


}

    const setSent = e =>{
        const newTask ={
            id:'345456',
            text:'su puta madre sabe programar', 
        }
    }

   

    return(
        <form  className = 'form-task'>
            <input 
            className='input-task'
            type='text'
            placeholder='Add new To Do.'
            name='text'
            onChange={setChange}
            />
            <BsPlusLg className="add-icon"/>
        </form>

    )
}

export default  FormTask