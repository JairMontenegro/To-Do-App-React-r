import React from 'react';
import './App.css';
import Footer from './components/footer.js'
import TaskList from './components/taskList';


function App() {
  return (
    <div className="app-todo">
    <div className='task-list'>
      <header>To-Do App</header>
    <TaskList/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
