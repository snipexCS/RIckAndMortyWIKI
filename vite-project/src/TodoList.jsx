import { useState, useEffect } from "react";
import './TodoList.css'
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "./configuration"
import { useButtons } from "./useButtons.js";
import { useFireBase } from "./useFireBase.js";

function TodoList() {
  const { setTasks, tasks, handleMoveUp, handleMoveDown, handleDelete, handleEdit, saveEdit, isEdit, editTask, setEditTask, setTask, task, HandleInput } = useButtons()
  const { initialLocal, addTaskToFirestore, tasksCollectionRef, deleteTaskFromFirestore,updateTaskInFirestore } = useFireBase()


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

  //ToDo 
  //2.adding some loader untill data fetches succesfully
  //3.improving ui


  return (
    <div className="todo_container">
      <div className="container2">
        <div className="todo_list">
          <div className="input">
            <input value={task} onChange={HandleInput} type="text" />
            <button onClick={() => addTaskToFirestore(task, tasks, setTasks, setTask)}>Add</button>
          </div>
          <ul className="list">
            {tasks.map((item, i) => (
              <li key={item.id} className="list_elements">
                {item.task}
                <button onClick={() => handleDelete(i, deleteTaskFromFirestore)}>Del</button>

                <button onClick={() => handleEdit(i)}>Edit</button>
                <button onClick={() => handleMoveUp(i)}>Move Up</button>
                <button onClick={() => handleMoveDown(i)}>Move Down</button>

                {isEdit === i && (
                  <div>
                    <input value={editTask} onChange={(e) => setEditTask(e.target.value)} />
                    <button onClick={() => saveEdit(i, updateTaskInFirestore)}>Save</button>
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
