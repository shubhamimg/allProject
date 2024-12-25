import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
const Todo = () => {
let [todos, setTodos] = useState([{task: "Sample-task", id:uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");
    let addNewTask = () =>{
        setTodos((prevTodos) =>{
            return[...prevTodos, {task: newTodo, id: uuidv4() }]
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) =>{
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) =>{
        setTodos(todos.filter((todo) => todo.id != id));
    }

    let upperCaseAll = (todo) =>{
        setTodos(() =>todos.map( (todo) =>{
            return{
                ...todo,
                task: todo.task.toUpperCase(),
            };
        }));
    };

    let uperCaseOne = (id) =>{
        setTodos((todos) =>todos.map( (todo) =>{
           if(todo.id == id){
            return{
                ...todo,
                task: todo.task.toUpperCase(),
            };
           }else{
            return todo;
           }
        }));
    }


    return (
        <>
            <h1>
                Todo List
            </h1>
            <input onChange={updateTodoValue} value={newTodo} placeholder="Add Task" type="text" />
            <button onClick={addNewTask}>
                Add Task
            </button>

            <h2>
                Task To do
            </h2>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span>
                                {todo.task}
                            </span>
                            &nbsp;&nbsp;&nbsp;
                            <span>
                                <button onClick={() => deleteTodo(todo.id)}>
                                    Delete
                                </button>
                            </span>
                            <span>
                                <button onClick={() => uperCaseOne(todo.id)}>
                                    UpperCase One
                                </button>
                            </span>
                        </li>
                    ))
                }
            </ul>
            <button onClick={upperCaseAll}>
                UpperCase All
            </button>
        </>
    )
}

export default Todo