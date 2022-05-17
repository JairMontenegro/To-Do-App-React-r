import React, {useState} from 'react';
import FormTask from './form';
import '../styles-shets/taskList.css'
import Tasks from './Tasks'


const TaskList = () => {

const [tasks, setTask] = useState([])

const addTask = tasks => {
  console.log("agrega tarea")
  console.log(tasks)
}

    return (
    <>
    <FormTask/>
    <div className='container-task-list'>
      {
        tasks.map((tasks) => 
        <Tasks
        text={tasks.text}
        done={tasks.done}
        />

        )
      }
    </div>
    </>
    )
}


export default TaskList