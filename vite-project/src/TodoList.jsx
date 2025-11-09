import { useState } from "react";
import './TodoList.css'

function TodoList() {
    let arr = ["Finish watching episode 3", "Do homework", "Go out with friends"]
    const [lists, setLists] = useState(arr)
    const [task , setTask] = useState('')

   const HandleInput = (e)=>{
    setTask(e.target.value)
   }
   
    const addToList = ()=>{
         if (task.trim() !== "") {
            setLists([...lists, task]);
            setTask(" "); 
        }
    }


    return (
        <div className="todo_container">
            <div className="container2">


                <div className="todo_list">
                    <div className="input">
                        <input value={task} onChange={(e)=>HandleInput(e)} type="text" />
                        <button onClick={addToList}>add</button>
                    </div>
                    <ul className="list">
                        {lists.map((el, i) => {
                            return <li key={i}>{el}</li>
                        })}
                    </ul>

                </div>
            </div>

        </div>
    )
}

export default TodoList;