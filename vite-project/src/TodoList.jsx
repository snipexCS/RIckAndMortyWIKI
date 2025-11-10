import { useState } from "react";
import './TodoList.css'

function TodoList() {
    let arr = ["Finish watching episode 3", "Do homework", "Go out with friends"]
    const [lists, setLists] = useState(arr)
    const [task, setTask] = useState('')
    const [isEdit, setIsEdit] = useState(null)
    const [editTask, setEditTask] = useState(''); 


    const HandleInput = (e) => {
        setTask(e.target.value)
    }

    const addToList = () => {
        if (task.trim() !== "") {
            setLists([...lists, task]);
            setTask(" ");
        }
    }
    const Hadnleremove = (index) => {
        setLists(lists.filter((_, i) => i !== index))
    }
    const HandleEdit = (index) => {
        setIsEdit(index)
        setEditTask(lists[index]);
        

    }

    const saveEdit = (index)=>{
        const newList = [...lists]
        newList[index] = editTask
        setLists(newList)
        setIsEdit(null)
    }
    return (
        <div className="todo_container">
            <div className="container2">


                <div className="todo_list">
                    <div className="input">
                        <input value={task} onChange={(e) => HandleInput(e)} type="text" />
                        <button onClick={addToList}>add</button>
                    </div>
                    <ul className="list">
                        {lists.map((el, i) => {
                            return <li key={i}>{el}<button onClick={() => Hadnleremove(i)}>Del</button><button onClick={() => HandleEdit(i)}>Edit</button>
                                <div >
                                    {isEdit === i ? <input onChange={(e) => setEditTask(e.target.value)}   />  : null}
                                    {isEdit === i ? <button onClick={() => saveEdit(i)}>Save</button>  : null}
                                    
                                </div> </li>
                        })}
                    </ul>

                </div>
            </div>

        </div>
    )
}

export default TodoList;