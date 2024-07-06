import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addTodo({
        text: value,
        dueDate: dueDate,
        completed: false,
      });
      setValue('');
      setDueDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add a new task"
        />
        <input
          type="date"
          className="form-control"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          placeholder="Due date"
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="submit">Add</button>
        </div>
      </div>
    </form>
  );
};

export default AddTodo;
