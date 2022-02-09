import React, { useContext } from 'react'
import { TodoContext } from '../context'
import { DELETE, COMPLETE } from '../const'
import './Todo.css'
const Todo = () => {
    const { todos, dispatch } = useContext(TodoContext)
    const complete = (id) => {
        dispatch({ type: COMPLETE, id })
    }
    const deleteTodo = (id) => {
        dispatch({ type: DELETE, id })
    }
    const render = () => {
        return todos.map(el => <li className='item-todo' key={el.id}>
            <b style={{ textDecoration: el.complete ? 'Line-through' : 'none' }}>{el.title}</b>&nbsp;
            <b>{el.date}</b>&nbsp;
            <button onClick={complete.bind(null, el.id)} className='my-check'>Ch
            </button><br />
            <button onClick={() => deleteTodo(el.id)} className='delete'>Del</button>
        </li>)
    }

    return (
        <ol className='list'>
            {render()}
        </ol>
    )
}
export default Todo;
