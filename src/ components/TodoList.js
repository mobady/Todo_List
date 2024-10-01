import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, dispatch }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
      {todos.length === 0 && <p>No todos yet! Add some tasks above.</p>}
    </ul>
  );
};

export default TodoList;
