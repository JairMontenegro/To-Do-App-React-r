import React, {useState} from 'react';
import FormTask from './form';
import '../styles-shets/taskList.css'
import Tasks from './Tasks'


const TaskList = () => {

const [tasks, setTask] = useState([])

const addTask = task => {
  console.log(task)
  if(task.text.trim()){
    task.text = task.text.trim();
      const taskUpdate =[task, ...tasks];
      setTask(taskUpdate)
    
  }
  
}

const deleteTask  = id => {
  const taskUpdate = tasks.filter(task => task.id !== id)
  setTask(taskUpdate)
}

const taskCompleted = id => { 
  const taskUpdate = tasks.map(task => {
    if (task.id === id){
      task.done = !task.done;
    }
    return task
  })
  setTask(taskUpdate);
} 

    return (
    <>
    <FormTask onSubmit={addTask} />
    <div className='container-task-list'>
      {
        tasks.map((task) => 
        <Tasks
        key={task.id}
        id={task.id}
        text={task.text}
        done={task.done}
        taskCompleted={taskCompleted}
        deleteTask={deleteTask}
        />

        )
      }
    </div>
    </>
    )
}


export default TaskList