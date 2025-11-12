import { useState } from "react";

export function useButtons() {
    const [tasks, setTasks] = useState([]);
    const [isEdit, setIsEdit] = useState(null);
    const [editTask, setEditTask] = useState('');
    const [task, setTask] = useState('');
    
    const handleMoveUp = (index) => {
        if (index === 0) return;
        const newTasks = [...tasks];
        [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
        setTasks(newTasks);
    };

    const handleMoveDown = (index) => {
        if (index >= tasks.length - 1) return;
        const newTasks = [...tasks];
        [newTasks[index], newTasks[index + 1]] = [newTasks[index + 1], newTasks[index]];
        setTasks(newTasks);
    };
    const handleDelete = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    const handleEdit = (index) => {
        setIsEdit(index);
        setEditTask(tasks[index].task);
    };

    const saveEdit = (index) => {
        const newTasks = [...tasks];
        newTasks[index].task = editTask;
        setTasks(newTasks);
        setIsEdit(null);
    };

    const HandleInput = (e) => setTask(e.target.value);

    return { setTasks, tasks, handleMoveUp, handleMoveDown, handleDelete, handleEdit, saveEdit, isEdit, editTask, setEditTask, setTask ,task,HandleInput}
}