import { useState, useEffect } from "react";
import './TodoList.css'
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "./configuration"
import { useButtons } from "./useButtons.js";

function TodoList() {
  const  {setTasks,tasks,handleMoveUp,handleMoveDown,handleDelete,handleEdit ,saveEdit,isEdit,editTask,setEditTask,setTask,task,HandleInput} = useButtons()
  const initialLocal = ["Finish watching episode 3", "Do homework", "Go out with friends"];
  const tasksCollectionRef = collection(db, "Todo_tasks");

  useEffect(() => {
    const fetchTasks = async () => {
      const snapshot = await getDocs(tasksCollectionRef);
      const firebaseTasks = snapshot.docs.map(doc => ({
        id: doc.id,
        task: doc.data().task,
        source: "firebase"
      }));
      const localTasks = initialLocal.map((t, i) => ({
        id: `local-${i}`,
        task: t,
        source: "local"
      }));
      setTasks([...firebaseTasks, ...localTasks]);
    };

    fetchTasks();
  }, []);

  const addTaskToFirestore = async () => {
    if (!task.trim()) return;
    try {
      const docRef = await addDoc(tasksCollectionRef, {
        task,
        createdAt: new Date().toISOString()
      });
      setTasks([...tasks, { id: docRef.id, task, source: "firebase" }]);
      setTask('');
    } catch (err) {
      console.error(err);
    }
  };


  
//ToDo 
// 1.editing/deleting Of firebase tasks
//2.adding some loader untill data fetches succesfully
//3.improving ui
  

  return (
    <div className="todo_container">
      <div className="container2">
        <div className="todo_list">
          <div className="input">
            <input value={task} onChange={HandleInput} type="text" />
            <button onClick={addTaskToFirestore}>Add</button>
          </div>
          <ul className="list">
            {tasks.map((item, i) => (
              <li key={item.id} className="list_elements">
                {item.task}
                <button onClick={() => handleDelete(i)}>Del</button>
                <button onClick={() => handleEdit(i)}>Edit</button>
                <button onClick={() => handleMoveUp(i)}>Move Up</button>
                <button onClick={() => handleMoveDown(i)}>Move Down</button>

                {isEdit === i && (
                  <div>
                    <input value={editTask} onChange={(e) => setEditTask(e.target.value)} />
                    <button onClick={() => saveEdit(i)}>Save</button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
