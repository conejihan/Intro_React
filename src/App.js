import logo from './logo.svg';
import './App.css';
import {Todo} from './Todo'

function App() {
      const todos = [{text:"Learn React", priority:5, dueDate: new Date() },
          {text:"Learn about APIs", priority:4, dueDate: new Date(2020,1,23) },
          {text:"write TODO App", priority:3, dueDate: new Date(2020,1,30) }];

   return (
     <div>
    <TodoList todoList={todos}/>
    {this.props.todos.map((todoList)=>{
      return(
        {todos}
      )

    }

  )}
   </div>
 );

}

export default App;
