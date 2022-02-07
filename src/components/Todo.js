import classes from './Todo.module.css'

const Todo = ({ todos, onChange }) => {

    const removeTodo = (e) => {
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
    let todo = <h2>Список пусто</h2>
    if (todos.length > 0) {
        return todos.map((todo) => (
            <ul key={todo.id}>
                <li className={classes.item_todo}>
                    <input
                        type='checkbox'
                        id={todo.id}
                        checked={todo.completed}
                        onChange={toggleHandler}
                        className={classes.myCheck}
                    />
                    <span
                        className={todo.completed ? classes.strike : classes.item_text}
                    >
                        {todo.value}
                    </span>
                    <span className={classes.item_date}>{todo.date}</span>
                    <button
                        id={todo.id}
                        onClick={removeTodo} className={classes.delete}>X
                    </button>
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

