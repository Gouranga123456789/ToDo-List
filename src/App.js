import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center m-3">To-Do List</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} toggleComplete={toggleComplete} />
    </div>
  );
};

export default App;
