
import { collection, addDoc } from "firebase/firestore";
import { db } from "./configuration"
import { useButtons } from "./useButtons";
import { useEffect } from "react";
import { getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";



export function useFireBase() {
    const initialLocal = ["Finish watching episode 3", "Do homework", "Go out with friends"];
    const tasksCollectionRef = collection(db, "Todo_tasks");





    const addTaskToFirestore = async (task, tasks, setTasks, setTask) => {
        console.log(task);
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
    const deleteTaskFromFirestore = async (id) => {
        try {
            await deleteDoc(doc(db, "Todo_tasks", id));
            console.log("Deleted from Firestore:", id);
        } catch (err) {
            console.error("Delete error:", err);
        }

    };
    const updateTaskInFirestore = async (id, newTask) => {
        try {
            const ref = doc(db, "Todo_tasks", id);
            await updateDoc(ref, { task: newTask });
            console.log("Updated Firestore:", id);
        } catch (err) {
            console.error("Update error:", err);
        }
    };




    return { initialLocal, addTaskToFirestore, tasksCollectionRef, deleteTaskFromFirestore,updateTaskInFirestore }
}