import '../App.css'
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function TaskDetail() {
  const location = useLocation()
  const navigate = useNavigate();
  const { task } = location.state; 
  const [isEdit, setIsEdit] = useState(false)
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [updatedDescription, setUpdatedDescription] = useState(task.description)
  const [detailTask, setDetailTask] = useState({title: task.title, description: task.description})

  const handleEdit = () => {
    setIsEdit(true)
  }
  
  const handleSave = () => {
    setIsEdit(false)
    const edittedTask = { ...task, title: updatedTitle, description: updatedDescription };

    const storedTasks = JSON.parse(localStorage.getItem('tasks'))
    // Creates a new array where storedTask and task matches, edits  storedTask with edittedTask and store the new array in updatedTask
    const updatedTasks = storedTasks.map((storedTask) => 
      storedTask.title === task.title && storedTask.description === task.description ? edittedTask : storedTask
    );

    // Replace the whole localstorage with the updatedTask
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    setDetailTask(edittedTask)

    // Exit edit mode
    setIsEdit(false);

    navigate('/')
  }


  return (
    <>
    {!isEdit ? 
    <div className="detail-card">
      <h1>Task Detail</h1>
      <h2>{detailTask.title}</h2>
      <p>{detailTask.description}</p>
      <button onClick={handleEdit}>Edit</button>
    </div>
    : 
    <div className="detail-card">
      <h1>Task Detail</h1>
      <div className="input-div">
        <input placeholder="Title" value={updatedTitle} className="edit-input" onChange={(e) => setUpdatedTitle(e.target.value)}></input>
        <input placeholder="Description" value={updatedDescription} className="edit-input" onChange={(e) => setUpdatedDescription(e.target.value)}></input>
        <button onClick={handleSave} className="save-btn">Save</button>
      </div>
    </div>}
    </>
  )
}

export default TaskDetail
