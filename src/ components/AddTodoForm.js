import React, { useState } from 'react';

const AddTodoForm = ({ dispatch }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch({
        type: 'ADD_TODO',
        text: newTodo,
        newTodo: {
          userId: 1,
          id: Date.now(),
          title: newTodo,
          completed: false 
        }
      });
      setNewTodo('');
    }
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        placeholder="Add new task"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default AddTodoForm;
