import './App.css';
import { useEffect, useReducer } from 'react';
import { todoReducer, initialState } from './reducer';
import Todo from './components/Todo';
import TodoList from './components/TodoList';
import { TodoContext } from './context';
import Card from './components/UI/Card';

function App() {

  const init = () => JSON.parse(localStorage.getItem('todos',)) || initialState
  const [todos, dispatch] = useReducer(todoReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  console.log(todos);
  return (
    <TodoContext.Provider value={{ dispatch, todos }}>
      <Card>
        <TodoList />
        <Todo />
      </Card>
    </TodoContext.Provider>

  );
}

export default App;
