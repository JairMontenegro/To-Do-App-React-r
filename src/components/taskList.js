import React, {useState} from 'react';
import FormTask from './form';
import '../styles-shets/taskList.css'
import Tasks from './Tasks'


const TaskList = () => {

const [tasks, setTask] = useState([])

const addTask = task => {
  if(task.text.trim()){
    task.text = task.text.trim();

      const taskUpdate =[task, ...tasks];
      setTask(taskUpdate)
    
  }
  
}

    return (
    <>
    <FormTask onSubmit={addTask} />
    <div className='container-task-list'>
      {
        tasks.map((tasks) => 
        <Tasks
        key={tasks.id}
        id={tasks.id}
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