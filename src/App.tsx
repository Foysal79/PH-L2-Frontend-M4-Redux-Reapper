// App.tsx

import TodoForm from './components/todo/TodoForm';
import TodoList from './components/todo/TodoList';
import ToDoProvider from './contes/ToDoProvider';


function App() {
  return (
    <ToDoProvider>
       <div>
      <h1 className="text-sm font-bold w-10/12 mx-auto underline">
        Hello, this is Redux Practice page
      </h1>
      <TodoForm />
      <TodoList />
    </div>
    </ToDoProvider>
    
  );
}

export default App;
