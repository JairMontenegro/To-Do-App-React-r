import './App.css';
import Footer from "./components/footer.js"


function App() {
  return (
    <div className="App">

      <div className='wrapper'>
      <header>To-Do List</header>
      <div className="inputField">
            <input type="text" placeholder="Add Your new todo"/>
            <button><i className="fas fa-plus"></i></button>
        </div>
        <ul className="todoList">
            {/* <!-- addd --> */}
        </ul>

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
