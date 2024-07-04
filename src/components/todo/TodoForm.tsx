import { FormEvent, useContext, useState } from "react";
import { TodoContext } from "../../contes/ToDoProvider";

const TodoForm = () => {
    const { state, dispatch } = useContext(TodoContext);
    console.log(state);
    const[task, setTask] = useState('');
    const handelSubmit = (e : FormEvent) => {
        e.preventDefault();

        const todo = {
            id : Math.random().toString(36).substring(2,8),
            title : task,
            isCompleted : false
        }
        dispatch({type : "AddTodo", payload : todo})
       
    }
    return (
        <div>
           <h1 className="w-10/12 mx-auto text-center">Add to do from</h1>
           <form className="grid grid-cols-1 space-y-3 w-10/12 mx-auto" onSubmit={handelSubmit}>
            <label htmlFor="Todo">Task</label>
            <input onBlur={(e) => setTask(e.target.value)} className="border-2" type="text" name="todo" id="todo" />
            <button type="submit" className="bg-red-400 rounded-2xl p-1" >Submit</button>
            </form> 
        </div>
    );
};

export default TodoForm;