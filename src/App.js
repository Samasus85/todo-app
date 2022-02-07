import React, { useEffect, useState } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Card from './components/UI/Card';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {                                   // В этом useEffect'e мы получаем данные с localStorage которые обновляют
    //  состояние массива с todo которые в дальнейшем рендерятся
    const stored = JSON.parse(localStorage.getItem('todos'));
    setTodos(stored || [])
  }, [])


  useEffect(() => {                                               // В этом useEffect'e мы отправляем данные в localStorage
    // Почему пы пишем внутри useEffect'a? Потому что localStorage в React'e является side effect'ом
    // В зависимости я написалa  переменную todos с нашими данными поскольку useEffect должен срабатывать при изменении этих данных
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
