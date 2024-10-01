import React, { useReducer, useEffect } from 'react';
import TodoList from './ components/TodoList';
import AddTodoForm from './ components/AddTodoForm';
import './App.css';

// Initial state for the reducer
const initialTodos = [];

// Reducer function to manage todo actions
function todoReducer(state, action) {
  switch (action.type) {
    case 'SET_TODOS':
      return action.todos;
    case 'ADD_TODO':
      return [action.newTodo, ...state]; 
    case 'TOGGLE_COMPLETE':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id);
    case 'EDIT_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, title: action.newText } : todo
      );
    default:
      return state;
  }
}


function App() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  // Fetch the todos from the API when the component mounts
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        const initialTodos = data.slice(0, 10); // Limit to first 10 todos
        console.log(initialTodos); 
        dispatch({ type: 'SET_TODOS', todos: initialTodos });
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    };
  
    fetchTodos();
  }, []);
  

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodoForm dispatch={dispatch} />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
}

export default App;