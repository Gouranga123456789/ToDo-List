import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, removeTodo, toggleComplete }) => {
  return (
    <ul className="list-group m-3">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
