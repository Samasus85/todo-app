import React, { useEffect, useState } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Card from './components/UI/Card';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // console.log('effect');
    const stored = JSON.parse(localStorage.getItem('todos'));
    if (stored === '1') {
      setTodos(stored || [])
    }
  }, [])


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))

  }, [todos])
  const addTask = (todos) => {
    setTodos((prevState) => [todos, ...prevState])
  }


  return (
    <Card >
      <header>
        <h1>Список задач</h1>
      </header>
      <div>
        <TodoForm onAddTask={addTask} />
        <Todo
          todos={todos}
          onChange={setTodos}
        />
      </div>
    </Card>
  )
}

export default App;
