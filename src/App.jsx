/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Todo.css';
import { Route, Routes } from 'react-router-dom';
import workspace from "./component/workspace";

const Todo = () => { 
  const initialTodos = [
    { id: 1, title: 'OFFICE TASK 1', description: 'THIS IS THE DESCRIPTION FOR FIRST TASK', completed: false },
    { id: 2, title: 'OFFICE TASK 2', description: 'THIS IS THE DESCRIPTION FOR SECOND TASK', completed: true },
    { id: 3, title: 'OFFICE TASK 3', description: 'THIS IS THE DESCRIPTION FOR THIRD TASK', completed: false },
  ];

  const [todos, setTodos] = useState(initialTodos);
  const [todo, setTodo] = useState({ id: '', title: '', description: '', completed: false });
  const [statusFilter, setStatusFilter] = useState('All');

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo({ id: '', title: '', description: '', completed: false });
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  const updateTodo = (id, updatedTodo) => {
    const newTodos = todos.map(todo => todo.id === id ? updatedTodo : todo);
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter(todo => statusFilter === 'All' ? true : todo.completed === (statusFilter === 'Completed'));

  return (
    <> 
        <h1>MY TODO</h1>
    
       <div className="todo-app">
      <input className="input" value={todo.title} onChange={e => setTodo({ ...todo, title: e.target.value })} placeholder="Todo Name" />
      <input className="input" value={todo.description} onChange={e => setTodo({ ...todo, description: e.target.value })} placeholder="Todo Description" />
      <button className="button" onClick={addTodo}>Add Todo</button>
      <select className="select" value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Not Completed">Not Completed</option>
      </select>
      {filteredTodos.map((todo) => (
        <><div className="card" key={todo.id}>
          <h2 className="title">{todo.title}</h2>
          <p className="description">{todo.description}</p>
          <select className="select" value={todo.completed ? 'Completed' : 'Not Completed'} onChange={e => updateTodo(todo.id, { ...todo, completed: e.target.value === 'Completed' })}>
            <option value="Completed">Completed</option>
            <option value="Not Completed">Not Completed</option>
          </select>
          <button className="button" onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div><div className='app'>
            <Routes>
              <Route exact path='/' element={<workspace/>} />
               <Route path='/doc/dashboard' element={"todo"} />
               <Route path="/add/todo" element={<>addTodo</>}/>
            </Routes>



          </div></>


      ))}
  <div/>  </div>
</>
  );
};

export default Todo;
