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
    const [task, dispatchTask] = useReducer(todoReduser, {
        value: '',
        date: null,
    });
    const [error, setError] = useState(null);

    const submitHandler = (e) => {
        e.preventDefault()
        if (task.value.trim().length > 0) {
            const newItem = {
                ...task,
                id: Math.random().toString(36).substring(2.9),
                complete: false,
            }
            onAddTask(newItem)
        }
        if (task.value.trim().length === 0) {
            setError({
                title: 'Поле пусто!!!',
                message: 'Пожалуйста  напишите свою задачу',
            })
            dispatchTask({
                type: 'INPUT_TASK',
                value: '',
            })
        }
    }
    const changeHandler = (e) => {
        dispatchTask({
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
                    value={task.value}
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
