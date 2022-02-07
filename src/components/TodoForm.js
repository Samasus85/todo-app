import React, { useReducer, useState } from "react";
import classes from './TodoForm.module.css';
import Modal from "./UI/Modal";

const todoReduser = (prevState, action) => {
    switch (action.type) {
        case 'INPUT_TASK': return {
            value: action.value,
            date: new Date().toLocaleDateString()
        }
        default: return prevState
    }
}
const TodoForm = ({ onAddTask }) => {
    const [todo, dispatchTodo] = useReducer(todoReduser, {
        value: '',
        date: null,
    });
    const [error, setError] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault()
        if (todo.value.trim().length > 0) {
            const newItem = {
                ...todo,
                id: Math.random().toString(),
                complete: false,
            }
            onAddTask(newItem)
        } else setError(true)
        dispatchTodo({
            type: 'INPUT_TASK',
            value: '',
        })

    }
    const changeHandler = (e) => {
        dispatchTodo({
            type: 'INPUT_TASK',
            value: e.target.value
        })

    }
    const keyPressHandler = (e) => {
        if (e.key === 'Enter') {
            submitHandler(e)
        }
    }
    const errorHandler = () => {
        setError(null)
    }


    return (
        <div>
            {error && <Modal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <form className={classes.form} onSubmit={submitHandler}>
                <input
                    value={todo.value}
                    type='text'
                    onChange={changeHandler}
                    onKeyDown={keyPressHandler}
                />
                <button type="submit"
                    onClick={submitHandler}
                >Сохранить</button>
            </form>

        </div>
    )
}
export default TodoForm;
