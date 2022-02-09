import React, { useState, useContext } from "react";
import { ADD } from "../const";
import { TodoContext } from "../context";
import './TodoList.css'

const TodoList = () => {
    const [title, setTitle] = useState('')
    const { dispatch } = useContext(TodoContext)

    const changeHandler = (e) => {
        setTitle(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        const todo = {
            title,
            date: new Date().toLocaleDateString(),
            complete: false,
            id: Date.now()
        }
        dispatch({ type: ADD, todo })
        setTitle('')
    }
    return (
        <form className="form">
            <input type="text" value={title} onChange={changeHandler} />
            <button type="submit"
                onClick={submitHandler}
            >add</button>
        </form>
    )
}
export default TodoList;