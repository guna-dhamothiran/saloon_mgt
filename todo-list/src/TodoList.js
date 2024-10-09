// src/TodoList.js

import React, { useState } from 'react';
import './TodoList.css'; // Optional: For custom styling

const TodoList = () => {
  const [todos, setTodos] = useState([]); // State to store the list of todos
  const [inputValue, setInputValue] = useState(''); // State to capture input value

  // Function to handle input changes
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Function to add a new todo
  const addTodo = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (!inputValue.trim()) return; // Don't add if the input is empty

    const newTodo = {
      id: Date.now(), // Use timestamp as a unique id
      text: inputValue,
      completed: false, // Track completion status
    };

    setTodos([...todos, newTodo]); // Update the todos state
    setInputValue(''); // Clear the input field
  };

  // Function to toggle the completion status of a todo
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id)); // Filter out the deleted todo
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <form onSubmit={addTodo} className="todo-form">
        <input
          type="text"
          placeholder="Add a new task..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">Add</button>
      </form>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
