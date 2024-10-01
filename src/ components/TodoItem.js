import React, { useState } from 'react';

const TodoItem = ({ todo, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.title); 

  const handleSave = () => {
    if (editedText.trim()) {
      dispatch({ type: 'EDIT_TODO', id: todo.id, newText: editedText });
      setIsEditing(false);
    }
  };

  return (
    <li className="todo-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="edit-input"
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch({ type: 'TOGGLE_COMPLETE', id: todo.id })}
          />
          <span
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.title}
          </span>
          <button onClick={() => setIsEditing(true)} className="edit-btn">
            Edit
          </button>
          <button
            onClick={() => dispatch({ type: 'DELETE_TODO', id: todo.id })}
            disabled={!todo.completed}
            className="delete-btn"
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;