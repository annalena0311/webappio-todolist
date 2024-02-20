import React, { useState } from 'react';
import './App.css'; // Import the CSS file

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>TODO List</h1>
      <p>Stay organized and get things done with a simple TODO list app. Easily manage your tasks and boost your productivity</p>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a new task"
          value={inputValue}
          onChange={handleInputChange}
          className="input-field"
        />
        <button onClick={handleAddTodo} className="add-button">Add Task</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <span>{todo}</span>
            <button onClick={() => handleDeleteTodo(index)} className="delete-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
