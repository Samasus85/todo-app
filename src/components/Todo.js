// import ExpenseDate from "./ExpenseDate";
import classes from './Todo.module.css'
import Card from './UI/Card'

const Todo = ({ todos, onChange }) => {
    // const expenseDate = new Date(2022, 2, 5)

    const removeTask = (e) => {
        const filteredTodos = todos.filter((todo) => todo.id !== e.target.id)
        onChange([...filteredTodos])
    }

    const toggleHandler = (e) => {
        const checkedTodos = todos.map((todo) => {
            if (todo.id === e.target.id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        onChange([...checkedTodos])
    }
    let todo = <h1 className={classes.no_tasks}>NO TASKS</h1>
    if (todos.length > 0) {
        return todos.map((todo) => (
            <ul key={todo.id}>
                <li className={classes.item_todo}>
                    <input
                        type='checkbox'
                        id={todo.id}
                        checked={todo.completed}
                        onChange={toggleHandler}
                        className={classes.strike}
                    />
                    <span
                        className={todo.completed ? classes.stike : classes.item_text}
                    >
                        {todo.value}
                    </span>
                    <span className={classes.item_date}>{todo.date}</span>


                    <div onClick={() => removeTask(todo.id)}>
                        <span className={classes.delete}>X</span>
                    </div>
                </li>
            </ul>
        ))
    }
    return (
        <div>
            {todo}
        </div>
    )
}
export default Todo;

