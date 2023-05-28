import TodoItem from "./todo-item";
import Todos from "./todos.json";

const TodoList = () => {
    return (
        <>
            <h3>Todo List</h3>
            <ul className="list-group">
                {
                    Todos.map(todo => {
                        return (<TodoItem todo = {todo}/>)
                    })
                }
            </ul>
        </>
    );
}
export default TodoList;
