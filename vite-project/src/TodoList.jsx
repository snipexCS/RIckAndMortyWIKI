import { useState,useEffect } from "react";
import './TodoList.css'
import { collection, getDocs } from "firebase/firestore";
import { db } from "./configuration"

function TodoList() {
    let arr = ["Finish watching episode 3", "Do homework", "Go out with friends"]
    const [lists, setLists] = useState(arr)
    const [task, setTask] = useState('')
    const [isEdit, setIsEdit] = useState(null)
    const [editTask, setEditTask] = useState('');
    const [products, setProducts] = useState([]);



    useEffect(() => {
        const fetchProducts = async () => {
            const productsCollection = collection(db, "Todo_tasks");
            const snapshot = await getDocs(productsCollection);
            const productsList = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setProducts(productsList);
        };

        fetchProducts();
    }, []);


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

    const saveEdit = (index) => {
        const newList = [...lists]
        newList[index] = editTask
        setLists(newList)
        setIsEdit(null)
    }
    const handleMoveUp = (index) => {
        if (index > 0) {
            let newArr = [...lists]

                ;[newArr[index], newArr[index - 1]] =
                    [newArr[index - 1], newArr[index]]


            setLists(newArr)
        } else {
            return null
        }


    }
    const handleMoveDown = (index) => {
        console.log(index);
        let newArr = [...lists]
        if (index < newArr.length - 1) {


            ;[newArr[index], newArr[index + 1]] =
                [newArr[index + 1], newArr[index]]


            setLists(newArr)
        } else {
            return null
        }



    }



    return (
        <div className="todo_container">
            <div>
                {products.map(product => (
                    <div key={product.id}>{product.product_name}</div>
                ))}
            </div>
            <div className="container2">


                <div className="todo_list">
                    <div className="input">
                        <input value={task} onChange={(e) => HandleInput(e)} type="text" />
                        <button onClick={addToList}>add</button>
                    </div>
                    <ul className="list">
                        {lists.map((el, i) => {
                            return <li key={i} className="list_elements">{el}<button onClick={() => Hadnleremove(i)}>Del</button><button onClick={() => HandleEdit(i)}>Edit</button>
                                <button onClick={() => handleMoveUp(i)}>Move Up</button><button onClick={() => handleMoveDown(i)}>Move down</button>
                                <div >
                                    {isEdit === i ? <input onChange={(e) => setEditTask(e.target.value)} /> : null}
                                    {isEdit === i ? <button onClick={() => saveEdit(i)}>Save</button> : null}

                                </div> </li>
                        })}
                    </ul>

                </div>
            </div>

        </div>
    )
}

export default TodoList;