import AddToDoForm from './Components/AddToDoForm';
import ToDoList from './Components/ToDoList';
import ToDoItemsContextProvider from './Components/ToDoItemsContext'

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Just Do It</h1>
        <ToDoItemsContextProvider>
          <AddToDoForm />
          <ToDoList />
        </ToDoItemsContextProvider>
      
      </div>
    </div>
  );
}

export default App;
