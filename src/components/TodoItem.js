import React from 'react';

const TodoItem = ({ todo, index, removeTodo, toggleComplete }) => {
  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center ${todo.completed ? 'list-group-item-success' : ''}`}>
      <div>
        <input
          type="checkbox"
          className="mr-2"
          checked={todo.completed}
          onChange={() => toggleComplete(index)}
        />
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
        <small className="ml-2 text-muted">{todo.dueDate ? `Due: ${todo.dueDate}` : ''}</small>
      </div>
      <button className="btn btn-danger btn-sm" onClick={() => removeTodo(index)}>Delete</button>
    </li>
  );
};

export default TodoItem;
