import './App.css';
import Tasks from './components/Tasks.js'
import Footer from './components/footer.js'


function App() {
  return (
    <div className="App">

      <div className='wrapper'>
      <header>To-Do List</header>
      <Tasks/>
      {/* <ul className="todoList">
            {/* <!-- addd --> */}
        {/* </ul> */} 

        <div className="footer">
            <span>You have <span className="pendingNumb"></span> pending tasks </span>
            <button>Clear All</button>
        </div>
        </div>
      <Footer/>
      </div>
  );
}

export default App;
